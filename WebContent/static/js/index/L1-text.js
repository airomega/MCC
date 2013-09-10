var count1 = 1;
var count2 = 1;

$().ready(function() {

	$('.L1-text').click(function() {

		letterDivs = $('.letter-div');

		$(letterDivs).each(function() {
			current = $(this);
			setTimeout(function() {
				$(current).animate({
					top : '+35%',
					left : '750px'
				}, 1500);
				count1++;
			}, count1 * 50);
		});

		$(letterDivs).each(function() {
			setTimeout(function() {
				$(current).animate({
					top : '+5%',
					left : '+50%'
				}, 1500);
				count2++;
			}, (count2 * 500) + 600);
		});

	});
});