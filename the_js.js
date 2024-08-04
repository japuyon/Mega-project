document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseButton = document.getElementById('playPauseButton');
    const playPauseIcon = document.getElementById('playPauseIcon');
    const forwardButton = document.getElementById('nextButton');
    const backwardButton = document.getElementById('prevButton');

    // Play/Pause functionality
    playPauseButton.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseIcon.classList.remove('fa-play');
            playPauseIcon.classList.add('fa-pause');
        } else {
            audioPlayer.pause();
            playPauseIcon.classList.remove('fa-pause');
            playPauseIcon.classList.add('fa-play');
        }
    });

    // Forward functionality
    forwardButton.addEventListener('click', () => {
        // Move forward 10 seconds
        audioPlayer.currentTime += 10;
        if (audioPlayer.currentTime >= audioPlayer.duration) {
            audioPlayer.currentTime = audioPlayer.duration;
        }
    });

    // Backward functionality
    backwardButton.addEventListener('click', () => {
        // Move backward 10 seconds
        audioPlayer.currentTime -= 10;
        if (audioPlayer.currentTime < 0) {
            audioPlayer.currentTime = 0;
        }
    });
});