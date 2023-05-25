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
//burger - popup
const btnBurg = document.querySelector('.header__burger')
const body = document.querySelector('body')
const btnPopup = document.querySelector('.start-mani')
const innerPopup = document.querySelector('.earnings-column')
const closePopup = document.querySelector('.earnings-column__close')

const clearBody = () =>{
	if(body){
		body.classList = ''
	}
}

btnBurg?.addEventListener('click', ()=>{
	body?.classList.toggle('menu-open')
})

btnPopup?.addEventListener('click', ()=>{
	body?.classList.toggle('popup-open')
})

innerPopup?.addEventListener('click',(e)=>{
	const elem = e.target.classList.contains('earnings-column')
	if(elem){
		body?.classList.toggle('popup-open')
	}
})

closePopup?.addEventListener('click', ()=>{
	body?.classList.toggle('popup-open')
})