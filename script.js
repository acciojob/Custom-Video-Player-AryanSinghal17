const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Play / Pause
function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

toggle.addEventListener('click', togglePlay);

// Update button icon
function updateButton() {
    toggle.textContent = video.paused ? '►' : '❚❚';
}

video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

// Volume + Playback Speed
function handleRangeUpdate() {
    video[this.name] = this.value;
}

ranges.forEach(range => {
    range.addEventListener('input', handleRangeUpdate);
});

// Skip buttons
function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

skipButtons.forEach(button => {
    button.addEventListener('click', skip);
});

// Progress Bar
function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.width = percent + "%";
}

video.addEventListener("timeupdate", handleProgress);
