
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
   
    saludar (); 
    
   
    // Operadon o //
    let entrada2 = prompt("INGRESAR SI TENES UN CODIGO DE DESCUENTO");
    if ((entrada2 == "EMIL-ANG") || (entrada2 == "emil-ang")) {
    console.log("CORRECTO");
    } else {
    console.log("ERROR");
    }

    //Promesa de clase//
    const BD = [
      {id: 1, nombre: 'Almohadon Enjoy Life', precio: 700},
      {id: 2, nombre: 'Almohadon Dreams White', precio: 800},
      {id: 3, nombre: 'Almohadon Love Celeste ', precio: 900},
      
     ]
     const pedirProductos = () => {
      return new Promise( (resolve, reject) => {
      setTimeout(() => {
      resolve(BD)
      }, 3000)
      })
    }

    
let productos = []
const renderProductos = (arr) => {
 
 for (const item of arr) {
   console.log(item);
 }
}

pedirProductos()
 .then((res) => {
 productos = res
 renderProductos(productos)
 })
 
    
// Ajax//
$.ajax({
  method: "GET",
  url: "http://file:///C:/Users/angelina.balassone/Desktop/backup%20Angi/ANGE%20NUEVA%20COMPU/ange/angelina/curso%20de%20desarrolador%20web/Javascript/TRABAJO/nuevo_repo/index.html/"
}).done(function(data) {
  alert(data); // imprimimos la respuesta
}).fail(function() {
  alert("Algo salió mal");
}).always(function() {
  alert("Siempre se ejecuta")
});