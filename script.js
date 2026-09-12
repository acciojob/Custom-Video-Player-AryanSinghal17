const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider'); 

//volume
ranges.forEach((range) =>{
  range.addEventListener("input",function(){

     if(range.name === "volume") {
            video.volume = range.value;
      }
  });
});
// speed
ranges.forEach((range) =>{
  range.addEventListener("input" ,function(){
    if(range.name === "playbackRate"){
      video.playbackRate = range.value;
    }
  });
});
// for button play and pause
let togglebtn = true;
toggle.addEventListener("click", function() {

    if(togglebtn){
      video.play();
      togglebtn = false;
      toggle.innerText = "❚❚";
    }else{
      video.pause();
      togglebtn = true;
      toggle.innerText = "►";
    }
});

// time 
video.addEventListener("timeupdate", function() {

    const percent = (video.currentTime / video.duration) * 100;

    progressBar.style.width = `${percent}%`;

});

// skip button

skipButtons.forEach((button) => {
  button.addEventListener("click",function(){
    video.currentTime += Number(button.dataset.skip);
  });
});
