// function makeAdder(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// const add5 = makeAdder(5);
// const add10 = makeAdder(10);

// console.log(add5(2)); // 7
// console.log(add10(2)); // 12

// let y = "hola";
// const saludar = "alejandro";
// const x = () => {
//   console.log(y, saludar);
// };
// x();

// let lastname = "velasquez";
// function x() {
//   const name = "david";
//   console.log(name, lastname);
// }
// x();

function crearSumador(x) {
  return function (y) {
    return x + y;
  };
}
const sumarCinco = crearSumador(5)
console.log(sumarCinco(10))
