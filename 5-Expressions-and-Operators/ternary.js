//Ternary FizzBuzz
for (let i = 0; i < 100; i++) {
    (i % 15 == 0)
        ? console.log('FizzBuzz')
        : (i % 5 == 0)
            ? console.log('Fizz')
            : (i % 3 == 0)
                ? console.log('Buzz')
                : console.log(i)
}