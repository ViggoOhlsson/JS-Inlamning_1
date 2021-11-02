class Task {
    constructor (desc, priority) {
        this.desc = desc;
        this.priority = priority;
        this.startedAt;
        this.finishBy;
        this.finished = false;
    }
}
let tasks = JSON.parse(localStorage.getItem("tasks"));
let task1 = new Task("Make The Bed", 1);
tasks = [task1];


window.onload = function () {
    Main();
}

function Main() {
    console.log(tasks);
    refreshTasks();


    let d = new Date();
    let t = d.toLocaleTimeString();
    document.getElementById("watch").innerHTML = t;
    setInterval(watchFunction, 1000);
    
}

function watchFunction() {
    let watch = document.getElementById("watch");
    let d = new Date();
    let t = d.toLocaleTimeString();
    watch.innerHTML = t;
}

function refreshTasks() {
    let activeTaskList = document.getElementById("active-list");
    let finishedTaskList = document.getElementById("finished-list");
    for (i = 0; i > tasks.length; i++) {
        let listRow = document.createElement("li");
        listRow.id = "task" + i;
        let todoButton = documnet.createElement("button");
        todoButton.className = "todo-button";
        todoButton.innerHTML = "<i class='fa fa-check'></i>";
        listRow.appendChild(todoButton);
        let todoTitle = document.createElement("span");
        todoTitle.className = "todo-title";
        todoTitle.className = tasks[i].desc;
        listRow.appendChild(todoTitle);
        let todoStarted = document.createElement("span");
        todoStarted.className = "todo-started";
        todoStarted.innerHTML = "Started At <span>" + 123 + "</span>";
        listRow.appendChild(todoStarted);
        let todoFinishBy = document.createElement("span");
        todoFinishBy.className = "todo-finishby";
        todoFinishBy.innerHTML = "Finish By <span>" + 123 + "</span>";
        listRow.appendChild(todoFinishBy);
        let priority;
        switch (tasks[i].priority) {
            case 1: {
                priority = "Priority <span class='prio-1'>Top</span>";
                break;
            }
            case 2: {
                priority = "Priority <span class='prio-2'>Mid</span>";
                break;
            }
            case 3: {
                priority = "Priority <span class='prio-3'>Low</span>";
                break;
            }
            default:
                priority = "Priority <span class='prio-3'>Low</span>";
                break;
        }

        let todoPrio = document.createElement("span");
        todoPrio.className = "todo-prio"
        todoPrio.innerHTML = priority;
        listRow.appendChild(todoPrio);
    }
    

    
}