function suma () {
    let numUno = parseFloat(document.getElementById('numUno').value);
    let numDos = parseFloat(document.getElementById('numDos').value);
    console.log(numUno + numDos);
    document.getElementById('resultado').textContent = numUno + numDos;
}

function resta () {
    let numUno = parseFloat(document.getElementById('numUno').value);
    let numDos = parseFloat(document.getElementById('numDos').value);
    console.log(numUno - numDos);
    document.getElementById('resultado').textContent = numUno - numDos;
}

function multiplicacion () {
    let numUno = parseFloat(document.getElementById('numUno').value);
    let numDos = parseFloat(document.getElementById('numDos').value);
    console.log(numUno * numDos);
    document.getElementById('resultado').textContent = numUno * numDos;
}

function division () {
    let numUno = parseFloat(document.getElementById('numUno').value);
    let numDos = parseFloat(document.getElementById('numDos').value);
    console.log(numUno / numDos);
    document.getElementById('resultado').textContent = numUno / numDos;
}

function potencia () {
    let numUno = parseFloat(document.getElementById('numUno').value);
    let numDos = parseFloat(document.getElementById('numDos').value);
    console.log(Math.pow(numUno,numDos));
    document.getElementById('resultado').textContent = Math.pow(numUno,numDos);
}

function tipo(){
    stringVehiculo = document.getElementById('tipoVehiculo').value;
	switch (stringVehiculo){
		case 'car':
		case 'truck':
		case 'automovil':
		case 'camion':
			document.getElementById('resultadoUno').textContent = 'true';
			break;
		default:
			document.getElementById('resultadoUno').textContent = 'false';
			break;
	}
}

function mejorOpcion (){
    stringAut = [document.getElementById('vehiculoUno').value, document.getElementById('vehiculoDos').value];
	stringAut.sort()
    document.getElementById('resultadoDos').textContent = `${stringAut[0]} es claramnte la mejor opción`;
}

function precio(){
    let numAntiguedad = parseFloat(document.getElementById('antiguedad').value);
    let numPrecioOriginal = parseFloat(document.getElementById('precioOriginal').value);
    let numPrecioFinal;
	if (numAntiguedad < 3){
		numPrecioFinal = numPrecioOriginal * 0.80;
	} else if (numAntiguedad >= 3 && numAntiguedad <= 10){
		numPrecioFinal = numPrecioOriginal * 0.70;
	} else {
		numPrecioFinal = numPrecioOriginal * 0.50;
	}
    console.log(`El precio es de ${numPrecioFinal.toFixed(2)}`);
    document.getElementById('resultadoTres').textContent = `El precio es de ${numPrecioFinal.toFixed(2)}`;	
}