class Rectangle {
  constructor() {}

  get A() {
    return this.b*this.a;
  },
  get P() {
    return 2*this.b + 2*this.a;
  },
  get a() {
    return this.A/this.b;
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