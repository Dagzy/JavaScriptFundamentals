//A ForOf loop will perform a statement based on the value of the index, rather than the index itself
var myObject = ['first', 'second', 'third']
for (const key of myObject) {
    if(key == 'first')
    console.log('This one')
    else{
        console.log('The other one')
    }
}