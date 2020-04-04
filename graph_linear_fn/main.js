

function renderEqGeneral(dom) {
  katex.render(`y = a x + b`, dom, {
    throwOnError: false
  });
}

function renderEqParticular(dom, State) {
  katex.render(`y = ${State.a} x + ${State.b}`, dom, {
    throwOnError: false,
  });
}

window.addEventListener('DOMContentLoaded', function () {
  // TODO: when you set WIDTH/HEIGHT to 900, weird stuff is happening on the diagonal
  const State = LinearGraph({
    WIDTH: 700,
    HEIGHT: 700,
    slopeRange: [-3, 3],
    translationRange: [-10, 10],
    canvas: document.querySelector('#graph'),
  });


  const sliderA = Slider({ selector: '#slider-a', range: State.slopeRange, inverseStepSize: 20, value: 1 }); // stepSize = 0.05 (i.e. 1/20)
  const sliderB = Slider({ selector: '#slider-b', range: State.translationRange, inverseStepSize: 2, value: 0 }); // stepSize = 0.5 (i.e. 1/2)

  const outputA = document.querySelector('#display-a');
  outputA.innerHTML = State.a;
  const outputB = document.querySelector('#display-b');
  outputB.innerHTML = State.b;

  const linearEqGeneralDOM = document.querySelector('#linear-eq-general');
  const linearEqParticularDOM = document.querySelector('#linear-eq-particular');

  renderEqGeneral(linearEqGeneralDOM);
  renderEqParticular(linearEqParticularDOM, State);

  sliderA.attachEvent(function (a) {
    State.a = a;
    State.render();
    outputA.innerHTML = String(a);
    renderEqParticular(linearEqParticularDOM, State);
  });
  sliderB.attachEvent(function (b) {
    State.b = b;
    State.render();
    outputB.innerHTML = String(b);
    renderEqParticular(linearEqParticularDOM, State);
  });
  State.render()

});

