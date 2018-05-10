function addNumbers(a, b) {
    if (isNaN(a) || isNaN(b)) {
      throw "One of the parameters is not a number";
    } else {
        return a + b;
    }
}

addNumbers(1, 2)
// addNumbers(1, 'word')
console.log(addNumbers(1, ''))


try {
addNumbers(1, 'word')
} catch (error) {
    console.log('Inside the catch', error)
}