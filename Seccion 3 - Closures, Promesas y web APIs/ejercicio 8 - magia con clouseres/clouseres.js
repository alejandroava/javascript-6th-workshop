flag = true
const increaseCounter = contador()
    
function contador() {
    let counter = 0
     function increase() {
         counter++
         console.log(counter)
    }
        return increase
}



while (flag) {
    let inputUser;
    inputUser = prompt(`
    1. Incrementar contador
    2. Salir`)

    if (inputUser == '1') {
        increaseCounter()
    }else if(inputUser == '2') {
        flag = false
    } else {
        alert('Ingrese un valor valido')
    }
}

