var dptosLocs = {
	"Artigas":["Artigas","Bella Unión"],
	"Canelones":["Canelones","Santa Lucía"],
	"Montevideo":["Montevideo"],
	"Salto":["Salto","Daymán","Arapey"]
};

function cargarDepartamentos() {
var select = document.getElementById("departamento");
for(departamentos in dptosLocs) {
    select.options[select.options.length] = new Option(departamentos);
	}
};

function cargarLocalidad(value) {
	if(value.length==0) document.getElementById("localidad").innerHTML = "<option></option>";
else{
	var localidadOpciones = "";
	for (localidades in dptosLocs[value]) {
		localidadOpciones+="<option>"+dptosLocs[value][localidades]+"</option>";
	}
}
document.getElementById("localidad").innerHTML = localidadOpciones;
}
