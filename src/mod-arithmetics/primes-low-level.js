import fs from "fs";

const primes = [];
for (let number = 2;; number++) {
    let prime = true;
    for (let divisor = 2; divisor <= Math.sqrt(number); divisor++) {
        if (number % divisor === 0) {
            prime = false;
            break;
        }
    }
    if (prime)
        primes.push(number);
    if (primes.length === 1000000)
        break;
}
fs.writeFile("PRIMES.js", `const PRIMES = [${JSON.stringify(primes)}]`, err => console.log(err));
