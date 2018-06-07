$(function() {

	// Close top-banner
	$('.close').click(function(){
		$('.top-banner').fadeOut();
	});
	
	// Snlicknav
	/*$('.menu ul').slicknav({
		prependTo: '.mobile-menu',
	});*/
	
	// Slimmenu	
	/*$('.menu').slimmenu({
		resizeWidth: '1024',
		collapserTitle: 'Меню',
		animSpeed: 'medium',
		easingEffect: null,
		indentChildren: false,
		childrenIndenter: '&nbsp;'
	});*/
	
	// Menu-button
	$('.menu-button').click(function(){
		$(this).toggleClass('is-active');
		$('.menu').toggleClass('menu-active');
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
