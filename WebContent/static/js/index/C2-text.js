var count = 0;
$(document).ready(function() {

	$('.C-text').click(function() {
		count = 0;

		letterDivs = $('.letter-div');
		var randomLetterDivs = letterDivs.sort(shuffle); 

		$(randomLetterDivs).each(function() {
			current = $(this);
			nextTop = getTop();
			current.animate({
				top : nextTop
			}, 500);
			count++;
		});
		count = 0;

		/*
		 * $(letterDivs).each(function() {
		 * 
		 * current = $(this); nextTimeout = getNextTimeout(); current.animate({
		 * top : '+35%' }, 500); count++; });
		 */
	});

	function getNextTimeout() {
		return (count * 500) + 50;
	}

	function getVert() {
		if (count % 2 == 0) {
			return 35 + (count * 1.4);
		} else {
			return 35 - (count * 1.4);
		}

	}

	function getTop() {
		return '+' + getVert() + '%';
	}

	function shuffle(a, b) {
		return Math.random() > 0.5 ? -1 : 1;
	}

});