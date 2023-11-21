const myForm = document.querySelector("form[activity-tracker]")

const activityNameinput = document.getElementById("activity-name") as HTMLInputElement;
const activitytimeinput = document.getElementById("activity-time") as HTMLInputElement;

const savebtn = document.querySelector("button")?.addEventListener("click", uptadejson)

const useractivityname = activityNameinput.value
const useractivityTime = activitytimeinput.value
const canvas = document.getElementById("myChart");
canvas?.style.height
type activity = {
  useractivityTime: number,
  yValues: number
  
}
function uptadejson(){

    const useractivityname = activityNameinput.value
    const useractivityTime = activitytimeinput.value
    
    const namejson = JSON.stringify(useractivityname)
    const timejson = JSON.stringify(useractivityTime)
    sessionStorage.setItem("activity name", namejson)
    sessionStorage.setItem("activity time", timejson)
    return
}

uptadejson()


const ul = document.querySelector("ul") as HTMLUListElement;
const li = document.createElement("li") as HTMLLIElement;



ul.appendChild(li)
li.textContent = "activity name:" 

const currentDate = new Date().toDateString();
console.log(currentDate);

let xValues = ["play", "workout", "eat", "sleep", "coding"];
let yValues:number[] = [22, 38, 35, 45, 20];
let barColors = ["red", "green","blue","orange","brown"];
  
new Chart("myChart", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {...}
});



yValues.push(useractivityTime.value)