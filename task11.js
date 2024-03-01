// fizzbuzz
const fizzbuzz = (n) => {
    for (let i = 1; i <= n; i++) {
        let x = i
        if (x % 15 == 0) {
            console.log('FizzBuzz')
            continue
        } else if (x % 5 === 0) {
            console.log('Buzz')
            continue
        } else if (x % 3 === 0) {
            console.log('Fizz')
            continue
        }
        console.log(x)
    }
}

fizzbuzz(18)