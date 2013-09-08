$(document).ready(
		function() {

			$('.S-text').click(function() {

				spans = $('.name-letter');

				$(spans).each(function() {
					currentElem = $(this);
					changeLetterStyle();
				});

				setTimeout(function() {
					$(spans).each(function() {
						currentElem = $(this);
						changeLetterStyle();
					});
				}, 8000);

				setTimeout(function() {
					$(spans).each(function() {
						currentElem = $(this);
						changeLetterStyle();
					});
				}, 8000);
				
				setTimeout(function() {
					$(spans).each(function() {
						currentElem = $(this);
						setLetterNormal();
					});
				}, 20000);
				
			});

			function changeLetterStyle() {
				selectedColour = randomColour();
				selectedFontSize = randomFontSize();
				selectedFontType = randomFontType();
				$(currentElem).css({
					'font-family' : selectedFontType
				});

				$(currentElem).animate({
					'font-size' : selectedFontSize,
				}, Math.floor(Math.random() * (5)) * 1000);
				$(currentElem).css({
					'color' : selectedColour
				});

			}

			function setLetterNormal() {
				selectedColour = '#000000';
				selectedFontSize = '22px';
				selectedFontType = 'sans-serif';
				$(currentElem).css({
					'font-family' : selectedFontType
				});

				$(currentElem).animate({
					'font-size' : selectedFontSize,
				}, Math.floor(Math.random() * (5)) * 1000);
				$(currentElem).css({
					'color' : selectedColour
				});
			}

			$('T-text').click();
			$('E1-text').click();
			$('V-text').click();
			$('E-text').click();
			$('M-text').click();
			$('c-text').click();
			$('C-text').click();
			$('U-text').click();
			$('L1-text').click();
			$('L2-text').click();
			$('O-text').click();
			$('U-text').click();
			$('G-text').click();
			$('H-text').click();

			function randomColour() {
				colours = [ '#F80012', '#FF6C00', '#009E8E', '#1DD300',
						'#FC717B', '#A2000C', '#FF9140', '#A64600', '#5DCFC3',
						'#00675C', '#52E93A', '#138900' ];
				return colours[randomInt(colours.length)];
			}

			function randomFontSize() {
				fontSize = [ '12px', '14px', '18px', '22px', '36px', '42px',
						'54px' ];
				return fontSize[randomInt(fontSize.length)];
			}

			function randomFontType() {
				fontType = [ 'Times New Roman', 'Georgia', 'Serif', 'Calibri',
						'cursive', 'monospace', 'sans-serif', 'Verdana' ];
				return fontType[randomInt(fontType.length)];
			}

			function randomInt(base) {
				var random = Math.floor(Math.random() * base);
				return random;
			}

			function randsort(arrayIn) {
				var o = new Array();
				for ( var i = 0; i < arrayIn.length; i++) {
					var n = Math.floor(Math.random() * arrayIn);
					if (jQuery.inArray(n, o) > 0)
						--i;
					else
						o.push(n);
				}
				return o;
			}

		});