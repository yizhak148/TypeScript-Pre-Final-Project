const myForm = document.querySelector("form[activity-tracker]")

const activityNameinput = document.getElementById("activity-name") as HTMLInputElement;
const activitytimeinput = document.getElementById("activity-time") as HTMLInputElement;

const savebtn = document.querySelector("button")?.addEventListener("click", uptadejson)

function uptadejson(){

    const useractivityname = activityNameinput.value
    const useractivityTime = activitytimeinput.value
    
    const namejson = JSON.stringify(useractivityname)
    const timejson = JSON.stringify(useractivityTime)
    sessionStorage.setItem("activity name", namejson)
    sessionStorage.setItem("activity time", timejson)
}

uptadejson()


