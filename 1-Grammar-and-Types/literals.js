var arrayLiteral = ['foo', 3, false];
//print the second index of the array literal
console.log(arrayLiteral[1])

var objectLiteral = {
    firstAttribute: 1,
    secondAttribute: 'second',
    thirdAttribute:[7, 'thirteen']
};
//Print the keys of the key:value pairs present in an object
console.log(Object.keys(objectLiteral));
//Pring the value of the second index of an array attribute of an object
console.log(objectLiteral.thirdAttribute[1]);
//Convert the Hex number ee to decimal
console.log(parseInt('ee', 16))