class Circle {
  r = 0;
  P = 0;
  A = 0;
  
  getA() {
    this.A = Math.PI*this.r**2;
  }
  getP() {
    this.P = 2*Math.PI*this.r;
  }
  getrIfP() {
    this.r = this.P/(2*Math.PI);
  }
  getrIfA() {
    this.r = Math.sqrt(this.A/Math.PI);
  }
}