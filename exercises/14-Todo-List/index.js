// Your code here
let texto = document.querySelector("#addToDo");
texto.addEventListener("keypress", function(e) {
	//your code here
	var keycode = e.keyCode ? e.keyCode : e.which;
	if (keycode == 13) {
		//alert("cambio!!!!");

		var elemli = document.createElement("li");

		elemli.innerHTML = document.getElementById("addToDo").value;

		document.querySelector("ul").appendChild(elemli);

		//document.querySelector("ul").appendChild('<li><span><i class="fa fa-trash"></i></span> coco</li>');
	}
});
/*
var list = document.querySelector("ul");


list.addEventListener("click",function(){
	list.removeChild(list.childNodes[0]);
}
	//this.parentNode.removeChild(this);

*/
