
const sliderA = document.getElementById('slider-a');
const sliderB = document.getElementById('slider-b');

const WIDTH = 500;
const HEIGHT = 500;
const c = document.getElementById('graph');
c.width = WIDTH;
c.height = HEIGHT;
const ctx = c.getContext('2d');

// TODO: Points that are simulteniously rectangular vs central coordinates 



// This assumes rectangular coordinates
function drawLine(ctx, A, B) {
  ctx.beginPath();
  ctx.moveTo(A[0], A[1]);
  ctx.lineTo(B[0], B[1]);
  ctx.stroke();
}

function drawXAxis(ctx) {
  const Left  = [0, HEIGHT/2];
  const Right = [WIDTH, HEIGHT/2];
  drawLine(ctx, Left, Right);
}

function drawYAxis(ctx) {
  const Top  = [WIDTH/2, 0];
  const Bottom = [WIDTH/2, HEIGHT];
  drawLine(ctx, Top, Bottom);
}

function normalize([x, y], h = 1) {
  const imag = h * 1/Math.sqrt(x**2 + y**2); // inverse of magnitude
  return [imag * x, imag * y];
}

// Point, Vector -> Point
function Add([x, y], [a,b]) {
  return [x + a, y + b];
}

// Point, Point -> Vector
function Sub([x0, y0], [x1, y1]) {
  return [x0 - x1, y0 - y1];
}

// Vector -> Vector
function Neg([a, b]) {
  return [-a, -b];
}

// Point, Vector -> Effect(Draw)
// assumes ractangular coords
function drawFullLine(ctx, P, v) {
  const scaleFactor = Math.SQRT2 * 500; // TODO magic constant, change this to account for widht/height
  const nv = normalize(v, scaleFactor);
  drawLine(ctx, P, Add(P, nv));
}

// assumes that b is in rectangular coords
function graphLinearMap(ctx, a, b) {
  const A = center2rect([0, b]);
  const B = center2rect([1,a + b])
  const v = Sub(B, A);
  drawFullLine(ctx, A, v);
  drawFullLine(ctx, A, Neg(v));
}

function setBackground(ctx) {
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
}

function rect2center([x, y]) {
  return [x - WIDTH/2, HEIGHT/2 - y];
}

function center2rect([X, Y]) {
  return [X + WIDTH/2, -Y + HEIGHT/2];
}


// Range of a is [-50; 50]
// Range of b is [-20; 20]
const State = {
  a: 1,
  b: 0,

  render() {
    ctx.fillStyle = '#c9c9c9';
    setBackground(ctx);

    ctx.strokeStyle = '#8f8f8f';
    drawXAxis(ctx);
    drawYAxis(ctx);

    ctx.strokeStyle = '#005078';
    ctx.lineWidth = 2;
    graphLinearMap(ctx, this.a, this.b * 25);
  }
}

function attachEvent2Slider(slider, f) {
  slider.addEventListener('input', function () {
    f(slider.value);
  });
}

attachEvent2Slider(sliderA, function (astr) {
  State.a = Number(astr);
  State.render();
});

attachEvent2Slider(sliderB, function (bstr) {
  State.b = Number(bstr);
  State.render();
});

State.render()

