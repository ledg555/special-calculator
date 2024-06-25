//TODO: import primesList into some variable

function searchPrimes(n, firstN) {
  let primes = firstN ?
    primesList.slice(0, n) :
    primesList.filter(prime => prime <= n);
  return primes;
}