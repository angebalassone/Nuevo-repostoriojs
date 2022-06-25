// EVENTO //
const buttonEnviar = document.querySelector ("#enviar")

buttonEnviar.addEventListener("click", 
   function() {
    Swal.fire({
      title: "Tu formulario se envio correctamente",
      icon: "success",
    });
  });


// EVENTO //
const buttonBorrar = document.querySelector ("#borrar")

buttonBorrar.addEventListener("click", 
   function () {
        Swal.fire({
            title: "Formulario Borrado",
            icon: "success",
        });
    });
