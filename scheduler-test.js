const schedule = require("node-schedule");

let x = 0;
var scheduledJob = schedule.scheduleJob("5 * * * * *", () => {
    x++;
    let date = new Date();
    console.log(
        x + ") The time is: " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    );
});
