class Producto{
    constructor(id, nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = 1
    }

    descripcion(){
        return "===================================\n   \t ID: " +this.id+ "   \t Nombre: "+this.nombre+"  \t   Precio: $"+this.precio+"\n"
    }
}

class Carrito{
    constructor(){
        this.listaDeCompras = []
    }

    agregar(producto){
        this.listaDeCompras.push(producto)
    }

    calcular_total(){
        return this.listaDeCompras.reduce( (acumulador, producto)=> acumulador + producto.precio * producto.cantidad , 0 )
    }
}

class ProductoController{
    constructor(){
        this.listaDeProducto = []
    }

    agregar(producto){
        this.listaDeProducto.push(producto)
    }

    mostrar(){
        let acumuladora_description = ""
        this.listaDeProducto.forEach( producto => {
            acumuladora_description = acumuladora_description + producto.descripcion()
        })
        return acumuladora_description
    }
}

const obl_carrito = new Carrito()
const cp = new ProductoController()

const p1 = new Producto(1,"shampoo",250)
const p2 = new Producto(2,"acondicionador",830)
const p3 = new Producto(3,"jabon",50)

cp.agregar(p1)
cp.agregar(p2)
cp.agregar(p3)

alert(cp.mostrar())