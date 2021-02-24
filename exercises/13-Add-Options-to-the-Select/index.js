window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here

	/*
<   option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
*/
	for (let i = 0; i < countries.length; i++) {
		var elem = document.createElement("option");
		elem.innerHTML = countries[i];
		document.querySelector("#mySelect").appendChild(elem);
	}
};

document.getElementById("mySelect").addEventListener("change", function() {
	let aux = document.querySelector("#mySelect");
	let indice = aux.selectedIndex;
	let valor = aux.options[indice].value;
	//alert("cambio!!!!");
	alert(valor);
});

/*
<select name="miSelect"> 
<option value="10">Muy bien 
<option value="5" selected>Regular 
<option value="0">Muy mal 
</select> 

function dimePropiedades(){ 
   	var texto 
   	texto = "El numero de opciones del select: " + document.formul.miSelect.length 
   	var indice = document.formul.miSelect.selectedIndex 
   	texto += "nIndice de la opcion escogida: " + indice 
   	var valor = document.formul.miSelect.options[indice].value 
   	texto += "nValor de la opcion escogida: " + valor 
   	var textoEscogido = document.formul.miSelect.options[indice].text 
   	texto += "nTexto de la opcion escogida: " + textoEscogido 
       alert(texto) }
       */
