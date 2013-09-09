$(document).ready(function() {

	$('.E2-text').click(function() {

		letterDivs = $('.letter-div');

		$(letterDivs).each(function() {
			current = $(this);
			$(current).data('position', $(current).position());
			randTop = getRandomTop();
			randLeft = getRandomLeft();
			$(current).animate({
				top : randTop,
				left : randLeft
			}, 1500);

		});

		setInterval(function() {
			$(letterDivs).each(function() {
				current = $(this);

				var position = $(current).data('position');
				$(current).animate({
					top : position.top,
					left : position.left
				}, 2500);
			});
		}, 7000);
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
		verticalDirection = Math.floor(Math.random() * 100) + 50;
		return '' + getPlusMinus() + verticalDirection + '%';
	}

	function getRandomLeft() {
		horizontalDirection = Math.floor(Math.random() * 100) + 50;
		return '' + getPlusMinus() + horizontalDirection + '%';
	}

	function randomInt(base) {
		return Math.floor(Math.random() * base);
	}

});