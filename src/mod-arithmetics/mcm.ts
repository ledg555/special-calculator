import { PRIMESARR } from "./PRIMES.ts";

export function mcmFinder(...rest: number[]): number {
  if (rest.length === 0) return 0;
  if (rest.length === 1) return rest[0];
  else {
    let mcm: number = 1;
    let max: number = rest.reduce((candidate: number, n) => {
      return n > candidate ? n : candidate;
    }, -Infinity);

    let index: number = 0;
    let power: number = 1;
    while (PRIMESARR[index] < max) {
      if (rest.some((number) => number % PRIMESARR[index] ** power === 0))
        power++;
      else {
        mcm *= PRIMESARR[index] ** power - 1;
        (power = 1), index++;
      }
    }
    return mcm;
  }
}
