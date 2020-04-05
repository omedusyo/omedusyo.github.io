

// ----SLIDERS
// If step size is h = 1/10 = 0.1, then inverseStepSize(h) = 10
// but because of how floating point arithmetic is implemented, we get tiny errors with which I do not want to deal with
// so I use inverseStepSize instead of stepSize
// !! This works nicely only for inverseStepSize that divides a power of 10
function Slider({ selector, range: [min, max], value, inverseStepSize }) {
  const sliderDom = document.querySelector(selector);
  sliderDom.setAttribute('min',   min   * inverseStepSize);
  sliderDom.setAttribute('max',   max   * inverseStepSize);
  sliderDom.setAttribute('value', value * inverseStepSize);
  return {
    type: 'slider',
    range: [min, max],
    inverseStepSize,
    dom: sliderDom,
    // this will fire given a current value
    attachEvent(f) {
      sliderDom.addEventListener('input', function () {
        const val = Number(sliderDom.value);
        f(val / inverseStepSize);
      });
    },
  };
}

// example
// const sliderTest = Slider({selector: '#slider-test', range: [-3, 3], inverseStepSize: 10, value: 1 });
// sliderTest.attachEvent(function (x) {
//   ...
// });


// ----LATEX EQUATIONS
const Equations = {
  renderGeneral(dom) {
    katex.render(`y = a x + b`, dom, {
      throwOnError: false
    });
  },

  particular(State) {
    if (State.a == 0) {
      return `y = ${State.b}`;
    } else {
      const alpha = State.a == 1 ? '' : `${State.a}`;
      let beta;
      if (State.b == 0) {
        beta = '';
      } else if (State.b > 0) {
        beta = `+ ${State.b}`;
      } else {
        // State.b < 0
        beta = `- ${-State.b}`;
      }
      return `y = ${alpha} x ${beta}`;
    }
  },

  renderParticular(dom, State) {
    // katex.render(`y = ${State.a} x + ${State.b}`, dom, {
    katex.render(Equations.particular(State), dom, {
      throwOnError: false,
    });
  },
};


// ----GRAPHING
// TODO: Points that are simulteniously rectangular vs central coordinates 
const LinearGraph = function ({ WIDTH, HEIGHT, slopeRange, translationRange, canvas}) {
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  const ctx = canvas.getContext('2d');
  const diagonalLength = Math.SQRT2 * Math.max(WIDTH, HEIGHT);
  const unitLen = 50; // 1 unit = 50 px // TODO: maybe make this depend on WIDTH/HEIGHT?

  // COORDINATES
  const COORD_SCALE = 50; // 1 unit of central coords is 50 px in rectangular coords

  function rect2center([x, y]) {
    return [(x - WIDTH/2)/unitLen, (HEIGHT/2 - y)/unitLen];
  }

  function center2rect([X, Y]) {
    return [X*unitLen + WIDTH/2, -Y*unitLen + HEIGHT/2];
  }

  // POINT/VECTOR ARITHMETIC
  // I don't want to deal with coordinate changes all the time
  const Point = {
    // there is no difference between make & rect
    // use Point.make to define arithmetic (it's irrelevant that undearneath the coordinates are the rectangular coordinates)
    // but when you are rendering, use Point.rect
    make(x, y) {
      return { type: 'point', x, y };
    },
    rect(x, y) {
      return { type: 'point', x, y };
    },
    central(X, Y) {
      const [x, y] = center2rect([X, Y]);
      return Point.rect(x, y);
    },
    // Point, Vector -> Point
    add(P, v) {
      return Point.make(P.x + v.x, P.y + v.y);
    },
    // Point, Point -> Vector
    sub(P, Q) {
      return Point.make(P.x - Q.x, P.y - Q.y);
    },
  };

  const Vector = {
    // there is no difference between make & rect
    make(x, y) {
      return { type: 'vector', x, y };
    },
    rect(x, y) {
      return { type: 'vector', x, y };
    },
    central(X, Y) {
      const [x, y] = center2rect([X, Y]);
      return Vector.rect(x, y);
    },
    // Vector, scalingFactor: Number -> Vector
    normalize(v, h=1) {
      const imag = h * 1/Math.sqrt(v.x**2 + v.y**2); // inverse of magnitude (not imaginary)
      return Vector.make(imag * v.x, imag * v.y);
    },
    // Vector, Vector -> Vector
    add(v, w) {
      return Vector.make(v.x + w.x, v.y + w.y);
    },
    // Vector, Vector -> Vector
    sub(v, w) {
      return Vector.make(v.x - w.x, v.y - w.y);
    },
    // Vector -> Vector
    neg(v) {
      return Vector.make(-v.x, -v.y);
    },
  };


  // RENDERING
  // This assumes rectangular coordinates
  function drawSegment(A, B) {
    ctx.beginPath();
    ctx.moveTo(A.x, A.y);
    ctx.lineTo(B.x, B.y);
    ctx.stroke();
  }

  // Point, Vector -> Effect(Draw)
  function drawRay(P, v) {
    const scaleFactor = Math.SQRT2 * diagonalLength; // TODO magic constant, change this to account for widht/height
    const nv = Vector.normalize(v, scaleFactor);
    drawSegment(P, Point.add(P, nv));
  }

  function drawLine(P, Q) {
    const v = Vector.sub(Q, P);
    drawRay(P, v);
    drawRay(P, Vector.neg(v));
  }

  function drawXAxis() {
    drawLine(Point.central(0, 0), Point.central(1, 0));
  }

  function drawYAxis() {
    drawLine(Point.central(0, 0), Point.central(0, 1));
  }

  function drawGridLines() {
    // TODO  this calculation is coordinate dependent
    const xMax = (WIDTH/2 / unitLen) + 1;
    const yMax = (HEIGHT/2 / unitLen) + 1;

    let i = 0;
    while (i < xMax) {
      drawLine(Point.central(i,0), Point.central(i, 1))
      drawLine(Point.central(-i,0), Point.central(-i, 1))
      i += 1;
    }

    let j = 1;
    while (j < yMax) {
      drawLine(Point.central(0,j), Point.central(1, j))
      drawLine(Point.central(0,-j), Point.central(1, -j))
      j += 1;
    }
  }


  // TODO: this sucks... I don't want to think about in which basis b is given
  // assumes that b is in central coords
  function graphLinearMap(a, b) {
    const A = Point.central(0, b);
    const B = Point.central(1,a + b);
    drawLine(A, B);
  }

  function setBackground() {
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
  }

  const State = {
    a: 1,
    b: 0,
    slopeRange,
    translationRange,

    render() {
      ctx.lineWidth = 1;
      ctx.fillStyle = '#c9c9c9';
      ctx.fillStyle = '#d9d9d9';

      setBackground();

      // ctx.strokeStyle = '#a6a6a6';
      ctx.strokeStyle = '#c7c7c7';
      drawGridLines();

      ctx.strokeStyle = '#8f8f8f';
      drawXAxis();
      drawYAxis();

      ctx.strokeStyle = '#005078';
      ctx.lineWidth = 3;
      graphLinearMap(this.a, this.b);
    }
  };
  return State;
}


