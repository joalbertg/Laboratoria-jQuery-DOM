function begin() {
  efectos();
}

function efectos() {
  $('#boton-1').on('click', function() {
    $('#cuadro').fadeTo(3000, 0.25);
  })

  $('#boton-2').on('click', function() {
    $('#cuadro').fadeTo('slow', 100);
  })

  $('#boton-3').on('click', function() {
    $('#cuadro').fadeOut();
  })

  $('#boton-4').on('click', function() {
    $('#cuadro').fadeIn();
  })

  $('#boton-5').on('click', function() {
    $('#cuadro').fadeOut().fadeIn();
  })
}

window.addEventListener('load', begin);