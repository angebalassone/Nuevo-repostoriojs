/* Ver si existe una clave productos en el local storage //
let productos = localStorage.getItem('productos');
if (productos == null) {
 const stock = [];
 for (let index = 0; index < 5; index++) {
 stock.push(prompt('Ingresar producto'))
 }

 localStorage.setItem('productos', stock);
} else {
 let stock = '';
 const arrayProductos = productos.split(',');
 for (const nombreProducto of arrayProductos) {
 stock += nombreProducto + '\n';
 }
 alert(stock);
}

// Guardar el producto en el carrito//
class almohadon {
  constructor (nombre, precio, articulo) {
   this.nombre = nombre;
   this.precio = precio;
   this.articulo = articulo;
   };
  };
// Creacion de array // 
  const almohadones = [];
almohadones .push(new almohadon("Enjoy Life ", 700, ['Blanco', 'Plush'], 1));
almohadones .push(new almohadon("Beautifull ", 800, ['Celeste', 'Rosa', 'Algodon'],
0));
almohadones .push(new almohadon("Love ", 1000, ['Dorado', 'Plush'], 2));
almohadones .push(new almohadon("Life ", 900, ['Verde militar', 'Algodon', 'Brillos dorados'], 5));
almohadones .push(new almohadon("Dreams ", 600, ['Celeste', 'Plush'], 4));
localStorage .setItem('almohadones ', JSON.stringify(almohadones ));

let almacenados = localStorage .getItem('almohadon ');
if (almacenados != null) {
let array = JSON.parse(almacenados);
let salida = 'SELECCIONAR ALMOHADON \n';
for (let index = 0; index < array.length; index ++) {
salida += index + ' -> ' + array[index].nombre + ' ' + array[index].articulo + ' $ ' + array[index].precio + '\n';
}
alert(salida);
let eleccion = parseInt (prompt('INGRESAR ALMOHADON '));
if ((eleccion >= 0) && (eleccion < array.length)) {
alert("ALMOHADON SELECCIONADO " + array[eleccion].nombre)
} else {
alert("ERROR DE SELECCION ");
}}

let guardadas = localStorage .getItem('ALMOHADON ');
if (guardadas != null) {
let array = JSON.parse(guardadas);
array. forEach(almohadones => { almohadon.precio += (almohadon.precio * 0.3) });
localStorage .setItem('almohadon ', JSON.stringify (array));
}
*/

