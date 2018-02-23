let str = ["4h 17m", "5m", "36s", "", 2];

let minutes;
for (let x = 0; x < str.length; x++) {
    try {
        minutes = parseTimeText(str[x]);
        console.log(str[x] + " : " + minutes);
    } catch (e) {
        console.log("Error found: " + e);
    }
}

function parseTimeText(text) {
    if (typeof text !== "string" || text === "") {
        throw "No time defined";
    }

    const reg = /(\d+)(h|m|s)/g;
    let matches;
    let result = 0;
    while ((matches = reg.exec(text))) {
        if (matches[2] === "h") {
            result += parseInt(matches[1], 10) * 60;
        } else if (matches[2] === "m") {
            result += parseInt(matches[1], 10);
        }
    }
    return result;
}
