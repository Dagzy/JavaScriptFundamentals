//Do and Do While Loops
// var i;
// i = 0;
// do{
    // console.log(i)
    //i++//The incrementer will change behavior based on whether it comes before or after the console.log()
// }while (i<5)

//The Do guarantees that the effect will trigger

// while(i < 10){
//     i++
//     console.log(i)
// }

var cars = ['BMW', 'Volvo', 'Saab', 'Ford'];
var i = 0;
var text = '';

while (cars[i]) {
  text += cars[i] + ', ';
  i++;
  console.log(text)
}