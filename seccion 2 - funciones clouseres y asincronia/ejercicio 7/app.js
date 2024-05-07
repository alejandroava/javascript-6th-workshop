const result = `
Inicio del script
Fin del script
Promesa resuelta
Primer setTimeout
Segundo setTimeout
\nExplicacion: Primero se imprimen los console.log que estan solos por que son legitimos de javascript, setTimeout y promise son funciones asincronas por lo que se ejecutan despues
el orden aqui esta en que promise es una micro tarea y setTimeout se considera una macro tarea, primero se ejecutan las micro tareas. `

inputUserOrder = prompt(`
console.log("Inicio del script"); ->1

setTimeout(() => {
  console.log("Primer setTimeout"); ->2
}, 0);

setTimeout(() => {
  console.log("Segundo setTimeout");->3
}, 0);

Promise.resolve("Promesa resuelta").then(console.log); ->4

console.log("Fin del script"); ->5

\nPregunta-> Predice el orden en que se mostraran los mensajes en consola.
1 -> 12354
2 -> 51423
3 -> 15423
4 -> 15432
5 -> 32451`)

//orden correcto es -> 15423

if (inputUserOrder != 3) {
    console.log(`Error, el orden en como se muestran es:
    ${result}`)
} else {
    console.log('Felicitaciones')
}