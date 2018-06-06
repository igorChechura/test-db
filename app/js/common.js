$(function() {

	// Close top-banner
	$('.close').click(function(){
		$('.top-banner').fadeOut();
	});
	
	// Owl-carousel
	$('.owl-carousel').owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		dots: true,
		autoplay: true,
		autoplayTimeout: 7500
	});
	
	
	
	

});
