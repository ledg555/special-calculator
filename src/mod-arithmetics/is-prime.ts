import {PRIMESMAP} from "./PRIMES.ts";

export function isPrime(n: number): boolean {
  return PRIMESMAP.has(n) ? true : false;
}