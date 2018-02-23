var test = createFunction;

function createFunction(first, second) {
    first.name = "Cal";
    second.name = "Sosta";

    return (function(first, second) {
        console.log(first);
        console.log(second);
    })(first, second);
}

console.log(test);
test({}, {});
