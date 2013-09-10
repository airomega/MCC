
var index = 1;

$(document).ready(
		function() {
			const VIDEO_ROTATION_TIME = 20000;
			const FADER_IN_SPEED = 1000;
			const FADER_OUT_SPEED = 1200;
			const LOAD_VIDEO_TIMEOUT = 1200;
			const VIDEO_PATH = "/StevesPlace/static/video/";


			playlist = [ 'clover.mp4', 'fishing.mp4', 'insect.mp4',
					'ruins.mp4', 'wasp.mp4', 'wheat.mp4' ];
			video = document.getElementById('backgroundVideo');
			setInterval(rotate_video, VIDEO_ROTATION_TIME);

			function rotate_video() {
				$('#fader').animate({opacity : 1}, FADER_IN_SPEED);
				setTimeout(loadVideo, LOAD_VIDEO_TIMEOUT);
				$('#fader').animate({opacity : 0}, FADER_OUT_SPEED);
			}

			function loadVideo() {
				video.setAttribute('src', VIDEO_PATH + playlist[index]);
				video.load();
				index++;
				if (index >= playlist.length) {
					index = 0;
				}
			}
			;

		});
