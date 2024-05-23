// Fizz Buzz
/*Loop through all numbers from 1 to 100.
If a number is divisible by 3, log “Fizz.”
If a number is divisible by 5, log “Buzz.”
If a number is divisible by both 3 and 5, log “Fizz Buzz.”
If a number is not divisible by either 3 or 5, log the number.*/

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz Buzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i);
    }
}


// Prime Time

/* Declare an arbitrary number, n.
Create a loop that searches for the next prime number, starting at n and incrementing from there.
As soon as you find the prime number, log that number and exit the loop.*/

let n = 20
let num = n + 1

while (true) {
    let primeNum = true

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            primeNum = false;
            break
        }
    }

    if (primeNum) {
        console.log(num + " is a prime number")
        break
    }

    num++
}
