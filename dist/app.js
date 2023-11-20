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
var activitytimeinput = document.getElementById("activity-time");
var savebtn = (_a = document.querySelector("button")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", uptadejson);
function uptadejson() {
    var useractivityname = activityNameinput.value;
    var useractivityTime = activitytimeinput.value;
    var namejson = JSON.stringify(useractivityname);
    var timejson = JSON.stringify(useractivityTime);
    sessionStorage.setItem("activity name", namejson);
    sessionStorage.setItem("activity time", timejson);
    return;
}
uptadejson();
var ul = document.querySelector("ul");
var li = document.createElement("li");
ul.appendChild(li);
li.textContent = "activity name:";
//const myChart = new Chart("myChart", {
//  type: "bar",
// data: {},
// options: {}
// });
var xValues = ["play", "workout", "eat", "sleep", "coding"];
var yValues = [22, 38, 35, 45, 20];
var barColors = ["red", "green", "blue", "orange", "brown"];
new Chart("myChart", {
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
