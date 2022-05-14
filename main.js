


    /*PARTE 3 Ejercicio 3 
    let productos = '';
    for (let index = 0; index < 5; index++) {
        productos += prompt("INGRESAR PRODUCTOS")+"\n";
    }
    alert(productos);
    

    /*let entrada    = prompt("INGRESAR NOMBRE");
    let ingresados = '';
    while (entrada != 'Voldemort') {
        ingresados += entrada +"\n";
        entrada     = prompt("INGRESAR NOMBRE");
    }
    alert(ingresados); 
    */

  /*let seleccion = prompt("Seleccionar Producto \n 1 -ALMOHADON \n 2 - VELA");
 let numero = prompt ("Ingresar Cantidad de unidades de su producto seleccionado");
   if (numero >= 10) {
       alert ("Obtenes un descuento del 10%");
       function descuento(precio, porcentaje){
        return precio - ((precio * porcentaje)/100)
    }
    for (let index = 0; index < 1; index++) {
        let resultado = descuento(parseFloat(prompt("INGRESAR PRECIO"))
      ,parseFloat(prompt("INGRESAR %")));
        alert(resultado);
   }}

    else if (numero <10) {
        alert ("No aplica descuento");
    }
    */
   // Entrega //
   
   const saludar = () => {
    let nombre = prompt("Bienvenido a Emil-Ang , ingrese su nombre :");
    while (nombre === "") {
      nombre = prompt("Bienvenido a Emil-Ang , ingrese su nombre :");
    }
    //return nombre;
  };
  
  class Productos {
  constructor (nombre, precio, articulo) {
   this.nombre = nombre;
   this.precio = precio;
   this.articulo = articulo;
   };
  };
  let productoArticulo;
  let carrito = [];

const almohadon1 = new Productos ("Beautiful", 700, 1);
const almohadon2 = new Productos ("Enjoy Life", 700, 2);
const almohadon3 = new Productos ("Piel Berrex", 800, 3);
const productos = [almohadon1,almohadon2,almohadon3];

const mostrarProductos = () => {
let texto = "";
productos.forEach((element) => {
texto += `${element.articulo}) ${element.nombre}\n`;
});
let seleccion = parseInt(prompt(`Que almohadon llevara? :\n${texto}`));
while (seleccion < 1 || seleccion > 3) {
 seleccion = parseInt(
prompt(`Incorrecto !\nQue almohadon llevara? :\n${texto}`));
}
return seleccion;
};

const productoSeleccionado = (articulo) => {
  console.log(articulo);
  let productosFind = productos.find((element) => element.articulo === articulo);
  carrito.push(productosFind);
  let seguir = confirm("Desea llevar otro almohadon ?: ");

  if (seguir === true) {
    init();
  }
};


const init = () => {
productoArticulo = mostrarProductos ();
productoSeleccionado (productoArticulo);
};
saludar ();
init ();





