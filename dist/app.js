var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;
var myForm = document.querySelector("form[activity-tracker]");
var activityNameinput = document.getElementById("activity-name");
//const activitytimeinput = document.getElementById("activity-time") as HTMLInputElement;
var activitystars = document.getElementById("datestarttime");
var activityend = document.getElementById("dateendtime");
var savebtn = (_a = document.querySelector("button")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", creatactivity);
var useractivityname = activityNameinput.value;
var useractivitystart = activitystars.value;
var useractivityend = activityend.value;
//const useractivityTime = activitytimeinput.value
function uptadejson() {
    var useractivityname = activityNameinput.value;
    //const useractivityTime = activitytimeinput.value
    var namejson = JSON.stringify(useractivityname);
    //const timejson = JSON.stringify(useractivityTime)
    sessionStorage.setItem("activity name", namejson);
    // sessionStorage.setItem("activity time", timejson)
    return;
}
function creatactivity() {
    var useractivityname = activityNameinput.value;
    var useractivitystart = activitystars.value;
    var useractivityend = activityend.value;
    var newDate = new Date();
    var today = new Date();
    //console.log(today.getMonth());
    //console.log(newDate.getMonth());
    //console.log(newDate.getTime())
    if (today.getTime() > newDate.getTime()) {
        console.log("past");
    }
    else {
        console.log("future");
    }
    ;
    if (!useractivityname || !useractivitystart || !useractivityend) {
        return;
    }
    var ul = document.querySelector("ul");
    var li = document.createElement("li");
    li.classList.add("me");
    ul.appendChild(li);
    li.innerText = "activity name: " + useractivityname + "\n  activity start: " + useractivitystart + "\n  activity end: " + useractivityend;
}
;
var currentDate = new Date().toDateString();
console.log(currentDate);
var xValues = ["play", "workout", "eat", "sleep", "coding"];
var yValues = [22, 38, 35, 45, 20];
var barColors = ["red", "green", "blue", "orange", "brown"];
var static = new Chart("myChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
    },
    options: __assign({}, )
});
