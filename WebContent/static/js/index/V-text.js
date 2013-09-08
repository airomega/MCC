$(document).ready(
		function() {

			$('.V-text').click(function() {

				spans = $('.name-letter');
				selectedColour = randomColour();

				$(spans).each(function() {
					currentElem = $(this);
					changeColour();
				});

			});

			function changeColour() {
				$(currentElem).css({
					'color' : selectedColour
				});

			}
		

			function randomColour() {
				colours = [ '#F80012', '#FF6C00', '#009E8E', '#1DD300',
						'#FC717B', '#A2000C','#000000', '#FF9140', '#A64600', '#5DCFC3',
						'#00675C', '#52E93A', '#138900' ];
				return colours[randomInt(colours.length)];
			}

			function randomInt(base) {
				var random = Math.floor(Math.random() * base);
				return random;
			}

		});