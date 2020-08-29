
// TODO: figure out how to disable dragging of html elements

// TODO: do you need to distinguish Selected vs Currently Clicked widget?

// TODO: what about overflow?
const generateIdentifier = (() => {
  let lastId = 0;
  return () => {
    const newId = lastId;
    lastId += 1;
    return newId;
  };
})();

// TODO: what about overflow?
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
  currentlySelectedWidget: { id: undefined }, // TODO: is this a good decision?
};

function isCurrentlySelected(widget) {
  return widget.id === ScaryGlobalState.currentlySelectedWidget.id;
}

//----------Selections
// TODO: send a Message to the widget that's being deselected
//       send a Message to the widget that's being selected
function setCurrentlySelectedWidget(widget) {
  if (!isCurrentlySelected(widget)) {
    ScaryGlobalState.currentlySelectedWidget = widget;
  }
}
// TODO: maybe I should merge these two functions (that I am in between of) into one?
function makeTop(widget) {
  widget.dom.style["z-index"] = String(topzindex());
  setCurrentlySelectedWidget(widget);
}


// WIDGETS
function attachWidgetToWorld(widget) {
  ScaryGlobalState.widgets.push(widget);
  bodyDOM.appendChild(widget.dom);
}

// TODO: optimize this with diff
function renderWidget(widget) {
  const {x, y} = widget.surface.A;
  const {x: width, y: height} = widget.surface.wh;
  widget.dom.style.transform = `translate(${x}px, ${y}px)`;
  widget.dom.style.width = `${width}px`;
  widget.dom.style.height = `${height}px`;
}

function makeWidget({
  x, y,
  width, height,
  parent,
}) {
  const id = generateIdentifier();
  const dom = document.createElement("div");
  const widget = {
    type: "widget",
    id,
    dom,
    children: [],
    parent, // TODO: what about base objects? parent is World?

    surface: Surface.fromDimension(Point(x, y), Vector(width, height)),
    surfaceTransforms: [],
  };

  dom.classList.add("widget");

  // TODO: maybe make this into a separate Behaviour?
  // * When clicked, put it on top
  dom.addEventListener("click", () => {
    makeTop(widget);
  });

  // * Render initial widget
  renderWidget(widget);

  return widget;
}
// TODO: refactor this
function setSurface(widget, S) {
  widget.surfaceTransforms.forEach(f => {
    S = f(S);
  });
  widget.surface = S;
}
function addSurfaceTransform(widget, f) {
  widget.surfaceTransforms.push(f)
}

function attach(childWidget, parentWidget) {
  parentWidget.children.push(childWidget); // TODO: what about identity... i.e. what if the widget is already a child of the parent
  // TODO: initial coordinates... w.r.t. the parent are Point(0,0)?
  childWidget.surface = Surface.translate2origin(childWidget.surface);
  parentWidget.dom.appendChild(childWidget.dom);
  renderWidget(childWidget);
}

function attachWidgetToWorld(widget) {
  ScaryGlobalState.widgets.push(widget);
  bodyDOM.appendChild(widget.dom);
}

