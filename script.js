document.addEventListener("DOMContentLoaded", () => {
    const playButton = document.getElementById("playButton");
    const playPauseButton = document.getElementById("playPauseButton");
    let isPlaying = false;

    function togglePlay() {
        isPlaying = !isPlaying;
        playButton.textContent = isPlaying ? "Pause" : "Listen Now";
        playPauseButton.textContent = isPlaying ? "Pause" : "Play";
    }

    playButton.addEventListener("click", togglePlay);
    playPauseButton.addEventListener("click", togglePlay);
});
