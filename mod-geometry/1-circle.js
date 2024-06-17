class Circle {
  constructor() {}

  this.r = 0;
  this.P = 0;
  this.A = 0;
  
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