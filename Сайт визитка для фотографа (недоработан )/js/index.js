

//----------------Navigation--------------------------

$( () => {
	
	//On Scroll Functionality
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 100 ? $('nav').addClass('navShadow') : $('nav').removeClass('navShadow');
		windowTop > 100 ? $('ul').css('top','100px') : $('ul').css('top','160px');
	});
	
	//Click Logo To Scroll To Top
	$('#logo').on('click', () => {
		$('html,body').animate({
			scrollTop: 0
		},500);
	});
	
	//Smooth Scrolling Using Navigation Menu
	$('a[href*="#"]').on('click', function(e){
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 100
		},500);
		e.preventDefault();
	});
	
	//Toggle Menu
	$('#menu-toggle').on('click', () => {
		$('#menu-toggle').toggleClass('closeMenu');
		$('ul').toggleClass('showMenu');
		
		$('li').on('click', () => {
			$('ul').removeClass('showMenu');
			$('#menu-toggle').removeClass('closeMenu');
		});
	});
	
});



//-----------------Slider code-----------------------

(function() {
	var $slides = document.querySelectorAll('.slide');
	var $controls = document.querySelectorAll('.slider__control');
	var numOfSlides = $slides.length;
	var slidingAT = 1300; // sync this with scss variable
	var slidingBlocked = false;

	[].slice.call($slides).forEach(function($el, index) {
		var i = index + 1;
		$el.classList.add('slide-' + i);
		$el.dataset.slide = i;
	});

	[].slice.call($controls).forEach(function($el) {
		$el.addEventListener('click', controlClickHandler);
	});

	setInterval(function () {
		$( '#slider_control_right' ).click();
	}, 5000);


	function controlClickHandler() {
		if (slidingBlocked) return;
		slidingBlocked = true;

		var $control = this;
		var isRight = $control.classList.contains('m--right');
		var $curActive = document.querySelector('.slide.s--active');
		var index = +$curActive.dataset.slide;
		(isRight) ? index++ : index--;
		if (index < 1) index = numOfSlides;
		if (index > numOfSlides) index = 1;
		var $newActive = document.querySelector('.slide-' + index);

		$control.classList.add('a--rotation');
		$curActive.classList.remove('s--active', 's--active-prev');
		document.querySelector('.slide.s--prev').classList.remove('s--prev');
		
		$newActive.classList.add('s--active');
		if (!isRight) $newActive.classList.add('s--active-prev');
		

		var prevIndex = index - 1;
		if (prevIndex < 1) prevIndex = numOfSlides;

		document.querySelector('.slide-' + prevIndex).classList.add('s--prev');

		setTimeout(function() {
			$control.classList.remove('a--rotation');
			slidingBlocked = false;
		}, slidingAT*0.75);
	};
}());


// -----------isotope filter--------------------------

$( document ).ready(function() {
    var $container = $('.album_container');
    // filter buttons

    $('#filters button').click(function(){
		var $this = $(this);
        // don't proceed if already selected
        if ( !$this.hasClass('is-checked') ) {
          $this.parents('#options').find('.is-checked').removeClass('is-checked');
          $this.addClass('is-checked');
        }
      var selector = $this.attr('data-filter');
      $container.isotope({  itemSelector: '.grid-item', filter: selector });
      return false;
    });
    
});