const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");

// Song List
const songs = [
    { title: "Can't Help Falling in Love", artist: " Elvis Presley ", src: "https://github.com/NOVABROWN/Basic-Music-Player1/blob/main/img/Elvis%20Presley%20-%20Can't%20Help%20Falling%20In%20Love%20(Official%20Audio).mp3", cover: "https://github.com/NOVABROWN/Basic-Music-Player1/blob/main/img/artworks-000489245394-tptkbg-t1080x1080.jpg" },
    { title: "this is what slow dancing feels like", artist: "JVKE", src: "https://github.com/NOVABROWN/Basic-Music-Player1/blob/main/img/JVKE%20-%20this%20is%20what%20falling%20in%20love%20feels%20like%20(Lyrics).mp3", cover: "https://github.com/NOVABROWN/Basic-Music-Player1/blob/main/img/94abf4a403e06185971f8981d3a54b53.1000x1000x1.png" }
];

let songIndex = 0;

// Load Song
function loadSong(song) {
    title.innerText = song.title;
    artist.innerText = song.artist;
    audio.src = song.src;
    cover.src = song.cover;
}

// Play & Pause
function togglePlay() {
    if (audio.paused) {
        audio.play();
        playBtn.innerHTML = '<img src="pause.png">';
    } else {
        audio.pause();
        playBtn.innerHTML = '<img src="play.png">';
    }
}

// Next & Previous
function nextSong() {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    audio.play();
}

function prevSong() {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    audio.play();
}

// Progress Bar
audio.addEventListener("timeupdate", () => {
    progress.value = (audio.currentTime / audio.duration) * 100;
});

progress.addEventListener("input", () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});

// Volume Control
volume.addEventListener("input", () => {
    audio.volume = volume.value;
});

// Event Listeners
playBtn.addEventListener("click", togglePlay);
nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);

// Load First Song
loadSong(songs[songIndex]);
