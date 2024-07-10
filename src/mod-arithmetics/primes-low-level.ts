let primes: number[] = [];

for (let number = 2; ; number++) {
    let prime: boolean = true;
    for (let divisor = 2; divisor <= Math.sqrt(number); divisor++) {
        if (number % divisor === 0) {
            prime = false;
            break;
        }
    }
    if (prime) primes.push(number);
    if (primes.length === 1000000) break;
}

console.log(`${primes}`);