// TODO: figure out how to disable dragging of html elements

// TODO: do you need to distinguish Selected vs Currently Clicked widget?

const generateIdentifier = (() => {
  let lastId = 0;
  return () => {
    const newId = lastId;
    lastId += 1;
    return newId;
  };
})();

const topzindex = (() => {
  let topZIndex = 1;
  return () => {
    const newZIndex = topZIndex;
    topZIndex += 1;
    return newZIndex;
  };
})();

const bodyDOM = document.querySelector("body");


const ScaryGlobalState = {
  widgets: [],
};

const setCurrentlySelectedWidget = (() => {
  let currentlySelectedWidget = { id: undefined }; // TODO: are you sure undefined as initial value is a good idea?
                                                   // note that this is a private state
  return (widget) => {
    if (widget.id !== currentlySelectedWidget.id) {
      // console.log(`New Selection Event: ${widget.id}`);

      currentlySelectedWidget.isSelected = false;
      widget.isSelected = true;

      currentlySelectedWidget = widget;
    }
  }
})();

function makeTop(widget) {
  widget.dom.style["z-index"] = String(topzindex());
  setCurrentlySelectedWidget(widget);
}

function translate(widget, x, y) {
  widget.x = x;
  widget.y = y;
  widget.dom.style.transform = `translate(${x}px, ${y}px)`;
}


function makeWidget() {
  const id = generateIdentifier();
  const dom = document.createElement("div");
  const widget = {
    type: "widget",
    id,
    dom,
    x: 0,
    y: 0,
    refX: 0,
    refY: 0,
    isSelected: false, // TODO: 
  };

  dom.classList.add("widget");
  dom.addEventListener("click", () => {
    makeTop(widget);
  });
  dom.addEventListener("mousedown", (edown) => {
    const [mousedownX, mousedownY] = [edown.pageX, edown.pageY];

    const mouseMoveHandler = (e) => {
      const [x, y] = [e.pageX - mousedownX, e.pageY - mousedownY];
      // console.log(x, y);
      translate(widget, widget.refX + x, widget.refY + y);
      // console.log("move");
      // TODO:
    };
    document.addEventListener("mousemove", mouseMoveHandler);
    const zIndexHandler = () => { // this executes only once!
      // console.log("MOUSEMOVED FOR THE FIRST TIME");
      makeTop(widget);
      document.removeEventListener("mousemove", zIndexHandler);
    };
    document.addEventListener("mousemove", zIndexHandler);

    const mouseUpHandler = () => {
      // TODO: set new reference
      widget.refX = widget.x;
      widget.refY = widget.y;

      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
      // console.log("up");
      // console.log("------------");
    };
    document.addEventListener("mouseup", mouseUpHandler);

    // console.log("down!");
  });
  return widget;
}

function attachWidgetToWorld(widget) {
  ScaryGlobalState.widgets.push(widget);
  bodyDOM.appendChild(widget.dom);
}

const addWidgetButtonDOM = document.getElementById("add-widget");
addWidgetButtonDOM.addEventListener("click", () => {
  const widget = makeWidget();
  attachWidgetToWorld(widget);
});


// MAIN
const box0 = makeWidget();
const box1 = makeWidget();
box0.dom.setAttribute("id", "box0");
box1.dom.setAttribute("id", "box1");
attachWidgetToWorld(box0);
attachWidgetToWorld(box1);

