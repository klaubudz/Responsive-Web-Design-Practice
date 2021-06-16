
jQuery(document).ready(function($){
    $(window).scroll(function () {
	  if ($(document).scrollTop() > 80 ) {
	    $('.mainHeader').addClass('-shrinkHeader');
	    $('.headerImage').addClass('-shrinkImage');
	    $('.shrinkBurger').addClass('-shrinkBurger');
	    $('.scrollMenu').addClass('-shrinkMenu');

	  } else {
	    $('.mainHeader').removeClass('-shrinkHeader');
	    $('.headerImage').removeClass('-shrinkImage');
	    $('.shrinkBurger').removeClass('-shrinkBurger');
	    $('.scrollMenu').removeClass('-shrinkMenu');
	  }
	});
});

$(document).ready(function(){
	$('.openBurger').click(function(){
		$(this).toggleClass('open--burger');
		$('.showMenu').toggleClass('show--menu');
	});
});