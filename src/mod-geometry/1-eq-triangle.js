class Triangle {
  b = 0;
  a = 0;
  P = 0;
  A = 0;

  getA() {
    this.A = b*a/2;
  }
  getP() {
    this.P = 3*this.b;
  }
  geta() {
    this.a = this.b*Math.sqrt(3)/2;
  }
  getbIfa() {
    this.b = 2*this.a/Math.sqrt(3);
  }
  getbIfP() {
    this.b = this.P/3;
  }
  getbIfA() {
    this.b = 2*Math.sqrt(this.A/Math.sqrt(3));
  }
}