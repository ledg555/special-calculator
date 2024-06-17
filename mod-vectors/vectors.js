class Vector {
  constructor(x, y) {
    this.xCoord = x;
    this.yCoord = y;
  }

  get r() {
    return Math.hypot(this.x, this.y);
  }
  get theta() {
    if (this.x === 0) {
      if (this.y > 0) return Math.PI/2;
      else if (this.y < 0) return 3*Math.PI/2;
      else return 0;
    } else return this.x > 0 ? Math.atan(this.y/this.x): Math.atan(this.y/this.x) + Math.PI;
  }
  get x() {
    this.xCoord = r*Math.cos(theta);
    return r*Math.cos(theta);
  }
  get y() {
    this.yCoord = r*Math.sin(theta);
    return r*Math.sin(theta);
  }

  set r(value) {}
  set theta(value) {}
  set x(value) {
    this.xCoord = value;
  }
  set y(value) {
    this.yCoord = value;
  }
  
  inverse() {
    return new Vector(-this.x, -this.y);
  }

  static sum(a, ...rest) {
    let X = rest.reduce((v1, v2) => v1.x + v2.x, a.x);
    let Y = rest.reduce((v1, v2) => v1.y + v2.y, a.y);
    return new Vector(X, Y);
  }
  
  static dotProduct(a, b) {
    return new Vector(a.x * b.x + a.y * b.y)
  }
  
  static angDotProduct(a,b) {
    return Math.acos(dotProd/(a.r*b.r));
  }
  
  static crossProduct(a, b) {
    return a.x*b.y - b.x*a.y;
  }
}