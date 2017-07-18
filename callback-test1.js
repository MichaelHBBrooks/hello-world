doSomething(foo);

function doSomething(cb) {
    cb('test');
}

function foo(message) {
    console.log('Callback Message: ' + message);
}