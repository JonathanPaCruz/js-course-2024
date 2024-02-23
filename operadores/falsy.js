// Short-circuit

// *Falso
// A todos estos valores se le conocen como falsy
/* 
false
0
''
null
undefined
NaN
*/

let nombre = "Jonathan";
let username = nombre || anonymous;
console.log(nombre);

function fn1() {
  console.log("soy función 1");
  return true;
}
// fn1();
function fn2() {
  console.log("soy función 2");
  return true;
}
// fn2();
let x = fn1() && fn2();
