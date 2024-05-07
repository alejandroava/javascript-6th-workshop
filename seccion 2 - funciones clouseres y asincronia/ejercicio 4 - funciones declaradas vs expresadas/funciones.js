// console.log(
//     "Intentando llamar a 'funcionDeclarada' antes de su declaración:"
//   );
//   try {
//     console.log(funcionDeclarada());
//   } catch (error) {
//     console.log("Error:", error.message);
//   }
  
//   console.log(
//     "Intentando llamar a 'funcionExpresada' antes de su declaración:"
//   );
//   try {
//     console.log(funcionExpresada());
//   } catch (error) {
//     console.log("Error:", error.message);
//   }
  
  // Declaración de una función declarada
  function funcionDeclarada() {
    return "Función declarada ha sido llamada.";
  }
  
  // Declaración de una función expresada
  const funcionExpresada = function () {
    return "Función expresada ha sido llamada.";
  };
  
  console.log("Llamando a 'funcionDeclarada' después de su declaración:");
  console.log(funcionDeclarada());
  
  console.log("Llamando a 'funcionExpresada' después de su declaración:");
  console.log(funcionExpresada());

  /* Respuestas
  Pregunta 1

  ¿Qué sucedió cuando intentaste llamar a las funciones antes de su declaración?
  R-> la funcion declarada cuando es llamada se ejecuta con normalidad
  La funcion expresada cuando es llamada no se ejecuta y dice que debe inicializarse antes.
  
  Pregunta 2
  ¿Cómo difieren los resultados entre la función declarada y la función expresada?
  R-> Los resultados en las funcion declarada se ejecutan con normalidad indiferentemente donde se declare
  Los resultados con la funcion expresada para ejecutarsen debe declararse antes de ser llamada.
  
  Pregunta 3
  ¿Qué indica esto sobre cómo el JavaScript maneja estas dos diferentes declaraciones de funciones?
  R-> Javascript eleva las variavles y funciones al scope mas cercano pero con las funciones expresadas no las ejecuta hasta que no sean iniciadas
  mientras que las declaradas si. */