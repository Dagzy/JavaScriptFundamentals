//Functions can be called inside of themselves.
//Proper recursion
console.log(myNum2)

var timer = function(seconds){
    if (seconds > 0){
        console.log(seconds)
        return timer(seconds-1)
    }else{
        return seconds
    }
}

timer(10);


//This reflects callback concepts.
function recursive(a, b){
    c = a + b;
    return c
}
myNum = recursive(2, 5)

console.log(myNum)

myNum2 = recursive(37, recursive(2, 3))