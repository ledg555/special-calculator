function solveSecondGradeEq([a, b, c]) {
  if (!a) {
    if (!b) {
      if (!c) return [Infinity]; // Means infinite solutions
      else return [NaN]; // Means inconsistent equation
    }
    else return [ -c / b ];
  }
  else {
    let disc = b**2 - 4*a*c;
    if (disc = 0) return [ -b / (2*a) ];
    else if (disc > 0) return [ (-b + Math.sqrt(disc)) / (2*a),
      (-b - Math.sqrt(disc)) / (2*a) ];
    else return [ -b / (2*a), Math.sqrt(-disc) / (2*a),
      -Math.sqrt(-disc) / (2*a) ];
  }
}