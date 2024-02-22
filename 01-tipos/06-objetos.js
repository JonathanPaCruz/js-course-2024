// personaje de tv
let name = "Jonathan";
let course = "Java";
let edad = 16;

// Se conoce como objeto literal
let personaje = {
  // llave - valor
  // Propiedad.
  name: "Jonathan",
  course: "Java",
  edad: 16,
};
console.log(personaje);
console.log(personaje.name);
console.log(personaje["course"]);

personaje.edad = 25;

personaje["edad"] = 25;

delete personaje.course;
console.log(personaje);
