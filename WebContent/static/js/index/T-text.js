$(document).ready(function() {
	last='#000000';
	next='#FFFFFF';	
		
	$('.T-text').click(function() {

		divs = $('div');
		
		setTimeout(function() {
			$(divs).each(function() {
				currentElem = $(this);
				$(currentElem).css({
					'background-color' : next
				});
			});
		}, 550);

		setTimeout(function() {
			$(divs).each(function() {
				currentElem = $(this);
				$(currentElem).css({
					'background-color' : last
				});
			});
		}, 700);

		setTimeout(function() {
			$(divs).each(function() {
				currentElem = $(this);
				$(currentElem).css({
					'background-color' : next
				});
			});
		}, 1000);

		setTimeout(function() {
			$(divs).each(function() {
				currentElem = $(this);
				$(currentElem).css({
					'background-color' : last
				});
			});
		}, 1100);

		setTimeout(function() {
			$(divs).each(function() {
				currentElem = $(this);
				$(currentElem).css({
					'background-color' : next
				});
			});
		}, 2000);
		
		setTimeout(function() {
			$('.name-letter').each(function() {
				currentElem = $(this);
				$(currentElem).css({
					'font-size' : '22px',
					'font-family' : 'sans-serif',
					'opacity' : '0',
					'color' : last
				});
			});
		}, 2001);

		if (next === '#FFFFFF') {
			last = '#FFFFFF';
			next = '#000000';
		} else {
			last = '#000000';
			next = '#FFFFFF';
		}
		
		setTimeout(function() {
			$('.name-letter').each(function() {
				currentElem = $(this);
				$(currentElem).animate({
					opacity : 1,
				}, 5000);
			});
		}, 6000);
		
		

	});

});