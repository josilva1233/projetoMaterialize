(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space




M.toast({html: 'Obrigado por nos visitar!', classes: 'rounded'})


$('#modal1').submit(function (e) {
 $.ajax({
  url: '.php/email.php',
  type: 'POST',
  data: new FormData(this),
  dataType: 'json',
  processData: false,
  contentType: false,

  error: function (jsonRetError) {
   console.log(jsonRetError);
  },
  success: function (jsonRetSucess) {
   alert(jsonRetSucess);
  }
});
});
