// A $( document ).ready() block.
$( document ).ready(function() {
  $('#menu-about').click(function(){
    $('#about').fadeIn(1000);
    $('#contact').hide();
  });
  $('#menu-contact').click(function(){
    $('#contact').fadeIn(1000);
    $('#about').hide();
  });
});
