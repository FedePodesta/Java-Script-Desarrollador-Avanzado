var Producto = function(id, nombre, precio, stock) {
    return {
        id: id,
        nombre: nombre,
        precio: precio,
        stock: stock
    }
}


var Carrito = function() {

    var items = [];

    function incrementar(producto) {
        items = items.map(function(val){
            if(val.producto.id == producto.id) {
                
                return {
                    producto: val.producto,
                    cantidad: val.cantidad + 1
                }
            }
            else
                return val;
        });
    }

    function agregar(producto) {
        items.push({
            producto: producto,
            cantidad: 1
        });
    }

    function quitar(producto) {
        items = items.filter(function(val){
            return val.producto.id !== producto.id
        });
    }

    function reporte() {
        // Calcular el precio total
        var precioTotal = items.reduce(function(precio, val){
            return precio + (val.producto.precio * val.cantidad)
        }, 0);

        var detalle = items.map(function(val){
            return {
                nombre: val.producto.nombre,
                precioUnitario: val.producto.precio,
                cantidad: val.cantidad,
                total: val.cantidad * val.producto.precio
            }
        });

        return {
            total: precioTotal,
            detalle: detalle
        };
    }

    return {
        incrementar: incrementar,
        agregar: agregar,
        quitar: quitar,
        reporte: reporte
    }
}
