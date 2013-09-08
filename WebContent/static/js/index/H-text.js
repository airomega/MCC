$(document).ready(function() {

	$('.H-text').click(function() {

		divs = $('div');
		$(divs).each(function() {
			currentElem = $(this);
			setDivNormal();
		});
		
		spans = $('.name-letter');
		$(spans).each(function() {
			currentElem = $(this);
			setTextNormal();
		});

	});
	
	function setDivNormal(){
		$(currentElem).css({
			'background-color' : '#FFFFFF'
		});
	}

	function setTextNormal() {
		selectedColour = '#000000';
		selectedFontSize = '22px';
		selectedFontType = 'sans-serif';
		$(currentElem).css({
			'font-family' : selectedFontType
		});

		$(currentElem).animate({
			'font-size' : selectedFontSize,
		}, Math.floor(Math.random() * (5)) * 1000);
		$(currentElem).css({
			'color' : selectedColour
		});
	}

});