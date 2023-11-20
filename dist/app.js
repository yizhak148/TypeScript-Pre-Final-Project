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
var myChart = new Chart("myChart", {
    type: "bar",
    data: {},
    options: {}
});
