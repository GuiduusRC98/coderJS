const numeros = [1,2,3,4,5,6]

numeros.forEach( (num)=> {
    console.log(num)
} )

const objetoConArray ={
    nombre: "objeto con array",
    arr: ["abeja", "banana", "camion"]
};

objetoConArray.arr.forEach((elemento) => {
    console.log(elemento + " jaajaja")
});