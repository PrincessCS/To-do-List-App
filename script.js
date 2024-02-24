

const textBox = document.getElementById("text-box");
const taskContainer = document.getElementById("task-container");

function displayDate() {

document.getElementById("date").innerHTML = Date();

}

displayDate();


function addTask( ){
    if ( textBox. value ===  ' ' ) {
        alert ("Add a Task!");
    }

    else {
        let li = document.createElement("li");
        li.innerHTML = textBox.value;
        taskContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }

    textBox.value = " ";
    storeTask();
}

taskContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        storeTask();
    }

    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        storeTask();
    }
}, false);

function storeTask(){
    localStorage.setItem("data", taskContainer.innerHTML);
}

function allTask(){
    taskContainer.innerHTML = localStorage.getItem("data");
}
allTask();