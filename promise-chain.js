var p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});
var p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 200, 'bar');
});

p1.then(someString => p2)
    .then(anotherString => console.log(someString));