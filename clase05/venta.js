class Producto{
    constructor(nombre, cantidad, precio){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
    }

    descripcion(){
        return "Nombre: "+this.nombre+" \tCantidad: $"+this.cantidad+" \tPrecio: $"+this.precio
    }
}

class Carrito{

    constructor() {
        this.listaProductos = ""
        this.total = 0
    }

    agregarProducto(objProducto){
        this.listaProductos = this.listaProductos + objProducto.descripcion() + "\n"
        this.total = this.total + objProducto.cantidad * objProducto.precio
    }

    mostrar(){
        return this.listaProductos + "\nTotal: $"+this.total+"\nTotal con Iva: $"+this.calcularTotalConIva()
    }

    calcularTotalConIva(){
        return this.total * 1.21
    }

}

const carrito = new Carrito()
let rta = ""

do{

    let nombre = prompt("Ingrese nombre producto")
    let cantidad = Number(prompt("Ingrese cantidad"))
    let precio = Number(prompt("Ingrese precio del producto"))

    let objeto_producto = new Producto(nombre, cantidad, precio)

    carrito.agregarProducto(objeto_producto)
    alert(carrito.mostrar())

    rta = prompt("Ingrese ESC para salir")
}while(rta != 'ESC')