
 /*document.querySelector('h1').textContent ="Bienvenidos" 


const divContenedor = document.getElementById("newDiv");
divContenedor.innerHTML = "<p>Encontra la nueva temporada Primavera-Verano </p>" 
*/

/* Local Storage
let usuario = localStorage.getItem('nombre');
if (usuario == null) {
 localStorage.setItem('nombre', prompt('INGRESAR NOMBRE '));
} else {
 alert('Bienvenido/a ' + usuario);
}
*/
 const saludar = () => {
    let nombre = prompt("Bienvenido a Emil-Ang , ingrese su nombre :");
        while (nombre === "") {
          nombre = prompt("Bienvenido a Emil-Ang , ingrese su nombre :");
        }
        //return nombre;
      };
    
    
      
   /*class Productos {
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
      let seguir = confirm("Desea llevar otro almohadon ?");
    
      if (seguir === true) {
      init();
      }
    };
    
    const init = () => {
    productoArticulo = mostrarProductos ();
    productoSeleccionado (productoArticulo);
    };*/
    
    saludar (); 
    //init ();//
   
    // Operadon o //
    let entrada2 = prompt("INGRESAR SI TENES UN CODIGO DE DESCUENTO");
    if ((entrada2 == "EMIL-ANG") || (entrada2 == "emil-ang")) {
    console.log("CORRECTO");
    } else {
    console.log("ERROR");
    }
        

