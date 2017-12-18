// vanillaJS
window.onload = function() {
  console.log('Se ha cargado la ventana semánticamente!!!');
}

window.addEventListener('load', function() {
  console.log('Se ha cargado la ventana con eventos múltiples!!!');
})

document.onready = function() {
  console.log('Se ha cargado el documento semánticamente!!!');    
}

// no existe ya que solo ocurre una vez y no se puede prender y apagar
/* document.addEventListener('ready', function() {
  console.log('Se ha cargado el documento con eventos múltiples!!!');  
}) */

// jQuery
jQuery(window).load(function() {
  console.log('Se ha cargado la ventana semánticamente con jQuery!!!');  
})

jQuery(window).on('load', function() {
  console.log('Se ha cargado la ventana con eventos múltiples con jQuery!!!');  
})

jQuery(document).ready(function() {
  console.log('Se ha cargado el documento semánticamente con jQuery!!!');      
})

jQuery(document).on('ready', function() {
  console.log('Se ha cargado el documento con eventos múltiples con jQuery!!!');      
})
