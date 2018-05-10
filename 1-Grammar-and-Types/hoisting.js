// console.log(x);
// var x = 7;
var x = 15;
console.log(x); //15
console.log(y); //undefined
{
    var y = 12; //using the var keyword allows the declaration to be hoisted
    console.log(y); //12
}
console.log(y); //12

function hoist(){
    var message = "Hoisting is all the rage!"
    return "Hoisting is pretty sweet";
}
hoist()
console.log(hoist())
var myHoist = hoist() + hoist();
console.log(myHoist)

function logSomething(x){
    console.log('logSomething: ', x())
}
logSomething(hoist)
console.log(typeof hoist())