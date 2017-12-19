function begin() {
  efectos();
}

function efectos() {
  $('#animar-1').on('click', function() {
    $('#animable')
      .animate({height: 200}, 'slow')
      .animate({width: 200}, 'fast')
      .animate({height: 50, width: 50}, 'swing');
  })

  $('#animar-2').on('click', function() {
    $('#animable')
      .animate({left: '50%'}, 'slow')
      .animate({left: '40%'}, 'slow')
      .animate({width: 200}, 'fast')
      .animate({'font-size': '3rem'}, 1000);
  })
}

$(document).ready(begin);
