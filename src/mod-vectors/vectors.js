class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  gettheta() {
    if (this.x === 0 && this.y === 0) this.theta = 0;
    else if (x < 0) this.theta = Math.atan(this.y/this.x) + Math.PI;
    else if (this.x >= 0 && this.y < 0) this.theta = 2*Math.PI + Math.atan(this.y/this.x);
    else this.theta = Math.atan(this.y/this.x);
  }
  getr() {
    this.r = Math.hypot(this.x, this.y);
  }
  getyIfxtheta() {
    this.y = x*Math.tan(theta);
  }
  getxIfytheta() {
    this.x = y/Math.tan(theta);
  }
  getxIfrtheta() {
    this.x = this.r*Math.cos(this.theta);
  }
  getyIfrtheta() {
    this.y = this.r*Math.sin(this.theta);
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
    return Math.acos(Vector.dotProduct(a, b)/(a.r*b.r));
  }
  
  static crossProduct(a, b) {
    return a.x*b.y - b.x*a.y;
  }
}