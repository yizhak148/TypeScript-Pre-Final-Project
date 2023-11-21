const myForm = document.querySelector("form[activity-tracker]")

const activityNameinput = document.getElementById("activity-name") as HTMLInputElement;
//const activitytimeinput = document.getElementById("activity-time") as HTMLInputElement;
const activitystars = document.getElementById("datestarttime") as HTMLInputElement;
const activityend = document.getElementById("dateendtime") as HTMLInputElement;


const savebtn = document.querySelector("button")?.addEventListener("click", creatactivity)

let useractivityname = activityNameinput.value
let useractivitystart = activitystars.value
let useractivityend = activityend.value
//const useractivityTime = activitytimeinput.value


function uptadejson(){

    const useractivityname = activityNameinput.value
    //const useractivityTime = activitytimeinput.value
    
    const namejson = JSON.stringify(useractivityname)
    //const timejson = JSON.stringify(useractivityTime)
    sessionStorage.setItem("activity name", namejson)
   // sessionStorage.setItem("activity time", timejson)
    return
}

function creatactivity (){
  let useractivityname = activityNameinput.value
  let useractivitystart = activitystars.value
  let useractivityend = activityend.value
  if(!useractivityname){
    return
  }
  const ul = document.querySelector("ul") as HTMLUListElement;
  const li = document.createElement("li") as HTMLLIElement;
  li.classList.add("me")
  ul.appendChild(li)
  li.innerText = `activity name: ${useractivityname}
  activity start: ${useractivitystart}
  activity end: ${useractivityend}`
};






const currentDate = new Date().toDateString();
console.log(currentDate);

let xValues = ["play", "workout", "eat", "sleep", "coding"];
let yValues:number[] = [22, 38, 35, 45, 20];
let barColors = ["red", "green","blue","orange","brown"];
  
const static = new Chart("myChart", {
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

