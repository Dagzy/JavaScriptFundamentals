//Primitive data types
var myString = '';
var myNum = 13;
var myBool = Boolean();
var myObject = {};
var myNull = null;
var mySymbol = Symbol();
var myUndefined = undefined;
console.log(myString, myNum, myBool, myObject, myNull, mySymbol, myUndefined);

var newVar = 7;
console.log(typeof newVar);
newVar = {name: 'Rufus'};
console.log(typeof newVar);
console.log(`newVar's name is: ${newVar.name}`);