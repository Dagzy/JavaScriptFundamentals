function tryCatchDemo(a){
    try {
        var upperCaseWord = a.toUpperCase();
        console.log(upperCaseWord);
    }
    catch(err){
        console.log('This is the error: ', err);
    }
}
tryCatchDemo("Hello");
tryCatchDemo(7); //2nd call