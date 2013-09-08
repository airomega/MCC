$(document).ready(function() {

	$('.E2-text').click(function() {
		$('.letter-div').each(function() {
			$(this).animate({
                'left': '-150%',
            }, 10000 );
	    });

	});

	function randomTime(base) {
		return Math.floor(Math.random(15) * base * 1000);
	}

});