$(document).ready(function(){
	$('.faces--carousel').slick({
		infinite: true,
		slidesToShow: 20,
		slidesToScroll: 1,
		swipeToSlide: true,

		dots: false,
		arrows: false,

		autoplay: true,
		autoplaySpeed: 1000,

		responsive: [
		    {
		      breakpoint: 1390,
		      settings: {
		        slidesToShow: 18
		      }
		    },
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 16
		      }
		    },
		    {
		      breakpoint: 1115,
		      settings: {
		        slidesToShow: 14
		      }
		    },
		    {
		      breakpoint: 992,
		      settings: {
		        slidesToShow: 12
		      }
		    },
		    {
		      breakpoint: 690,
		      settings: {
		        slidesToShow: 10
		      }
		    },
		    {
		      breakpoint: 550,
		      settings: {
		        slidesToShow: 8
		      }
		    },
		    {
		      breakpoint: 440,
		      settings: {
		        slidesToShow: 6
		      }
		    },
		    {
		      breakpoint: 350,
		      settings: {
		        slidesToShow: 5
		      }
		    }
		  ]
	});
});