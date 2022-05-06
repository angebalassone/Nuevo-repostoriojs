


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

  let seleccion = prompt("Seleccionar Producto \n 1 -ALMOHADON \n 2 - VELA");
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
 






   












   
    




