$(document).ready(
		
		function() {
			var timers = new Array();

			$('.E1-text').click(function() {
				for (var i = 0; i < timers.length; i++)
				{
				    clearTimeout(timers[i]);
				}
				$('#target').text('');
				
				factoid = randomFactoid();

				$('#target').teletype({
					  text: [factoid]
					});

					$('#cursor').teletype({
					  text: ['_', ' '],
					  delay: 0,
					  pause: 500
					});

				
			});

			function randomFactoid() {
				factoid = [ 'Steve once got peed on by a koala bear. He does not have syphilis.', 
				            'Steve is married to Carrie. She is very pretty .', 
				            'Steve was sick in front of Cat Deeley.', 
				            'Steve has a dog called Penrose. He picks up her poo in a bag.',
				            'Steve watches Judge Judy at least once a week.',
				            'Steve thinks he is better at poker than he actually is.',
				            'Steve can run up to 8km.',
				            'Steve thinks about time a lot. Steve also likes Dr. Who.' ];
				return factoid[randomInt(factoid.length)];
			}

			function randomInt(base) {
				var random = Math.floor(Math.random() * base);
				return random;
			}
			
				  function typeString($target, str, cursor, delay, cb) {
				    $target.html(function (_, html) {
				      return html + str[cursor];
				    });

				    if (cursor < str.length - 1) {
				    	timers.push(setTimeout(function () {
				        typeString($target, str, cursor + 1, delay, cb);
				      }, delay));
				    }
				    else {
				      cb();
				    }
				  }


				  function deleteString($target, delay, cb) {
				    var length;

				    $target.html(function (_, html) {
				      length = html.length;
				      return html.substr(0, length - 1);
				    });

				    if (length > 1) {
				    	timers.push(setTimeout(function () {
				        deleteString($target, delay, cb);
				      }, delay));
				    }
				    else {
				      cb();
				    }
				  }

				  $.fn.extend({
				    teletype: function (opts) {
				      var settings = $.extend({}, $.teletype.defaults, opts);

				      return $(this).each(function () {
				        (function loop($tar, idx) {
				          // type
				          typeString($tar, settings.text[idx], 0, settings.delay, function () {
				            // delete
				        	  timers.push(setTimeout(function () {
				              deleteString($tar, settings.delay, function () {
				              });
				            }, settings.pause));
				          });

				        }($(this), 0));
				      });
				    }
				  });

				  $.extend({
				    teletype: {
				      defaults: {
				        delay: 100,
				        pause: 5000,
				        text: []
				      }
				    }
				  });
				}

		);