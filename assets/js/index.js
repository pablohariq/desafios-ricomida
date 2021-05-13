// const Swal = require('sweetalert2');


$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });
//   inicializa el carrusel
$('.carousel').carousel();

// Enviar alerta convencional usando el botón de id #btnenviarCorreo
// incluye una función anónima. De igual forma se podría crear esa función antes y pasarla como parámetro al metodo .click()
$("#btnenviarCorreo").click(function() {
  alert("El correo fue enviado correctamente.");
})

// Usando el mismo botón anterior usar alerta de Sweet Alert
// en construcción

// cambiador de color de titulos

$("h1").on("dblclick", function(){ 
  $(this).addClass("titulorojo");
})

$(".card-img-top").on("click", function() {
  $(".card-body").toggle('slow');
});
  
