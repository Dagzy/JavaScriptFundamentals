// Let's look ahead at how let deals with scope: 1. In 03-scope.js, create and
// assign values to two variables, one with the var keyword and one with the let
// keyword. 2. Print variables to the console. 3. Add a code block to your
// code. Inside the block create and assign a variable called "inside" with the
// let keyword, then print it to the console. 4. Outside of the block of code,
// print the "inside" variable to the console. What happens? The reasons for
// this will be covered more in-depth in the next module.

function add(){
    console.log("This works")
}
add();
var foo = 7;
console.log('The "inside" variable hoisted from inside the code block:', inside); //undefined, but memory reserved as a result of 'hoisting'
{ //Start code block, which will create a local scope
    console.log(foo) //7
    let bar = 13; //declaration and initialization of a locally scoped variable
    var inside = true; //This initializes the value.
} //End code block
console.log('The "inside" variable after the value has been initialized:', inside) //Value has been assigned
console.log(foo) //7
// console.log(bar)//ReferenceError: bar is not defined
var doo = 'a';
var foo = function() {
    var doo = "doo";
    console.log(doo)
}
foo();
console.log(doo)