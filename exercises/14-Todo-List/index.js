// Your code here
let texto = document.querySelector("#addToDo");
texto.addEventListener("keypress", function(e) {
	//your code here
	var keycode = e.keyCode ? e.keyCode : e.which;
	if (keycode == 13) {
		//alert("cambio!!!!");
		let valor = document.getElementById("addToDo").value;
		let elemli = document.createElement("LI");
		//elemli.textContent =

		elemli.innerHTML = `<span><i class="fa fa-trash"> ${valor}`;
		document.querySelector("ul").appendChild(elemli);
	}
});
/*
let list = document.getElementsByName("UL");
var lista = document.getElementsByTagName("UL");

list.addEventListener("click", e => {
	list.removeChild(list.children[e]);
});

//this.parentNode.removeChild(this);
*/

const lis = document.querySelectorAll("li");

for (let li of lis) {
	li.addEventListener("click", function() {
		this.parentNode.removeChild(this);
		//console.log(this);
	});
}

/*
const ul = document.querySelector("ul");
ul.addEventListener("click", function(e) {
	this.removeChild(e.target);
});
*/
