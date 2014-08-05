$(document).ready(function() {

	$('.E2-text').click(function() {

		letterDivs = $('.letter-div');

		$(letterDivs).each(function() {
			current = $(this);
			randTop = getRandomTop();
			randLeft = getRandomLeft();
			$(current).animate({
				top : randTop,
				left : randLeft
			}, 1500);
			$(current).data('latest-position', $(current).position());
		});

		setTimeout(function() {
			$(letterDivs).each(function() {
				current = $(this);

				var position = $(current).data('latest-position');
				$(current).animate({
					top : position.top,
					left : position.left
				}, 2500);
			});
		}, 5000);
	});

	function getPlusMinus() {
		decider = Math.floor(Math.random() * 100) + 1;
		if (decider <= 50) {
			return '+';
		} else {
			return '-';
		}

	}

	function getRandomTop() {
		verticalDirection = Math.floor(Math.random() * 10) + 75;
		return '' + getPlusMinus() + verticalDirection + '%';
	}

	function getRandomLeft() {
		horizontalDirection = Math.floor(Math.random() * 10) + 75;
		return '' + getPlusMinus() + horizontalDirection + '%';
	}

});