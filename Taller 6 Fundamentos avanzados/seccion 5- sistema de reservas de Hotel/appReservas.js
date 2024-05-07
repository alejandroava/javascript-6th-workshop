//Donde se van a guardar todas las reservas
const bookings = []
flag = true
const url = 'data.json'

async function menu (){ 
  while(flag){
  const inputUserMenu = prompt(`--- Sistema de reversas---
  1. Reservar una habitacion
  2. Salir`)
  switch (inputUserMenu) {
    case '1':
      const booking = await loadShowData()
      const inputUserName = prompt(`Ingrese a nombre de quien es la reserva`)
      const inputUserDateStar = prompt(`Ingrese la fecha de entrada`)
      const inputUserDateEnd = prompt(`Ingrese la fecha de salida`)
      const inputUserQuantity = prompt(`Ingrese la cantidad de personas`)
      let { rooms, roomTypes } = booking
      crearReserva({rooms,roomTypes},inputUserName,inputUserDateEnd,inputUserQuantity)
      break;
      case '2':
        flag = false
        break
        default:
          break
      }
      
  }
}

 function generarGeneradorId() {
            let id = 0;
            function increase() {
              id++
              console.log(id)
            }
            return increase()
          }

  function crearReserva({rooms,roomTypes}, inputUserName, inputUserDateEnd, inputUserQuantity) {
        const roomsAvailables = availableRooms(inputUserQuantity, rooms, roomTypes)
        console.log('estas son mis habitaciones disponibles')
        roomsAvailables.forEach(room =>
          console.log(`habitacion: ${room.number}`)
        )
        const inputUserRoom = prompt('Ingrese el numero de la habitacion a reservar')
        selectedRoom = roomsAvailables.find(room => room.number === inputUserRoom)
            
      }
// funcion para mostrar y cargar el contenido
function loadShowData() {
  return new Promise((resolve, reject) => { // retorna una promesa para resolver despues del setTimeout
    setTimeout(() => {
      fetch(url) //realizar peticion con fetch , fetch devuelve una promesa
        .then((response) => { // then resuelve la promesa del fetch
          if (!response.ok) { // response es la respuesta de la promesa , la negamos para que entre por error si es falsa
          throw new Error ('Error al cargar los datos')
          }
          return response.json() // si no entra por el error , retorna la respuesta en un archivo json
        })
        .then((data) => { // response.json devuelve una promesa y la resuelvo con el proximo then
          console.log("Habitaciones: ", data.rooms) // imprimo las rooms de la data, que es objetos de arrays
          console.log("Tipo de habitacioes: ", data.roomTypes) // muestro en pantalla las roomTypes de la data que es un objeto de arrays
          resolve(data)
          // resuelve la promesa con os datos cargados
        })
        .catch((error) => {
          console.error(error)
          reject(error) // rechaza la promesa si hay errro
      })
    }, 0);
  })
}

// funcion para ver disponibilidad de habitaciones
function availableRooms(inputUser, rooms, roomTypes) {
   return rooms.filter(room => room.availability === true && roomTypes.find(type => type.id === room.roomTypeId).capacity <= inputUser)
 }
    
 // reserva la habiatcion
function bookingRoom() {
  loadShowData()  // Muestra la data para trabajar con ella
    .then(({ rooms, roomTypes }) => {   //cuando se resuelve la promesa , trae un objeto y se desestructura asi: 
      const inputUserName = prompt(`A nombre de quien se hace la reservacion`)
      const inputUserDateStar = prompt(`Ingrese la fecha de inicio`)
      const inputUserDateEnd = prompt(`Ingrese la fecha final`)
      const inputUser = parseInt(prompt('Cuantas personas se van alojar'))// recibimos el numero de personas que se van hospedar
      const roomsAvailables = availableRooms(inputUser, rooms, roomTypes) // asignamos una variable  a la funcion y le pasamos los argumentos para que nos traiga un array con los resultados
      if (roomsAvailables.length > 0) { // verificamos que el array de roomsAvailables tenga por lo menos un valor
        roomsAvailables.forEach(room => { // si tiene un valor aplicamos un forEach para mostrar el array con los numeros de habitacion, disponibilidad y precio
          console.log(`Habitacion: ${room.number}, Disponible: ${room.availability}, Precio: ${room.priceNight}`)
        });
        const inputNumberRoom = parseInt(prompt('Seleccione el numero de habitacion a reservar')) // le damos la opcion de elegir la habitacion del array que cumple con sus condiciones
        const selectedRoom = roomsAvailables.find(room => room.number === inputNumberRoom) // verificamos que el numero de habitacion que nos dio coincida con el array
        if (selectedRoom) { // condicional de si cumple muestre el console.log siguiente
          function generarGeneradorId() {
            let id = 0;
            function increase() {
             return id++
            }
            return increase()
          }
          // const generarId = generarGeneradorId()
          bookings.push({
            id: generarGeneradorId(),
            numberRoom: selectedRoom,
            dateStar: inputUserDateStar,
            dateEnd: inputUserDateEnd,
            name: inputUserName
          })
          console.log(bookings)
          console.log(`Habitacion ${selectedRoom.number} reservada con exito!`)
        } else {
          console.log('Ingrese un numero de habitacion valido') // si el numero de habitacion que ingresa no coincide , le mostramos un error
        }
      } else {
        console.log(`No hay habitaciones disponible para ${inputUser} personas`) // si el array de habitaciones disponibles es vacio es por que no hay haiatciones con las condiciones que pide
      }
    })
    .catch(error => {
    console.error('Hubo un error al cargar los datos', error) // se muestra en dado caso de que la promesa que nos trae un objeto genere un error.
  })
}

menu()














