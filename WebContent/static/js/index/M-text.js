var isRunning = false;
var refreshIntervalId;

$(document).ready(
		function() {

			$('.M-text').click(function() {

				letterDivs = $('.letter-div');

				if (isRunning) {
					clearInterval(refreshIntervalId);
					$(letterDivs).each(function() {
						current = $(this);
						$(current).css({
							'background-color' : '#FFFFFF'
						});
					});
					isRunning=false;
				} else {
					refreshIntervalId = setInterval(function() {
						$(letterDivs).each(function() {
							current = $(this);
							selectedColour = randomColour();
							$(current).css({
								'background-color' : selectedColour
							});
						});
					}, 200);
					isRunning=true;
				}
				
				setTimeout(function(){
					clearInterval(refreshIntervalId);
					$(letterDivs).each(function() {
						current = $(this);
						$(current).css({
							'background-color' : '#FFFFFF'
						});
					});
				},1200);
				
				
			});

			function randomColour() {
				colours = [ '#F80012', '#FF6C00', '#009E8E', '#1DD300',
						'#FC717B', '#A2000C', '#000000', '#FF9140', '#A64600',
						'#5DCFC3', '#00675C', '#52E93A', '#138900' ];
				return colours[randomInt(colours.length)];
			}

			function randomInt(base) {
				return Math.floor(Math.random() * colours.length);
			}
		});