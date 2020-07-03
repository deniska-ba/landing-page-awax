;(function($){
	"use strict";
	$(function(){

		// Foundation init
		$(document).foundation();

		$(document).ready(function(){
			//Hero Slider
			$('.hero__slider').slick({
				slide: '.hero__slide',
				// infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				arrows: false,
				responsive: [
					{
						breakpoint: 1024,
						settings: {
							dots: false
						}

					}
				]
			});

			// Team Slider
			$('.team__slider').slick({
				slide: '.team__slide',
				// infinite: true,
				slidesToShow: 3,
				slidesToScroll: 2,
				dots: true,
				arrows: false,
				responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}

					},
					{
						breakpoint: 640,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}

					}
				]
			});

			// Clients Slider
			$('.clients__slider').slick({
				slide: '.clients__slide',
				// infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				arrows: false
			});

			//Product Slider
			$('.product__slider').slick({
				slide: '.product__slide',
				// infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				arrows: false
			});

			// init Isotope
			var $grid = $('.grid').isotope({
			  // options
			  itemSelector: '.element-item',
			  layoutMode: 'fitRows'
			});

			// Prevent overlapping images
			$grid.isotope('layout');

			// Isotope filter items on button click
			$('.filter-button-group').on( 'click', 'button', function() {
			  var filterValue = $(this).attr('data-filter');
			  $grid.isotope({ filter: filterValue });
			});


		});

		// Counter on scroll
		var a = 0;
		$(window).scroll(function() {

		  var oTop = $('#counter').offset().top - window.innerHeight;
		  if (a == 0 && $(window).scrollTop() > oTop) {
		    $('.counter-value').each(function() {
		      var $this = $(this),
		        countTo = $this.attr('data-count');
		      $({
		        countNum: $this.text()
		      }).animate({
		          countNum: countTo
		        },

		        {

		          duration: 5000,
		          easing: 'swing',
		          step: function() {
		            $this.text(Math.floor(this.countNum));
		          },
		          complete: function() {
		            $this.text(this.countNum);
		            //alert('finished');
		          }

		        });
		    });
		    a = 1;
		  }

		});
	})
})(jQuery);



