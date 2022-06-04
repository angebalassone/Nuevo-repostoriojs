//Alerta//
(async() => {
const {value:prestaciones} = await  swal.fire({
    title: "Bienvenidos a Emil-Ang",
    text: "Seleccione que producto desea llevar",
    icon: "success",
    confirmButtonText:"seleccionar",
    backdrop: true,
    position: "center",
    input:"select",
    inputPlaceholder:"Productos", 
    inputOptions: {
        almohadon: "Almohadones",
        velas: "Velas",
        neceser:"Neceser",
        remeras: "Remeras",
        sweater: "Sweeters",
        camisas: "Camisas",
    }
});

if (prestaciones){
    Swal.fire({
        title: `Seleccionaste ${prestaciones}`
      });
}


})()