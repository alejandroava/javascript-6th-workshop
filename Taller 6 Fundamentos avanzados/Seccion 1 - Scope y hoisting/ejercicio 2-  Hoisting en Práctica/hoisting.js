//vars call
// console.log("aqui van las llamadas de las variables");
// console.log("Valor de a:", a);
// console.log("Valor de b:", b);
// console.log("Valor de c:", c);

//functions call
// console.log("aqui van las llamadas de las funciones");
// console.log("Resultado de funcionDeclarada:", funcionDeclarada());
// console.log("Resultado de funcionExpresada:", funcionExpresada());

// vars declaration
// var a = 1;
// let b = 2;
// const c = 3;

// functions declarations
// function funcionDeclarada() {
//   return "Función declarada ha sido llamada.";
// }

// const funcionExpresada = function () {
//   return "Función expresada ha sido llamada.";
// };

const inputUser = prompt(`Analiza el siguiente codigo y predice que va pasar:
\nconsole.log('aqui van las llamadas de las variables')
console.log("Valor de a:", a);
console.log("Valor de b:", b);
console.log("Valor de c:", c);
// functions call
console.log('aqui van las llamadas de las funciones')
console.log("Resultado de funcionDeclarada:", funcionDeclarada());
console.log("Resultado de funcionExpresada:", funcionExpresada());
// vars declaration
var a = 1;
let b = 2;
const c = 3;

// functions declarations
function funcionDeclarada() {
  return "Función declarada ha sido llamada.";
}
const funcionExpresada = function () {
  return "Función expresada ha sido llamada.";
};
\nPregunta 1 -> ¿Que resultado va arrojar los console de las variables a,b,c?`);

//Pregunta 2

const inputUserAnswer2 =
  prompt(`Analiza el siguiente codigo y analiza que va pasar:
\nconsole.log('aqui van las llamadas de las variables')
console.log("Valor de a:", a);
console.log("Valor de b:", b);
console.log("Valor de c:", c);
// functions call
console.log('aqui van las llamadas de las funciones')
console.log("Resultado de funcionDeclarada:", funcionDeclarada());
console.log("Resultado de funcionExpresada:", funcionExpresada());
// vars declaration
var a = 1;
let b = 2;
const c = 3;
// functions declarations
function funcionDeclarada() {
  return "Función declarada ha sido llamada.";
}
const funcionExpresada = function () {
  return "Función expresada ha sido llamada.";
};
\nPregunta 2 -> ¿Que resultado va arrojar los console.log de las funciones?`);

const validateanswer1 =
  "El hoisting va elevar al scope mas cercano las variables en este caso al scope Global y quedarian por encima de los console pero Javascript cambia sus valores.\nLa variable var a = 1: imprime undefined, Javascript le asigna este valor\nLa variable let b = 2 : Imprime variable no declarada por que las let siempre deben ser declradas antes de usarlas\nLa variable const c = 3 : Imprime variable no declarada por que siempre debe declararse antes de llamarla.";

const validateAnswer2 =
  'Function declarada va retornar "la funcion declarada ha sido llamada"\nLa function expresada va a devolver:"No se puede acceder antes de inicializarse';

console.log(`Pregunta 1\n
Respuesta usuario: ${inputUser}\n
Resultado: ${validateanswer1}`);

console.log(`Pregunta 2\n
Respuesta usuario: ${inputUserAnswer2}\n
Resultado: ${validateAnswer2}`);
