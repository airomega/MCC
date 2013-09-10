var count = 0;
var randomLetterDivs1 = new Array();
var checker="";

$(document).ready(function() {

	$('.C-text').click(function() {
		count = 0;
		letterDivs = $('.letter-div');
		
		letterDivsOriginal = letterDivs.slice(0);
		randomLetterDivs = shuffle(letterDivs);

		$(randomLetterDivs).each(function() {
			current = $(this);
			nextTop = getTop();
			current.animate({
				top : nextTop
			}, 500);
			count++;
		});

		setTimeout(function() {
			$(letterDivsOriginal).each(function() {
				current = $(this);
				randomDiv= randomLetterDivs.splice(0,1);
				var position = $(randomDiv).data('original-position');
				$(current).animate({
					left : position.left
				}, 1500);
			});

		}, 700);
		
		setTimeout(function() {

		$(letterDivsOriginal).each(function() {
			current = $(this);
			current.animate({
				top : '+35%'
			}, 500);
		});
		}, 1000);

		count = 0;

	});

	function getVert() {
		if (count % 2 == 0) {
			return 35 + (count * 2);
		} else {
			return 35 - (count * 2);
		}

	}

	function getTop() {
		return '+' + getVert() + '%';
	}


	function shuffle(array) {
		  var currentIndex = array.length
		    , temporaryValue
		    , randomIndex
		    ;

		  while (0 !== currentIndex) {

		    // Pick a remaining element...
		    randomIndex = Math.floor(Math.random() * currentIndex);
		    currentIndex -= 1;

		    // And swap it with the current element.
		    temporaryValue = array[currentIndex];
		    array[currentIndex] = array[randomIndex];
		    array[randomIndex] = temporaryValue;
		  }

		  return array;
		}

});