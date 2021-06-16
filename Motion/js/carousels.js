$(document).ready(function(){
  $('.worksCarousel').slick({
		slidesToShow: 4,
		dots: true,
		infinite: true,
		speed: 500,
		cssEase: 'linear',
		arrows: false,
		swipeToSlide: true
  });
});

$(document).ready(function(){
  $('.welcomeCarousel').slick({
		dots: false,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000
  });
});

$(document).ready(function(){
  $('.tweetsCarousel').slick({
		dots: false,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><span class="arrow">&#8249;</span></button>',
		nextArrow: '<button type="button" class="slick-next"><span class="arrow">&#8250;</span></button>',
		appendArrows: $('.twitter--icon')
  });
});

