
const Rot = ([x, y]) => [-y, x];
const Hyperbole = ([x, y]) => [y, x];
const VecX = ([x, y]) => [x, 0];
const VecY = ([x, y]) => [0, y];
const Jordan = lambda => ([x, y]) => [lambda * x + y, lambda * y];

const flows = [];
const currentVecField = Hyperbole;


function normalizeVec([a,b]) {
  const k = 1/Math.sqrt(a**2 + b**2);
  return [k*a, k*b];
}

// Assumes Central Coords
function drawArrow(p, v) {
  const [x, y] = center2rect(p);
  const [a1, b1] = normalizeVec(v);
  const scale = 15;

  const a = scale * a1;
  const b = scale * b1;
  const x1 = x - a;
  const y1 = y - b;
  const x2 = x + a;
  const y2 = y + b;

  line(x1, y1, x2, y2);

  const x3 = x + 0.2*-b;
  const y3 = y + 0.2*a;

  const x4 = x + 0.2*a;
  const y4 = y + 0.2*b;

  const x5 = x + 0.2*b;
  const y5 = y + 0.2*-a;

  line(x3, y3, x4, y4);
  line(x4, y4, x5, y5);
}


function setup() {

  let myCanvas = createCanvas(800, 800);
  myCanvas.parent('vec-field');

}

function vectorFieldFlow(V, p, dt, tMax, jump) {
  const pts = [p];
  let t = 0;
  let s = 0;
  while (t < tMax) {
    const [a, b] = V(p);
    const x = p[0] + a*dt;
    const y = p[1] + b*dt;
    p = [x, y];
    if (s > jump) {
      s = 0;
      pts.push(p);
    }
    t += dt;
    s += dt;
  }
  return pts;
}


function rect2center([x, y]) {
  // -10 to 10
  const size = 10;
  return [map(x, 0, width, -size, size), map(y, 0, height, -size, size)];
}

function center2rect([x, y]) {
  const size = 10;
  return [map(x, -size, size, 0, width), map(y, -size, size, 0, height)];
}

function addFlow(V, p, dt, tMax) {
  flows.push(vectorFieldFlow(V, p, dt, tMax, 0.1));
}

function drawFlow() {
  noFill();
  flows.forEach(flow => {
    beginShape();
    flow.forEach(p => {
      const [x, y] = center2rect(p);
      vertex(x, y);
    });
    endShape();
  });
}

function mousePressed() {
  addFlow(currentVecField, rect2center([mouseX, mouseY]), 0.01, 2.5);
}



function draw() {
  background(242, 242, 242);

  stroke('grey');
  for (let i = -10; i < 10; i++) {
    for (let j = -10; j < 10; j++) {
      drawArrow([i, j], currentVecField([i, j]));
    }
  }

  stroke('blue');
  strokeWeight(3);
  drawFlow();
  strokeWeight(1);

  const p = rect2center([mouseX, mouseY]);
  // console.log(x, y);
  stroke('green');
  strokeWeight(3);
  drawArrow(p, currentVecField(p));
  strokeWeight(1);
}

