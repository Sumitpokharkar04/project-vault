console.log("lets write some fucking javascript");

function formatTime(seconds) {
    if (isNaN(seconds)) return "00:00";

    let minutes = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);

    // add leading zero if needed
    if (secs < 10) secs = "0" + secs;
    if (minutes < 10) minutes = "0" + minutes;

    return `${minutes}:${secs}`;
}


async function getSongs() {
    //Note - always remember to put await infront of fetch and before parsing.
    let a = await fetch("http://127.0.0.1:3000/song")
    let response = await a.text();
    // console.log(response);
    let div = document.createElement("div")
    div.innerHTML = response;

    let as = div.getElementsByTagName('a')
    //    console.log(as);


    let songs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.replaceAll("%5C", " ").split("song").pop());
        }

    }
    return songs;


}
async function main() {
    //Get the list of all the songs
    let songs = await getSongs()
    console.log(songs);

    let SongUL = document.querySelector(".songList").getElementsByTagName("ul")[0]
    for (const song of songs) {
        SongUL.innerHTML = SongUL.innerHTML + `<li>
     <img class="invert" src="img/music.svg" alt="">
                        <div class="info">
                            <div> ${song.replaceAll("%20", " ")}</div>
                        </div>
                        <img class="invert" src="img/play.svg" alt="">
   </li>`
    }

    // var audio = new Audio(songs[0]);
    // audio.play();
    //Add a event listener
    /* Mistake i made => i used get element by id for a class i shall always use query  selector and
    also we dont use (.) in getElementById we just name the id in parenthesis ("id") */

    let CurrentSong = new Audio()
    const playMusic = (track, paused = false) => {
        // let audio = new Audio("/song/" + track)
        console.log(track);
        CurrentSong.src = "/song/" + track
        if (!paused) {
            CurrentSong.play()
            play.src = "img/pause.svg"
        }

        document.querySelector(".songinfo").innerHTML = track
        document.querySelector(".songtime").innerHTML = "00.00/00.00"
    }

    //Add event listener to every song so after we click it plays
    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            // console.log(e.querySelector(".info").firstElementChild.innerHTML);
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())

        })
    })

    //lets do something for default song
    if (document.querySelector(".songinfo").innerHTML.trim() === "") {
        let temp = songs[0].replaceAll("%20", " ").trim()
        console.log(temp);
        document.querySelector(".songinfo").innerHTML = temp;
        playMusic(temp, true)


    }
    else {
        console.log("not");

    }


    //Attach event listener to play and pause button

    play.addEventListener("click", () => {
        if (CurrentSong.paused) {
            CurrentSong.play()
            play.src = "img/pause.svg"
        }
        else {
            CurrentSong.pause()
            play.src = "img/play.svg"
        }
    })

    //listen for time update event
    CurrentSong.addEventListener("timeupdate", () => {
        console.log(CurrentSong.currentTime, CurrentSong.duration);
        document.querySelector(".songtime").innerHTML = `${formatTime(CurrentSong.currentTime)}:${formatTime(CurrentSong.duration)}`

    })

}
main()