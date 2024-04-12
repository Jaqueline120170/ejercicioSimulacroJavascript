function operando(value){
	document.getElementById('resultado').innerHTML += value;
}
function obtenerResultado() {
    return document.getElementById('resultado').innerHTML;
}
function calculo() {
    var resultado = eval(obtenerResultado()); 
    document.getElementById('resultado').innerHTML = resultado;
}
function nuevoCalculo() { 
    document.getElementById('resultado').innerHTML = '';
}