class Square {
  constructor() {}

  get A() {
    return this.a**2;
  },
  get P() {
    return 4*this.a;
  },
  get diagonal() {
    return Math.sqrt(2)*this.a;
  },
  get b() {
    return this.A/this.a;
  },

  set A(value) {
    return void;
  },
  set P(value) {
    return void;
  },
  set a(value) {
    return void;
  },
  set b(value) {
    return void;
  },
}