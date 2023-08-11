//productos, carrito

class Producto{
    constructor(id,nombre,precio){
    this.id = id
    this.nombre = nombre
    this.precio = precio
    this.cantidad = 1
    }
}

const listaProductos = []
const carrito = []


/* Ambas forma son valida */
const p3 = new Producto(3,"jabon",250)
const p4 = new Producto(4,"gel",300)
const p5 = new Producto(5,"esponja",500)

listaProductos.push(new Producto(1,"shampoo",250))
listaProductos.push(new Producto(2,"acondicionador",350))
listaProductos.push(p3)
listaProductos.push(p4)
listaProductos.push(p5)

console.log("para seleccionar un producto, ingrese el ID")

for (const objeto of listaProductos) {
    console.log("id: "+objeto.id+"\nProducto: "+objeto.nombre+"\nPrecio: "+objeto.producto)
}

let id = prompt("Ingrese el ID del producto a comprar")

for (let index = 0; index < listaProductos.length; index++) {
    
    let objeto = listaProductos[i]
    if(id == objeto.id){
        carrito.push(objeto)
        let cantidad = Number(prompt("Ingrese la cantidad que desee del producto"))
        objeto.cantidad = cantidad
    }
    
}