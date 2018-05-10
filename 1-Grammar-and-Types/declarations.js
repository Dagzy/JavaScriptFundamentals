var foo = 'A variable declaration that has been initialized';
bar = 'Another way to initialize a variable';
var fooBar; //A variable declaration that has not been initialized
fooBar = 'Initialization of the fooBar variable';
const immutable = 'Use the const keyword to create immutable variable';
let mutable = 'The let keyword creates a variable that does not transcend scope';

console.log(foo);
foo = 'You can reassign the value of a variable, even to a different data type!'
console.log(foo);
foo = 0;
console.log('Like this!', foo);
foo = false;
console.log(foo);
