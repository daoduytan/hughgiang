$(document).ready(function() {
	/*Fix nav
	-----------------------------*/
	$(window).scroll(function(event) {
		/* Act on the event */
		var hTop = $(this).scrollTop(),
		 	h = $('#header').height();

		if (h < hTop) {
			$('.navbar').addClass('fixed');
		} else{
			$('.navbar').removeClass('fixed');
		};
	});

	/*Navbar
	-----------------------------*/
	$('.btn-nav').click(function(event) {
		$('.navbar .menu-nav').toggleClass('open');
	});

	$('.menu-nav a').click(function(event) {
		/* Act on the event */
		$('.navbar .menu-nav').removeClass('open');
	});
	
	/*Bx slider
	-----------------------------*/
	$('#section7 .bxslider').bxSlider({
		minSlides: 1,
		maxSlides: 4,
		slideWidth: 260,
		slideMargin: 30,
		easing: 'easeOutElastic',
		speed: 2000
		
	});

	$('#section9 .bxslider').bxSlider({
		pagerCustom: '#bx-pager',
		pager: true,
		mode: 'fade',
		auto: true
	});

	$('#section5 .bxslider').bxSlider({
		controls: false,
		auto: true,
		easing: 'easeOutElastic',
		speed: 1000
	});

	/* list day  - list person 
	-----------------------------*/
	$( "#datepicker" ).datepicker();

	$('.time, .person').click(function(event) {
		// Act on the event 
		var $this = $(this);
		$this.find('.listForm').slideToggle('fast');
	});

	$('.listForm').children('li').on('click', 'a', function(event) {
		event.preventDefault();
		/* Act on the event */
		var $this = $(this),
			text = $this.text();

		$this.parents('li').find('input').val(text);
	});

	/* Animate
	-----------------------------*/
	$('.navbar').bind('inview', function (event, visible) {
		var $this = $(this);
	  	if (visible == true) {
	   		$this.addClass('animated fadeInUp');
		}else {}
	});

	$('.item-post').bind('inview', function (event, visible) {
		var $this = $(this);
	  	if (visible == true) {
	   		$this.addClass('animated fadeInRight');
		}else {}
	});

	$('.h-section').bind('inview', function (event, visible) {
		var $this = $(this);
	  	if (visible == true) {
	   		$this.addClass('animated fadeInUp');
		}else {}
	});

	$('.large, .small').bind('inview', function (event, visible) {
		var $this = $(this);
	  	if (visible == true) {
	   		$this.addClass('animated fadeInUp');
		}else {}
	});

	$('.frame').bind('inview', function (event, visible) {
		var $this = $(this);
	  	if (visible == true) {
	   		$this.addClass('animated fadeInRight');
		}else {}
	});

	$('#section3 .col-sm-7').bind('inview', function (event, visible) {
		var $this = $(this);
	  	if (visible == true) {
	   		$this.addClass('animated fadeInLeft');
		}else {}
	});

	$('.child-service').bind('inview', function (event, visible) {
		var $this = $(this);
	  	if (visible == true) {
	   		$this.addClass('animated fadeInLeftBig');
		}else {}
	});

	$('.phone').bind('inview', function (event, visible) {
		var $this = $(this);
	  	if (visible == true) {
	   		$this.addClass('animated fadeInUp');
		}else {}
	});
	$('#section8 .col-sm-7').bind('inview', function (event, visible) {
		var $this = $(this);
	  	if (visible == true) {
	   		$this.addClass('animated fadeInRight');
		}else {}
	});

	/* crollTo
	-----------------------------*/
	$('.navbar, #header').on('click', 'a', function(event) {
		event.preventDefault();
		/* Act on the event */
		var $this = $(this),
		nameTitle = $this.attr('href'),
		height = $(nameTitle).offset().top;
		$('html,body').animate({
		scrollTop: height
		}, 1500);
	}); 

	/* parallax
	-----------------------------*/
	$('#header, #section8').parallax({speed : 0.2});
});

/* Scroll smooth
-----------------------------*/
if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta / 90;
    else if (event.detail) delta = -event.detail / 3;

    handle(delta);
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
}

function handle(delta) {
    var time = 900;
	var distance = 300;
    
    $('html, body').stop().animate({
        scrollTop: $(window).scrollTop() - (distance * delta)
    }, time );
};


