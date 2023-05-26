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
$(document).ready(function() {
	var slider = $(".car-park-slide");
	var slidesToShow = calculateSlidesToShow();

	slider.slick({
		slidesToShow: slidesToShow,
		prevArrow: '.slick-prev',
		nextArrow: '.slick-next'
		// Додайте інші налаштування Slick Slider, які вам потрібні
	});

	function calculateSlidesToShow() {
		// Визначте ширину екрану або контейнера, в якому відображається слайдер
		var containerWidth = slider.width();

		// Перевірте, чи ширина менше 600
		if (containerWidth < 600) {
			return 1; // Показувати лише 1 слайд
		}

		// Визначте ширину одного слайда
		var slideWidth = slider.find("div").first().outerWidth();

		// Обчисліть кількість слайдів, які можуть вміститися на екрані
		var slidesToShow = Math.floor(containerWidth / slideWidth);

		return slidesToShow;
	}

	// Оновити кількість слайдів, коли розмір вікна браузера змінюється
	$(window).resize(function() {
		var slidesToShow = calculateSlidesToShow();
		slider.slick("slickSetOption", "slidesToShow", slidesToShow);
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