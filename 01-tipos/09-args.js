//* Parametros en la funcion.
function suma(a, b) {
  console.log(arguments); // *Para pasarle todos los argumentos, no es lo mas recomendada.
  return a + b + 2;
}
//* Pasandole argumentos.
let result = suma(5, 5, 1, 2, 3);
console.log(result);

//* Imprimiento el tipo de la function.
console.log(typeof suma);
if (10 >= 10) {
  console.log("es 10");
} else console.log("no es 10");
