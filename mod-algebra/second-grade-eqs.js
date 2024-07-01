function solveSecondGradeEq([a, b, c]) {
  if (a === 0) {
    if (b === 0) {
      if (c === 0) return [Infinity]; // Infty, infinite solutions
      else return [NaN]; // x !=== x, inconsistent equation
    }
    else return [-c / b]; // 1 element, 1 sol
  }
  else {
    let disc = b**2 - 4*a*c;
    if (disc === 0) return [-b / (2 * a), -b / (2 * a)]; // 1 sol
    else if (disc > 0) return [ (-b + Math.sqrt(disc)) / (2*a),
      (-b - Math.sqrt(disc)) / (2*a) ]; // 2 sol
    else return [ -b / (2*a), Math.sqrt(-disc) / (2*a),
      -Math.sqrt(-disc) / (2*a) ]; // 3 elem, complex sol
  }
}