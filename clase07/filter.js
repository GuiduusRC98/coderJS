const productos = [
    {id: 1, nombre: 'Pantalon', precio: 150},
    {id: 2, nombre: 'Medias', precio: 75},
    {id: 3, nombre: 'Casaca negra', precio: 500},
    {id: 4, nombre: 'Casaca amarilla', precio: 600},
    {id: 5, nombre: 'Casaca azul', precio: 800},
]

const buscado = productos.find(producto => producto.id === 3)
console.log(buscado) // {id: 3, nombre: 'Casaca negra', precio: 500},

const existe = productos.some (producto => producto.nombre == "Pantalon")
console.log(existe)// true

const nombreProducto = productos.filter(producto => producto.nombre.includes('Casaca'))
console.log(nombreProducto);
// {id: 3, nombre: 'Casaca negra', precio: 500},
// {id: 4, nombre: 'Casaca amarilla', precio: 600},
// {id: 5, nombre: 'Casaca azul', precio: 800},

const baratos = productos.filter(producto => producto.precio <= 500)
console.log(baratos);
//{ id: 1, nombre: 'Pantalon', precio: 150 },
//{ id: 2, nombre: 'Medias', precio: 75 },
//{ id: 3, nombre: 'Casaca negra', precio: 500 }

const listaNombres = productos.map(producto => producto.nombre)
console.log(listaNombres)
//  'Pantalon','Medias','Casaca negra','Casaca amarilla','Casaca azul'