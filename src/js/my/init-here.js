//
$(document).ready(function() {
  $('.select2').select2();
});
//
$(".js-range-slider").ionRangeSlider({
	type: "single",
	grid: false
});
//SLICK
$(document).ready(function(){
  $('.car-park-slide').slick({
    slidesToShow: 3,
		prevArrow: '.slick-prev',
    nextArrow: '.slick-next'
  });
});
//accordions
$( function() {
	$( ".often-questions__acordions" ).accordion({
		active:1000,
		collapsible:true
	});
} );