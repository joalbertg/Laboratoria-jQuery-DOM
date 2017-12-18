function begin() {
  efectos();
}

function efectos() {
  $('.mostrar').on('click', function() {
    $('.deslizante').slideDown(1500);
  })

  $('.ocultar').on('click', function() {
    $('.deslizante').slideUp('fast');
  })

  $('.mostrar-ocultar').on('click', function() {
    $('.deslizante').slideToggle();
  })
}

window.addEventListener('load', begin);