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
        this.parentElement.remove();
    }
}

// Add a "checked" symbol when clicking on a list item
var ul = document.getElementById("TodoList")
ul.addEventListener("click",function (e){
    if(e.target.tagName == "LI")
        e.target.classList.toggle("checked");
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
        input.value ="";
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);
    }

    var closeList = document.querySelectorAll(".close");
    for (i = 0; i < closeList.length; i++) {
        closeList[i].onclick = function() {
            this.parentElement.remove();
        }
    }

}
