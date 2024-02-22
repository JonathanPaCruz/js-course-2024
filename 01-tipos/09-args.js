//Parámetros en la función.
function suma(a, b) {esl
  console.log(arguments); //Para pasar todos los argumentos, no es lo mas recomendada.
  return a + b + 2;
}

//Pasándole argumentos.
let result = suma(5, 5, 1, 2, 3);
console.log(result);

//Imprimiendo el tipo de la function.
console.log(typeof suma);
if (10 >= 10) {
  console.log("es 10");
} else console.log("no es 10");