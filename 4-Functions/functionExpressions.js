var sayHello = function(){
    console.log("Hello");
};

var sayHowdy = function howdy(){
    console.log("Howdy");
};

//iife, Immediately invoked function expression
(function(){
    console.log('The first IIFE');
})();
//You can also assign the product of the IIFE to a variable
var newIIFE = (function(){
    return 'This is the newIIFE'
})();
//But the returned value of the function is captured in the variable, not the function itself.
console.log(newIIFE);
//You can also use an Arrow function to execute an IIFE
(()=>{
console.log('Arrow IIFE')
})()

sayHello();
sayHowdy();

var foo = function fooFunction() {
    console.log('foo');
}
foo()