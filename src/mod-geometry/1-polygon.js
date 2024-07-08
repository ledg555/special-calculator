class Polygon {
  constructor(n) {}
  l = 0;
  a = 0;
  P = 0;
  A = 0;

  getA() {
    this.A = n*this.l*this.a/2;
  }
  getP() {
    this.P = n*this.l;
  }

}