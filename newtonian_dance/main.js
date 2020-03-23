
// Vectors
function Vec(x, y) {
  return { type: 'vec', x, y };
}

Vec.add = function (v, w) {
  return Vec(v.x + w.x, v.y + w.y);
};

Vec.scale = function (v, k) {
  return Vec(v.x * k, v.y * k);
};

Vec.innerProduct = function (v, w) {
  return v.x * w.x + v.y * w.y;
};

Vec.neg = function (v) {
  return Vec(-v.x, -v.y);
};

Vec.mag = function (v) {
  return Math.sqrt(Vec.innerProduct(v, v));
};

Vec.rot = function (v) {
  return Vec(-v.y, v.x);
}

Vec.normalize = function (v) {
  return Vec.scale(v, Vec.mag(v));
};

// Points
function Point(x, y) {
  return { type: 'point', x, y };
}

Point.add = function (P, v) {
  return Point(P.x + v.x, P.y + v.y);
};

Point.sub = function (P, Q) {
  return Vec(P.x - Q.x, P.y - Q.y);
};

Point.distance = function (P, Q) {
  return Vec.mag(Point.sub(P, Q));
};



function add(A, B) {
  switch (A.type) {
    case 'vec':
      if (B.type == 'vec') {
        return Vec.add(A, B);
      } else {
        throw `Don't know how to add ${A} to ${B}`;
      }
    case 'point':
      if (B.type == 'vec') {
        return Point.add(A, B);
      } else {
        throw `Don't know how to add ${A} to ${B}`;
      }
    default:
      throw `Don't know how to add ${A} to ${B}`;
  }
}

function sumAll(As) {
  let Total = Vec(0, 0);
  for (let i = 0; i < As.length; i++) {
    add(Total, As[0]);
  }
  return Total;
}

function times(v, w) {
  switch (v.type) {
    case 'vec':
      if (w.type == 'vec') {
        return vec.innerProduct(v, w);
      } else {
        return Vec.scale(v, w);
      }
    default:
        throw `Don't know how to multiple ${v} with ${w}`;
  }
}

function neg(v) {
  return Vec.neg(v);
}



// Particles
function Particle(mass, pos, vel, color) {
  return { type: 'particle', mass, pos, vel, color };
}

function moveParticle(particle, h) {
  return Particle(particle.mass, add(particle.pos, times(particle.vel, h)), particle.vel, particle.color);
}

// ???
function forceParticle(particle, force) {
  // changes velocity
  // console.log(force);
  return Particle(
    particle.mass,
    particle.pos,
    add(particle.vel, times(force, 1/particle.mass)),
    particle.color
  );
}



function drawParticle(particle) {
  const k = 10; // scaling constant
  const r = k*Math.sqrt(Math.abs(particle.mass)); // Radius is proportional to the mass by the scaling constant
  fill(particle.color);
  ellipse(particle.pos.x, particle.pos.y, r, r);
  // drawArrow(particle.pos, particle.vel, 0.02*k);
}

function drawArrow(P, v, width) {
  const height = 0.1 * width;

  const v1 = times(v, width);
  const rv1 = times(Vec.rot(v), height);
  
  const A = add(P, add(neg(v1), neg(rv1)));
  const B = add(P, add(v1, neg(rv1)));
  const C = add(P, add(v1, rv1));
  const D = add(P, add(neg(v1), rv1));
  quad(A.x, A.y, B.x, B.y, C.x, C.y, D.x, D.y);
  // var r = 5;
  // fill(255, 0, 0);
  // ellipse(A.x, A.y, r, r);
  // fill(0, 255, 0);
  // ellipse(B.x, B.y, r, r);
  // fill(0, 0, 255);
  // ellipse(C.x, C.y, r, r);

}


function setup() {
  const canvas = createCanvas(1000, 800);
  canvas.parent('myContainer');
  
  background(201, 201, 201); // grey
}

// calculate the force of p1 on p2
function ForceBy(p1, p2) {
  const G = 0.01;
  const diff = Point.sub(p1.pos, p2.pos)
  const F1 = G*p1.mass * p2.mass / Vec.mag(diff)**2;
  // console.log(F1);

  // let Force1 = Vec(0.02, 0.02);
  // let Force1 = Vec(0, 0);
  const Force1 = times(Vec.normalize(diff), F1);
  return Force1;
}

function updateSystem(particles, speed) {
  const Forces = [];
  for (let i = 0; i < particles.length; i++) {
    let Force = Vec(0, 0);
    for (let j = 0; j < particles.length; j++) {
      if (i != j) {
        Force = add(Force, ForceBy(particles[j], particles[i]));
      }
    }
    Forces.push(Force);
  }

  const totalForce = sumAll(Forces);
  document.getElementById("forceX").value = totalForce.x;
  document.getElementById("forceY").value = totalForce.y;

  const movedParticles = [];
  for (let i = 0; i < particles.length; i++) {
    movedParticles.push(forceParticle(moveParticle(particles[i], speed), Forces[i]));
  }
  return movedParticles;
}



function drawParticles(particles) {
  for (let i = 0; i < particles.length; i++) {
    drawParticle(particles[i]);
  }
}

// speed 2 pixels per second
let particles = [
  Particle(5, Point(500, 600), Vec(5, 0), [0, 255, 0]),
  Particle(5, Point(550, 400), Vec(-5, 0), [255, 0, 0]),
  Particle(0.5, Point(200, 200), Vec(1, 0), [255, 0, 0]),
  Particle(1, Point(600, 200), Vec(0, 5), [0, 0, 150]),
  // Particle(0.5, Point(800, 200), Vec(0, 0), [255, 0, 0]),
  // Particle(0.5, Point(600, 500), Vec(0, 0), [255, 0, 0]),
  // Particle(1, Point(350, 500), Vec(0, 0), [0, 0, 255])
];


const speed = 0.1;

function draw() {
  background([201, 201, 201]); // grey

  const mom = totalMomentum(particles);
  document.getElementById("momentumX").value = mom.x;
  document.getElementById("momentumY").value = mom.y;

  const vel = totalVelocity(particles);
  document.getElementById("velX").value = vel.x;
  document.getElementById("velY").value = vel.y;

  if (mouseIsPressed) {
    particles.push(Particle(0.2, Point(mouseX, mouseY), Vec(1, 0), [100, 100, 100]));
  }

  document.getElementById('numparticles').value = particles.length;

  // if (mouseIsPressed) {
  //   fill(0);
  // } else {
  //   fill(255, 0, 0);
  // }
  // drawParticle(Particle(1, mouseX, mouseY));

  drawParticles(particles);
  particles = updateSystem(particles, speed);

}

function totalMomentum(particles) {
  let momentum = Vec(0, 0);
  for (let i = 0; i < particles.length; i++) {
    const particle = particles[i];
    momentum = add(momentum, times(particle.vel, particle.mass));
  }
  return momentum;
}

function totalVelocity(particles) {
  let vel = Vec(0, 0);
  for (let i = 0; i < particles.length; i++) {
    const particle = particles[i];
    vel = add(vel, particle.vel);
  }
  return vel;
}

