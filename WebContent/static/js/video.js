var index = 1;


$(document).ready(function(){
playlist = [ 'clover.mp4', 'fishing.mp4', 'insect.mp4','ruins.mp4', 'wasp.mp4', 'wheat.mp4' ];
video = document.getElementById('backgroundVideo');
setInterval(rotate_video, 10000)
});

function rotate_video() {
	$('#fader').animate({opacity: 1},800);
	setTimeout(loadVideo,800);
	$('#fader').animate({opacity: 0},1200);
}

function loadVideo(){
	video.setAttribute('src', "/StevesPlace/static/video/" +playlist[index]);
	video.load();
	index++;
	if (index >= playlist.length) {
		index = 0;
	}
}