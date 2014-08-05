$(document).ready(
		function() {

			$('.S-text').click(
					function() {

						$(".centre-vid").append(
								"<video class='backgroundVideo' width='850px' src="
										+ randomVideo()
										+ "></video>").hide();
						
						
						
						$('.backgroundVideo').get(0).play();
						
						setTimeout(function() {
							$('.centre-vid').fadeIn(2000);
						}, 2000);
						
						setTimeout(function() {
							$('.centre-vid').fadeOut(2000);
						}, 9000);

						setTimeout(function() {
							$('.backgroundVideo').remove();
						}, 11100);

					});

			function randomVideo() {
				vids = [ 'clover.mp4', 'fishing.mp4', 'insect.mp4',
						'ruins.mp4', 'wasp.mp4', 'wheat.mp4' ];
				return '/StevesPlace/static/video/'
						+ vids[randomInt(vids.length)];
			}

			function randomInt(base) {
				var random = Math.floor(Math.random() * base);
				return random;
			}

		});