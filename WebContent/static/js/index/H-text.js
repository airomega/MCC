$(document).ready(function() {

	$('.H-text').click(function() {
		divs = $('div');
		$(divs).each(function() {
			currentElem = $(this);
			setDivNormal();
		});

		letterDivs = $('.letter-div');
		$(letterDivs).each(function() {
			currentElem = $(this);
			setLetterDivNormal();
		});

		spans = $('.name-letter');
		$(spans).each(function() {
			currentElem = $(this);
			setTextNormal();
		});

	});

});

function setDivNormal() {
	$(currentElem).css({
		'background-color' : '#FFFFFF'
	});
}

function setLetterDivNormal() {
	var position = $(currentElem).data('original-position');
	$(currentElem).animate({
		top : position.top,
		left : position.left
	});
	$(currentElem).css({
		'background-color' : 'transparent'
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
	}, 700);
	$(currentElem).css({
		'color' : selectedColour
	});
}