

function Point(x, y) {
  return { type: "point", x, y };
}
Point.add = (P, v) => Point(P.x + v.x, P.y + v.y);
Point.sub = (P, Q) => Point(P.x - Q.x, P.y - Q.y);

function Vector(x, y) {
  return { type: "vector", x, y };
}
Vector.add = (v, w) => Vector(v.x + w.x, v.y + w.y);
Vector.scale = (v, k) => Vector(v.x * k, v.y * k);
Vector.neg = v => Vector(-v.x, -v.y);
Vector.sub = (v, w) => Vector(v.x - w.x, v.y - w.y);

// TODO: normalize, inner product, rot90, rot

