let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here

	var elem = document.createElement("li");
	elem.innerHTML = "Fourth element";
	document.querySelector("#myList").appendChild(elem);
});
