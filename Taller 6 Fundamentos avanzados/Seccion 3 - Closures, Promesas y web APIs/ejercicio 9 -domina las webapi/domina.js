const url = 'https://jsonplaceholder.typicode.com/posts'

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('No se pudo cargar los datos')
        }
        return response.json()
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })


let promesa;
const inputUser = parseInt(prompt(`Ingrese los segundos`))
const converterTime = inputUser * 1000
promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Promesa ejecutada`)
    },converterTime)
}).then(resultado => {
    console.log(resultado)
})
