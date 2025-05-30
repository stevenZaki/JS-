// Get Elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


// Build functions
function togglePlay(){
    const method = video.paused ? 'play' : 'pause';
    video[method]();

    // if(video.paused){
    //     video.play();
    // }else{
    //     video.pause();
    // }
}

function updateBotton(){
    const icon = this.paused ? '►' : '||';
    toggle.textContent= icon;
}

function skip(){

    video.currentTime += parseFloat(this.dataset.skip);
}


function handleRangeUpdate() {
    video[this.name] = this.value;
}


function handleProgress(){
    const percent = (video.currentTime / video.duration ) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(x){
    const scrubTime = (x.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}


// Add event listener 
video.addEventListener('click', togglePlay);

video.addEventListener('play', updateBotton);
video.addEventListener('pause', updateBotton);
video.addEventListener('timeupdate', handleProgress);


skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));


let mousedown = false;
progress.addEventListener('click', scrub);
// progress.addEventListener('mousemove', (x) => mousedown && scrub(x));
// progress.addEventListener('mousedown', () => mousedown = true);
// progress.addEventListener('mouseup', () => mousedown = false);