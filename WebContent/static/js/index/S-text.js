var clickCount = 0;
$(document).ready(function() {

	$('.S-text').click(function() {
		clickCount++;
		spans = $('.name-letter');

		$(spans).each(function() {
			currentElem = $(this);
			changeLetterSize();
		});

	});

	function changeLetterSize() {
		selectedFontSize = randomFontSize();

		$(currentElem).animate({
			'font-size' : selectedFontSize,
		}, 2000);

	}

	function randomFontSize() {
		fontSize = [ '12px', '14px', '18px', '22px', '36px', '42px', '54px' ];
		return fontSize[randomInt(fontSize.length)];
	}

	function randomInt(base) {
		return Math.floor(Math.random() * base);
	}

});