class Producto{
    constructor(id, nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = 1;
    }

    descripcion = () => {
        return "===================================\n   \t ID:" + this.id + "\t Nombre:" + this.nombre + "\t Precio: $" + this.precio + "\n";
    };
}

class Carrito{
    constructor(){
        this.listaDeCompras = []
    }

    agregar = (producto, cantidad) => {
        const itemEnCarrito = this.listaDeCompras.find(item => item.id === producto.id);

        if (itemEnCarrito) {
            itemEnCarrito.cantidad += cantidad;
        } else {
            producto.cantidad = cantidad;
            this.listaDeCompras.push(producto);
        }
    }

    eliminar = (producto, cantidad) => {
        const index = this.listaDeCompras.findIndex(item => item.id === producto.id);

        if (index !== -1) {
            if (this.listaDeCompras[index].cantidad <= cantidad) {
                
                this.listaDeCompras.splice(index, 1);
            } else {
                
                this.listaDeCompras[index].cantidad -= cantidad;
            }
        } else {
            alert("Producto no encontrado en el carrito.");
        }
    }


    calcular_total = () => {
        return this.listaDeCompras.reduce( (acumulador, producto)=> acumulador + producto.precio * producto.cantidad , 0 )
    }
}

class ProductoController{
    constructor(){
        this.listaDeProducto = []
    }

    agregar = (producto) => {
        this.listaDeProducto.push(producto)
    }

    mostrar = () => {
        let acumuladora_description = ""
        this.listaDeProducto.forEach( producto => {
            acumuladora_description = acumuladora_description + producto.descripcion()
        })
        return acumuladora_description
    }
}

const obl_carrito = new Carrito();
const cp = new ProductoController();

const p1 = new Producto(1,"CAMISETA NEGRA ARBITRO ATHIX OFICIAL AFA 2022/23",15490);
const p2 = new Producto(2,"MEDIAS ATHIX OFICIAL",3490);
const p3 = new Producto(3,"SHORT ATHIX OFICIAL AFA 2022/23",12490);

cp.agregar(p1);
cp.agregar(p2);
cp.agregar(p3);

alert(cp.mostrar());

while (true) {
    const entrada = prompt("Ingrese el ID del producto: \n\n\tEscriba 'total' para terminar y abonar.\n\tEscriba 'catalogo' para ver los productos nuevamente.\n\tEscriba 'carrito' para ver el carrito.\n\tEscriba 'eliminar' para quitar un producto del carrito.");

    if (entrada === 'catalogo') {
        alert(cp.mostrar());
        continue;
    } else if (entrada === 'total') {
        break;
    } else if (entrada === 'carrito') {
        if (obl_carrito.listaDeCompras.length === 0) {
            alert("El carrito está vacío.");
        } else {
            let mensaje = "Productos en el carrito:\n";
            for (const producto of obl_carrito.listaDeCompras) {
                mensaje += producto.nombre + "- Cantidad: " + producto.cantidad + "\n";
            }
            alert(mensaje);
        }
    
    } else if (entrada === 'eliminar') {
        const productoIdAEliminar = parseInt(prompt("Ingrese el ID del producto que desea eliminar:"));
        const productoAEliminar = obl_carrito.listaDeCompras.find(item => item.id === productoIdAEliminar);
        if (productoAEliminar) {
            const cantidadAEliminar = parseInt(prompt("Ingrese la cantidad que desea eliminar:"));
            obl_carrito.eliminar(productoAEliminar, cantidadAEliminar);
            alert("Producto eliminado del carrito.");
        } else {
            alert("El producto no se encontró en el carrito.");
        }
        continue;
       
    } else {
        const productoId = parseInt(entrada);
        const cantidad = parseInt(prompt("Ingrese la cantidad:"));
    
        const productoSeleccionado = cp.listaDeProducto.find(producto => producto.id === productoId);
    
        if (productoSeleccionado) {
            obl_carrito.agregar(productoSeleccionado, cantidad);
            alert("Producto agregado al carrito.");
        } else {
            alert("Producto no encontrado.");
        }
    }
}

const total = obl_carrito.calcular_total();
alert("El total de la compra es: $"+total );