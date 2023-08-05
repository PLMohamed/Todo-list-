//Loads Tasks
var ul = document.getElementById("TodoList")
window.onload = loadTasks()

function loadTasks(){
    // Get the tasks from localStorage and convert it to an array
    try {
        let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
        
        if(Array.from(JSON.parse(localStorage.getItem("tasks"))) == null)
            return;

        // Loop through the tasks and add them to the list
        tasks.forEach(task => {
            const li = document.createElement("li");
            li.innerHTML = task.task;
            li.classList.toggle("checked",task.completed)
            ul.insertBefore(li, ul.children[0]);
        });
    } catch (error) {
        
    }
    
}

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var closeList = document.querySelectorAll(".close");
for (i = 0; i < closeList.length; i++) {
    closeList[i].onclick = function (){
        let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
        tasks.forEach(task => {
            if (task.task == this.parentNode.textContent.slice(0,-1)) {
            tasks.splice(tasks.indexOf(task), 1);
          }
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));

        this.parentElement.remove();

    }
}

// Add a "checked" symbol when clicking on a list item
ul.addEventListener("click",function (e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
        tasks.forEach(task => {
          if (task.task == e.target.textContent.slice(0,-1)) {
            task.completed = !task.completed;
          }
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
})


// Create a new list item when clicking on the "Plus" Symbol
var input = document.getElementById("myInput");
var plusBtn = document.querySelector(".fa-plus");
plusBtn.onclick = function(){
    if (input.value != "") {
        var li = document.createElement("LI");
        var t = document.createTextNode(input.value);
        li.appendChild(t);
        ul.appendChild(li);
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);
        localStorage.setItem("tasks", JSON.stringify([...JSON.parse(localStorage.getItem("tasks") || "[]"), { task: input.value, completed: false }]));
        input.value ="";

    }

    var closeList = document.querySelectorAll(".close");
    for (i = 0; i < closeList.length; i++) {
        closeList[i].onclick = function() {
            this.parentElement.remove();
        }
    }

}
