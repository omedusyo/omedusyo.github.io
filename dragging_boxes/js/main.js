
// MAIN

function makeBoxWidget({x, y, width, height}) {
  const widget = makeWidget({x,y,width,height});
  makeDraggable(widget);
  makeResizable(widget);
  return widget;
}

const addWidgetButtonDOM = document.getElementById("add-widget");
addWidgetButtonDOM.addEventListener("click", () => {
  const widget = makeBoxWidget({x: 500, y: 500, width: 200, height: 200 });
  attachWidgetToWorld(widget);
});

const box0 = makeBoxWidget({ x: 0, y: 0, width: 100, height: 300 });
box0.dom.setAttribute("id", "box0");
attachWidgetToWorld(box0);

const box1 = makeBoxWidget({x: 0, y: 0, width: 200, height: 200});
box1.dom.setAttribute("id", "box1");
attachWidgetToWorld(box1);
makeConstrainX(box1, 500);

const box3 = makeBoxWidget({x: 300, y: 200, width: 500, height: 500});
box3.dom.setAttribute("id", "box3");
attachWidgetToWorld(box3);
const box4 = makeWidget({x: 100, y: 100, width: 40, height: 40});
box4.dom.setAttribute("id", "box4");
makeStopPropagation(box4, "mousedown");
makeDraggable(box4);
makeContainWithinParent(box4);
attachWidgetToWorld(box4);
attach(box4, box3);


const behaviourBox5 = makeWidget({
  x: 150, y: 500, width: 50, height: 50
});
attachWidgetToWorld(behaviourBox5);
behaviourBox5.dom.setAttribute("id", "box5");
// makeDraggable(behaviourBox5);
makeDropper(behaviourBox5, widget => {
  console.log("MAKING SOME MOVES!");
  makeMove(widget)
});
// makeDropper(behaviourBox5, (widget) => {
//   console.log("BEHAVIOUR IS WORKING");
// });

const box6 = makeWidget({x: 150, y: 300, width: 100, height: 100});
box6.dom.setAttribute("id", "box6");
attachWidgetToWorld(box6);
makeReceiver(box6)

// const debuggWidget = makeWidget({x: 963, y: 10, width: 500, height: 800});
// debuggWidget.dom.setAttribute("id", "debugg");
// const h1 = document.createElement("h1");
// h1.textContent = "WAZZUP"
// debuggWidget.dom.appendChild(h1);
// attachWidgetToWorld(debuggWidget);

