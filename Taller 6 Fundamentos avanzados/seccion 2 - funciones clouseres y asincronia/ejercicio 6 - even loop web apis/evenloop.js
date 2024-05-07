console.log('Mensaje 1: Inmediatamente')

setTimeout(() =>{
    console.log('Mensaje 2: Con timeout de 0 segundos')
},0)

setTimeout(() =>{
    console.log('Mensaje 3: con timeout de 1 segundo')
},1000)

//Reflexion y analisis.
/* Mensaje 2 con un retardo de 0 segundos no se muestra inmediamanete por que con solo tener la funcion setTimeout
hace que la ejecucion tenga un retardo minimo

¿Que nos dicen este comportamiento sobre el event loop, las macro y micro tareas, y la forma en que JavaScript maneja las operaciones asíncronas?
R/ Primero se van ejecutar las funciones legitimas de javascriot despues de ejecutar esto las operaciones asincronas javascript las guarda en una webapi y estas se dividen en micro y macro tareas , las micro tareas se van ejecutar primero que las macro.*/
