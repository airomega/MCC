$(document).ready(function() {

	window.onload = function() {
		letterDivs = $('.letter-div');

		$(letterDivs).each(function() {
			current = $(this);
			$(current).data('original-position', $(current).position());
		});
	};
});