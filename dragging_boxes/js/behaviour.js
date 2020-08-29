
// TODO: redo dragging with onetimeeventlistener
function addOnetimeEventListener(dom, eventName, handler) {
  const newHandler = e => {
    handler(e);
    dom.removeEventListener(eventName, newHandler);
  };
  dom.addEventListener(eventName, newHandler);
}


// TODO: there seems to be a bug where handleFirstMove is sometimes (when?) called twice instead of once
//       for Idempotent handleFirstMove it won't really matter ofcourse
// TODO: add dragging removal
const DOM = {
  makeDraggable(dom, {
    handleDown= () => {},
    handleMove = () => {},
    handleFirstMove= () => {},
    handleUp= () => {},
  }) {

    const draggingHandler = (edown) => {
      handleDown();
      const [mousedownX, mousedownY] = [edown.pageX, edown.pageY];

      const mouseFirstMoveHandler = () => {
        handleFirstMove();
        document.removeEventListener("mousemove", mouseFirstMoveHandler);
      };
      document.addEventListener("mousemove", mouseFirstMoveHandler);

      const mouseMoveHandler = (e) => {
        const [dx, dy] = [e.pageX - mousedownX, e.pageY - mousedownY];
        handleMove(dx, dy);
      };
      document.addEventListener("mousemove", mouseMoveHandler);

      const mouseUpHandler = () => {
        handleUp();
        document.removeEventListener("mousemove", mouseMoveHandler);
        document.removeEventListener("mouseup", mouseUpHandler);
      };
      document.addEventListener("mouseup", mouseUpHandler);

    };
    dom.addEventListener("mousedown", draggingHandler);

    // the following kills the dragging behaviour on the dom element
    return () => {
      dom.removeEventListener("mousedown", draggingHandler);
    };
  }
};

// *** Draggable Behaviour
// makes a widget draggable with a mouse
function makeDraggable(widget) {
  // TODO: what about garbage collecting when the widget dies? is that automatic when the dom node is deleted?
  // TODO: Is the following a valid assumption?: This code relies on mousedown event being processed sooner than the first mousemove event
  let referenceSurface;
  const dragConfig = {
    handleDown() { referenceSurface = widget.surface; },
    handleFirstMove() { makeTop(widget); },
    handleMove(dx, dy) {
      // widget.surface = Surface.translate(referenceSurface, Vector(dx, dy));
      setSurface(widget, Surface.translate(referenceSurface, Vector(dx, dy)));
      renderWidget(widget);
    },
    handleUp() { referenceSurface = widget.surface; },
  };
  return DOM.makeDraggable(widget.dom, dragConfig); // returns the way to disable the dragg
}

// *** Resizable Behaviour
// Adds a corner to the widget
//    corner can be one of "topleft", "topright", "bottomright", or "bottomleft"
// TODO: what if I call this multiple times? This ain't idempotent... it will keep adding new corners to the widget
function makeResizableGeneric(widget, cornerName) {
  const dispatchConfig = {
    topleft: [Surface.stretchTopLeft, "widget-resize-top-left"],
    topright: [Surface.stretchTopRight, "widget-resize-top-right"],
    bottomright: [Surface.stretchBottomRight, "widget-resize-bottom-right"],
    bottomleft: [Surface.stretchBottomLeft, "widget-resize-bottom-left"],
  };
  const [resize, className] = dispatchConfig[cornerName];

  const dom = document.createElement("div");
  dom.classList.add(className);
  widget.dom.appendChild(dom);

  // TODO: should this really be here? seems like I need to make this corner another widget that's undraggable, unmovable and so on...
  dom.addEventListener("mousedown", e => { e.stopPropagation(); });

  // TODO: Is the following a valid assumption?: This code relies on mousedown event being processed sooner than the first mousemove event
  let referenceSurface;
  const dragConfig = {
    handleDown() { referenceSurface = widget.surface; },
    handleFirstMove() { makeTop(widget); },
    handleMove(dx, dy) {
      // widget.surface = resize(referenceSurface, Vector(dx, dy));
      setSurface(widget, resize(referenceSurface, Vector(dx, dy)));
      renderWidget(widget);
    },
    handleUp() { referenceSurface = widget.surface; },
  };
  const killDrag = DOM.makeDraggable(dom, dragConfig);
  return () => {
    // TODO: q. Do I need to remove the event listener?
    //       ! POTENTIAL MEMORY LEAK
    //           https://stackoverflow.com/questions/12528049/if-a-dom-element-is-removed-are-its-listeners-also-removed-from-memory
    // killDrag();
    dom.remove();
  };
}

