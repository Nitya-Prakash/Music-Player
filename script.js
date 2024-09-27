var allSongs = document.querySelector(".all-songs");
var poster = document.querySelector(".left");
var play = document.querySelector("#play");
var backwardPlay = document.querySelector("#backward");
var forwardPlay = document.querySelector("#forward");
var audio = new Audio();
var selectedSongs = 0;
var flag = 0;



var arr = [
    { songName: "Pehle Bhi Main", url: "./songs/Pehle Bhi Main.mp3", image: "./images/animal.jpg", duration: "4:10" },
    { songName: "Jale 2", url: "./songs/Jale 2.mp3", image: "./images/Jale.jpg", duration: "2:14" },
    { songName: "Arjan Vailly", url: "./songs/Arjan Vailly Ne.mp3", image: "./images/animal.jpg", duration: "3:02" },
    { songName: "Ram Siya Ram", url: "./songs/Ram Siya Ram.mp3", image: "./images/Ram.jpg", duration: "4:25" },
]




function songCards() {
    var clutter = "";

    arr.forEach(function (obj, index) {
        clutter += `<div class="song-card" id="${index}">
        <div class="part1">
            <img src="${obj.image}" alt="">
            <h2>${obj.songName}</h2>
        </div>
        <h6>${obj.duration}</h6>
    </div>`
    })

    allSongs.innerHTML = clutter
    audio.src = arr[selectedSongs].url
    poster.style.backgroundImage = `url(${arr[selectedSongs].image})`
    poster.style.backgroundPosition = "center"
    poster.style.backgroundSize = "cover"
}


function playSong() {
    allSongs.addEventListener("click", function (dets) {
        selectedSongs = dets.target.id
        play.innerHTML = `<i class="ri-pause-line"></i>`
        flag = 1
        songCards();
        audio.play()
    })
}


function playPause() {

    play.addEventListener("click", function () {
        if (flag == 0) {
            play.innerHTML = `<i class="ri-pause-line"></i>`
            songCards()
            audio.play()
            flag = 1
        } else {
            play.innerHTML = `<i class="ri-play-fill"></i>`
            songCards()
            audio.pause()
            flag = 0
        }
    })
}


function nextandPreviousSong() {
    forwardPlay.addEventListener("click", function () {
        if (selectedSongs < arr.length - 1) {
            selectedSongs++
            songCards()
            audio.play()
        } else {
            forwardPlay.style.opacity = .4
        }
    })
    backwardPlay.addEventListener("click", function () {
        if (selectedSongs > 0) {
            selectedSongs--
            songCards()
            audio.play()
        } else {
            backwardPlay.style.opacity = .4
        }
    })
}



songCards();
playSong();
playPause();
nextandPreviousSong();