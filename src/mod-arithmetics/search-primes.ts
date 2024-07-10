import {PRIMESARR} from "./PRIMES.js";

export function searchPrimes(n: number, firstN: boolean): number[] {
  let primes: number[] = firstN
    ? PRIMESARR.slice(0, n)
    : PRIMESARR.filter((prime: number) => prime <= n);
  return primes;
}