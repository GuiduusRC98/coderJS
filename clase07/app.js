function porCadaUno(arreglo, funcion) {

    for (const el of arreglo) {
        funcion(el)
        
    }
}

let listaNumerica = [1,2,3,4]
const duplicado = []

porCadaUno(listaNumerica, (el)=> {
    duplicado.push(el * 2)
})

console.log(duplicado)