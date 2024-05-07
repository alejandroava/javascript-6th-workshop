// Global Scope
var globalVariable = "Soy una variable global.";

function testScope() {
    // Function Scope
    var functionVariable = "Soy una variable local.";

    if (true) {
        // Block Scope
        let blockVariable = "Soy una variable de bloque.";
        console.log("Dentro del bloque:", blockVariable);
    }

    console.log("Dentro de la función:", functionVariable);
}

console.log("Fuera de la función:", globalVariable);
testScope();

// pregunta 1

const inputAnswerUser = prompt(`Analiza el siguiente codigo e indica si es posible acceder a cada una de las variables\n

var globalVariable = "Soy una variable global.";

function testScope() {
  // Function Scope
  var functionVariable = "Soy una variable local.";

  if (true) {
    // Block Scope
    let blockVariable = "Soy una variable de bloque.";
    console.log("Dentro del bloque:", blockVariable);
  }

  console.log("Dentro de la función:", functionVariable);
}

console.log("Fuera de la función:", globalVariable);
testScope();\n

Pregunta 1 = ¿Es posible acceder a Let blockVariable desde funtion Scope. SI/NO?`) // No

const answerexplication = prompt(`por que ${inputAnswerUser}`)

// pregunta 2
const inputAnswer2User = prompt(`Analiza el siguiente codigo e indica si es posible acceder a cada una de las variables\n

var globalVariable = "Soy una variable global.";

function testScope() {
    // Function Scope
    var functionVariable = "Soy una variable local.";

    if (true) {
        // Block Scope
        let blockVariable = "Soy una variable de bloque.";
        console.log("Dentro del bloque:", blockVariable);
    }

    console.log("Dentro de la función:", functionVariable);
}

console.log("Fuera de la función:", globalVariable);
testScope(); \n

Pregunta 2 = ¿Es posible acceder Desde afuera de Funtion testScope a la variable funtionVariable. SI/NO?`) // No

const answer2explication = prompt(`por que ${inputAnswer2User}`)

// Pregunta 3

const inputAnswer3User = prompt(`Analiza el siguiente codigo e indica si es posible acceder a cada una de las variables\n

var globalVariable = "Soy una variable global.";

function testScope() {
    // Function Scope
    var functionVariable = "Soy una variable local.";

    if (true) {
        // Block Scope
        let blockVariable = "Soy una variable de bloque.";
        console.log("Dentro del bloque:", blockVariable);
    }

    console.log("Dentro de la función:", functionVariable);
}

console.log("Fuera de la función:", globalVariable);
testScope(); \n

Pregunta 3 = ¿Es posible acceder a funtionVariable desde el bloque if.SI/NO?`) //Si

const answer3explication = prompt(`por que ${inputAnswer3User}`)

alert('Evaluando respuestas...')

const answer1 = (`Respuesta 1 = ${inputAnswerUser}
Explicacion = ${answerexplication}`)

const answer2 = (`Respuesta 2 = ${inputAnswer2User}
Explicacion = ${answer2explication}`)

const answer3 = (`Respuesta 3 = ${inputAnswer3User}
Explicacion = ${answer3explication}`)

// Respuesta correcta pregunta 1
const validateAnswer1 = 'Respuesta : NO \nExplicacion:No es posible acceder a la variable Let variableBlock desde FunstionVariable por que esta dentro de un bloque, las variables declaradas con Let dentro de un bloque solo funcionaran dentro del bloque.'
//Respuesta correcta pregunta 2
const validateAnswer2 = 'Respuesta : NO\nExplicacion:No es posible acceder desde afuera por que las variables declaradas dentro de una funcion solo se pueden usar en ese bloque'
//Respuesta correcta pregunta 3
const validateAnswer3 = 'Respuesta : SI\nExplicacion:Si es posible acceder desde el if a la variable functionVariable por que la variable esta declarada con var lo que la hace accesible en cualquier parte del codigo dentro de la funcion.'

if (inputAnswerUser == 'si') {
    alert(`La respuesta es incorrecta
    \nRespuestas del usuario:\n${answer1}
    \nRespuesta validada${validateAnswer1}`)
}

if (inputAnswer2User == 'si') {
    alert(`La respuesta es incorrecta 
    \nRespuestas del usuario:\n${answer2}
    \nRespuesta validada${validateAnswer2}`)
}
if (inputAnswer3User == 'no') {
    alert(`La respuesta es incorrecta
    \nRespuestas del usuario:\n${answer3}
    \nRespuesta validada\n${validateAnswer3}`)
}



