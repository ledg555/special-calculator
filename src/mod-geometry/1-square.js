class Square {
  a = 0;
  d = 0;
  P = 0;
  A = 0;

  getA() {
    this.A = a**2;
  }
  getP() {
    this.P = 4*a;
  }
  getd() {
    this.d = Math.sqrt(2)*this.a;
  }
  getaIfd() {
    this.a = this.d/Math.sqrt(2);
  }
  getaIfP() {
    this.a = this.P/4;
  }
  getaIfA() {
    this.a = Math.sqrt(A);
  }
}