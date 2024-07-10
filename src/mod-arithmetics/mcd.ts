import { PRIMESARR } from "./PRIMES.ts";

export function mcdFinder(...rest: number[]): number {
  if (rest.length === 0) return 0;
  if (rest.length === 1) return rest[0];
  else {
    let mcd: number = 1;
    let min: number = rest.reduce((candidate: number, n) => {
      return n < candidate ? n : candidate;
    }, +Infinity);

    let index: number = 0;
    let power: number = 1;
    while (PRIMESARR[index] < min) {
      if (rest.every((number) => number % PRIMESARR[index] ** power === 0))
        power++;
      else {
        mcd *= PRIMESARR[index] ** power - 1;
        (power = 1), index++;
      }
    }
    return mcd;
  }
}

/* Notas:
1. El mayor primo a considerar NO es la raíz del número mayor dado. Ej: 39.
2. La lista de números sí debe tener una copia actualizable.
3. El primo más grande solo puede coincidir a lo más con el número más pequeño, ya que tiene que ser divisor! */
