
var button = document.getElementById("enter");
var input = document.getElementById('user-input');
var li1 = document.getElementById("li1");
var ul = document.querySelector("ul");
var  li = document.querySelector("li");
var liAll = document.querySelectorAll("li");
var h2test = document.getElementById("h2test");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	let span = document.createElement("span");
    li.appendChild(span);
    span.classList.add("off-set");
    let deleteButton = document.createElement("button");
    span.after(deleteButton);
    deleteButton.appendChild(document.createTextNode("Delete"));
    li.classList.add("completed");
    deleteButton.classList.add("delete-after");
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
		}
}
function addListAfterKeyPress(event) { 
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
		}
}

function lineThrough() {
	liAll.forEach(function(elem) {
		elem.addEventListener("click", elem.classList.toggle("done"))
	})
	
}

button.addEventListener("click", addListAfterClick);
	
input.addEventListener("keypress", addListAfterKeyPress);

document.addEventListener("click", function(event) {
	if (event.target.matches(".completed")) {
		event.target.classList.toggle("done");	}
	if(event.target.matches(".delete")) {
		event.target.parentElement.parentElement.remove();
	}
	if(event.target.matches(".delete-after")) {
		event.target.parentElement.remove();
	}
},false);
