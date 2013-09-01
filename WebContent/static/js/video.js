var index = 1;


$(document).ready(function(){
playlist = [ 'clover.mp4', 'fishing.mp4', 'insect.mp4','ruins.mp4', 'underwater.mp4', 'wasp.mp4', 'wheat.mp4' ];
video = document.getElementById('backgroundVideo');
video.addEventListener('ended', rotate_video, false);
});

function rotate_video() {
	video.setAttribute('src', "/StevesPlace/static/video/" +playlist[index]);
	video.load();
	index++;
	if (index >= playlist.length) {
		index = 0;
	}
}