function makeResizable(widget) {
  const killTopLeft     = makeResizableGeneric(widget, "topleft");
  const killTopRight    = makeResizableGeneric(widget, "topright");
  const killBottomRight = makeResizableGeneric(widget, "bottomright");
  const killBottomLeft  = makeResizableGeneric(widget, "bottomleft");
  return () => {
    killTopLeft();
    killTopRight();
    killBottomRight();
    killBottomLeft();
  };
}

// *** makeStopPropagation
function makeStopPropagation(widget, eventName) {
  const propagationHandler = e => { e.stopPropagation(); };
  widget.dom.addEventListener(eventName, propagationHandler);
  return () => {
    widget.dom.removeEventListener(eventName, propagationHandler);
  };
}

function constrainX(S, xBound) {
  const width = S.wh.x;
  const newB = Point(Math.min(S.B.x, xBound), S.B.y);
  const newA = Point(Math.min(S.A.x, xBound - width), S.A.y);
  return Surface.fromPoints(newA, newB);
}
function makeConstrainX(widget, xBound) {
  // TODO: removal?
  addSurfaceTransform(widget, S => constrainX(S, xBound));
}

// function makeBoundX()

// *** makeContainWithinParent
// TODO
function makeContainWithinParent(widget) {
  widget.parent
}

// *** move each 200 miliseconds by 5px in x-direction
function makeMove(widget) {
  const intervalId = setInterval(() => {
    setSurface(widget, Surface.translate(widget.surface, Vector(15, 0)));
    renderWidget(widget);
  }, 200);
  return () => {
    clearInterval(intervalId);
  };
}

// TODO: Abstract this out into some sort of synchronizer
// TODO: this waiting strategy won't work if we use drag & drop programatically?
//       what do I even mean by programatically?
let ScaryGlobalGraspState = {// TODO: should this really be here?
  // TODO: what if I quickly spam Down?
  anounceDropperDown() {
    console.log("DROPPER DOWN");
    this.state = 0;
  },
  anounceDropperUp(dropper) {
    console.log("DROPPER UP", this.state);
    // TODO: what should I do now? this is the weirdest thing...
    //    maybe wait? & in 100 ms attempt to call the receiver?
    this.state += 1;
    this.dropper = dropper;
    this.attemptDrop()
    setTimeout(() => {
      this.reset();
    }, 100); // TODO how long should I wait?
  },
  anounceReceiverUp(receiver) {
    console.log("RECEIVER UP", this.state);
    this.state += 1;
    this.receiver = receiver;
    this.attemptDrop()
    setTimeout(() => {
      this.reset();
    }, 100); // TODO how long should I wait?
  },
  reset() {
    this.state = 0;
    this.dropper = undefined;
    this.receiver = undefined;
    console.log("RESETTING", this.state);
    console.log("------------");
  },
  attemptDrop() {
    console.log("ATTEMPTING DROP!", this.state);
    if (this.state >= 2) {
      console.log("DROPPING!", this.state);
      this.dropper.droppedBehaviour(this.receiver);
    }
  },
  state: 0,
  dropper: undefined,
  receiver: undefined,
};

// *** Drag & Drop
// any widget with this behaviour can drop another behaviour on unsuspecting widgets
function makeDropper(widget, behaviour) {
  widget.droppedBehaviour = behaviour;
  const mouseDownHandler = () => {
    ScaryGlobalGraspState.anounceDropperDown();

    addOnetimeEventListener(document, "mouseup", () => {
      ScaryGlobalGraspState.anounceDropperUp(widget);
    });
  };
  widget.dom.addEventListener("mousedown", mouseDownHandler);
  return () => {
    widget.dom.removeEventListener("mousedown", mouseDownHandler);
  };
}


// any widget with this behaviour can take in 
function makeReceiver(widget) {
  const mouseUpHandler = () => {
    ScaryGlobalGraspState.anounceReceiverUp(widget);
  };
  widget.dom.addEventListener("mouseup", mouseUpHandler);

  return () => {
    widget.dom.removeEventListener("mouseup", mouseUpHandler);
  };
}

