
// example
//   Surface.fromPoints(P, Q)
//   Surface.fromDimension(P, wh)
//
//   Surface.fromPoints(Point(100,100), Point(150, 150))
//   Surface.fromDimension(Point(100,100), Vector(50, 50))

// TODO: so far this is a simlification...

// TODO: this doesn't check if A <= B (i.e. if A contains B)

// wh stands for width,height
const Surface = {
  fromPoints(A, B) {
    return {
      type: "surface",
      A, B,
      wh: Point.sub(B, A)
    }
  },
  fromDimension(A, wh) {
    return {
      type: "surface",
      A,
      B: Point.add(A, wh),
      wh,
    };
  },
};


Surface.translate = (S, v) => Surface.fromDimension(Point.add(S.A, v), S.wh);
Surface.stretchTopLeft = (S, v) => Surface.fromPoints(Point.add(S.A, v), S.B);
Surface.stretchTopRight = (S, v) =>
  Surface.fromPoints(
    Point(S.A.x, S.A.y + v.y),
    Point(S.B.x + v.x, S.B.y)
  );
Surface.stretchBottomRight = (S, v) => Surface.fromPoints(S.A, Point.add(S.B, v));
Surface.stretchBottomLeft = (S, v) =>
  Surface.fromPoints(
    Point(S.A.x + v.x, S.A.y),
    Point(S.B.x, S.B.y + v.y)
  );
Surface.translate2origin = S => Surface.fromDimension(Point(0,0), S.wh);

// TODO: create diff between two surfaces for renderer

