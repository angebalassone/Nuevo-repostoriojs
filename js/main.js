
 document.querySelector('h1').textContent ="Bienvenidos" 


const divContenedor = document.getElementById("newDiv");
divContenedor.innerHTML = "<p>Encontra la nueva temporada Primavera-Verano </p>" 

// Local Storage//
let usuario = localStorage.getItem('nombre');
if (usuario == null) {
 localStorage.setItem('nombre', prompt('INGRESAR NOMBRE '));
} else {
 alert('Bienvenido/a ' + usuario);
}


