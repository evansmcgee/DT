
var vid, seekslider, curtimetext, durtimetext, mutebtn, frameforward, reverse;

function initializePlayer(){
	// SET OBJECT REFERENCES
	vid = document.getElementById("testvid");
	seekslider = document.getElementById("seekslider");
	pbtn = document.getElementById("playpausebtn");
	mutebtn = document.getElementById("mutebtn");
	stepbackbtn = document.getElementById("stepbackbtn");
	stepforwardbtn = document.getElementById("stepforwardbtn");
	curtimetext = document.getElementById("curtimetext");
	durtimetext = document.getElementById("durtimetext");
	//ADD EVENT LISTENERS
	vid.addEventListener("timeupdate",seektimeupdate,false);
	vid.addEventListener("click",vidplaypause,false);
	//seekslider.addEventListener("change",vidSeek,false);
	playpausebtn.addEventListener("click",vidplaypause,false);
	mutebtn.addEventListener("click",vidmute,false);
	stepbackbtn.addEventListener("click",vidstepB,false);
	stepforwardbtn.addEventListener("click",vidstepF,false);
	//$('input[type="range"]').addEventListener("change",updateslidercolor,false);
}

window.onload = initializePlayer;

// Play Video
function playVideo(videoIn, playBtnIn){
		vid.play();
		vid.playbackRate=1;
		playBtnIn.className = "glyphicon glyphicon-pause";
}

// Pause Video
function pauseVideo(videoIn, playBtnIn){
	videoIn.pause();
	playBtnIn.className = "glyphicon glyphicon-play	";
}

// BUTTON PRESSED - playpausebtn
function vidplaypause(){
	if(vid.paused){
		playVideo(vid, pbtn);
	}
	else{
		pauseVideo(vid, pbtn);
	}
}

// BUTTON PRESSED - mutebtn
function vidmute(){
	if(vid.muted){
		vid.muted = false;
		mutebtn.className = "glyphicon glyphicon-volume-up";

	}else{
		vid.muted = true;
		mutebtn.className = "glyphicon glyphicon-volume-off";

	}
}

// BUTTON PRESSED - stepbackbtn
function vidstepB(){
	vid.currentTime = vid.currentTime -(1/30);
	pauseVideo(vid, pbtn);
}

// BUTTON PRESSED - stepforwardbtn
function vidstepF(){
	vid.currentTime = vid.currentTime +(1/30);
	pauseVideo(vid, pbtn);
}

// VALUE CHANGE - seekslider
function vidSeek(){
	var seekto = vid.duration * (seekslider.value / seekslider.max);
	vid.currentTime = seekto;
	playVideo(vid, pbtn);
}

// TIME UPDATE - vid
function seektimeupdate(){
	var nt = vid.currentTime / vid.duration;
	seekslider.value = nt*seekslider.max;

	var curmins = Math.floor(vid.currentTime / 60);
	var cursecs = Math.floor(vid.currentTime - curmins * 60);
	var durmins = Math.floor(vid.duration / 60);
	var dursecs = Math.round(vid.duration - durmins * 60);
	if(cursecs < 10){
		cursecs = "0"+cursecs;
	}
	if(dursecs < 10){
		dursecs = "0"+dursecs;
	}
	curtimetext.innerHTML = curmins+":"+cursecs;
	durtimetext.innerHTML = durmins+":"+dursecs;
	seekslider.title = curmins+":"+cursecs;

	nt = seekslider.value / seekslider.max;

	seekslider.style.backgroundImage = '-webkit-gradient(linear, left top, right top, '
																		+ 'color-stop(' + nt + ', #00ADEF), '
																		+ 'color-stop(' + nt + ', #003366)'
																		+ ')';

	//check for end of video
	if(vid.currentTime==vid.duration){
		playpausebtn.className = "glyphicon glyphicon-repeat";
	}
}



/*

function updateslidercolor(){
	var val = vid.currentTime / vid.duration;
	$(this).css('background-image',
							'-webkit-gradient(linear, left top, right top, '
							+ 'color-stop(' + val + ', #94A14E), '
							+ 'color-stop(' + val + ', #C5C5C5)'
							+ ')'
							);
}

*/
