function demoFunction(x, y) {
    console.log(arguments);
    console.log(typeof arguments[0]);
    console.log(arguments[1]);
}

demoFunction('word', 42);