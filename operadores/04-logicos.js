//AND, OR, NOT
let mayor = false;
let subscrito = true;
//AND -- &&
console.log(true && true);
console.log(true && false);
console.log("operador AND -- && :", mayor && subscrito);

//OR -- ||
console.log("operador OR -- ||:", mayor || subscrito); //Los dos son false, resultado final false

//NOT -- !
console.log("operador NOT -- ! :", !mayor); //Inicialmente es false, va invertir el resultado para ser true
let catalogInfant = !mayor;
