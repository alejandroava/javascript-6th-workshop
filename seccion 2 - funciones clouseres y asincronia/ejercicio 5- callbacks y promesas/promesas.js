let promesa;

const message = () => {
   console.log('Promesa cumplida y callback ejecutado')
}



function manejarAsincronia(callback,promesa) {
     promesa = new Promise((resolve, reject) => {
         setTimeout(() => {
             let sum = 5 + 5
             if(sum == 11){
                 resolve(callback)
             } else {
                 reject('La suma no es 11')
             }
        },2000)
     })
        .then(resultado => {
             resultado() 
        })
         .catch(error => {
             console.log(error)
    })
}


manejarAsincronia(message,promesa)


/* ¿Qué sucede si cambias el tiempo de resolución de la promesa a 5 segundos o a 1 segundo?
R/ La duracion influye el tiempo en que se ejecuta el callback una vez la promesa es resuelta.

¿Cómo se comporta la función si la promesa es rechazada en lugar de resuelta?
R/ La funcion se ejecuta de la misma manera, respetando el tiempo de ejecucion del resultado de la promesa

Puedes modificar la función para que el callback maneje diferentes tipos de información dependiendo del resultado de la promesa?
R/ */