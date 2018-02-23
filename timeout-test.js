timeoutTest();

function timeoutTest() {
    let x = 0;
    x++;
    setTimeout(() => {
        console.log(x);
    }, 500);
    x++;
    x++;
}
