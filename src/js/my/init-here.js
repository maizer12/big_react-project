//
$(document).ready(function () {
	$('.select2').select2()
})
//
$('.js-range-slider').ionRangeSlider({
	type: 'single',
	grid: false,
})
//SLICK
$(document).ready(function () {
	$('.car-park-slide').slick({
		prevArrow: '.slick-prev',
		nextArrow: '.slick-next',
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 601,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	})
})

//accordions
// $(function() {
//   $(".often-questions__acordions").accordion({
//     active: 1000,
//     collapsible: true,
//     activate: function(event, ui) {
//       if (ui.newPanel.length > 0) {
// 				ui.newPanel.parent().addClass("active-accord-parent");
//         $("body").addClass("active-accord-class");
//       } else {
//         $("body").removeClass("active-accord-class");
//       }
//     }
//   });
// });
$(function () {
	$('.often-questions__acordions').accordion({
		active: 1000,
		collapsible: true,
	})
})

//burger - popup
const btnBurg = document.querySelector('.header__burger')
const body = document.querySelector('body')
const btnPopup = document.querySelector('.start-mani')
const innerPopup = document.querySelector('.earnings-column')
const closePopup = document.querySelector('.earnings-column__close')

const clearBody = () => {
	if (body) {
		body.classList = ''
	}
}

btnBurg?.addEventListener('click', () => {
	body?.classList.toggle('menu-open')
})

btnPopup?.addEventListener('click', () => {
	body?.classList.toggle('popup-open')
})

innerPopup?.addEventListener('click', e => {
	const elem = e.target.classList.contains('earnings-column')
	if (elem) {
		body?.classList.toggle('popup-open')
	}
})

closePopup?.addEventListener('click', () => {
	body?.classList.toggle('popup-open')
})
//footer

$(function () {
	var mq = window.matchMedia('(min-width: 769px)')
	var accordion = $('.footer-accordions').accordion({
		active: null,
		collapsible: true,
		heightStyle: 'content',
	})

	function checkBreakpoint(mq) {
		if (mq.matches) {
			accordion.accordion('destroy')
		} else {
			accordion = $('.footer-accordions').accordion({
				active: null,
				collapsible: true,
				heightStyle: 'content',
			})
		}
	}

	mq.addListener(checkBreakpoint)
	checkBreakpoint(mq)
})

//switch-start
const allButtonsSwitch = document.querySelector('.earnings-column-switch')

allButtonsSwitch?.addEventListener('click', e => {
	const elem = e.target
	const parent = elem.parentNode
	const active = parent.parentNode.querySelector('.earnings-btn-active-switch')
	if (elem.classList.contains('earnings-column-switch__text') && active) {
		active.classList.remove('earnings-btn-active-switch')
		parent.classList.add('earnings-btn-active-switch')
	}
})
//video popup
$(document).ready(function () {
	$('.video-popup').magnificPopup({
		type: 'iframe',
	})
})
