class song
{
    title = undefined;
    artist = undefined;
    file = undefined;
    cover = undefined
    
    constructor(title, artist, file, cover)
    {
        this.title = title;
        this.artist = artist;
        this.file = file;
        this.cover = cover;
    }
}

class player
{
    audio = undefined;
    title = undefined;
    artist = undefined;
    cover = undefined;
    bar = undefined;
    song = undefined

    constructor()
    {
        let player = document.createElement("audio");
        document.body.appendChild(player);
        
        let div = document.createElement("div");
        div.style.position = "absolute";
        div.style.left = "0px";
        div.style.top = "calc(100vh - 15vh)";
        div.style.width = "20vw";
        div.style.height = "15vh";

        let cover = document.createElement("img");
        cover.style.float = "left";
        cover.style.height = "15vh";
        cover.style.width = "15vh";
        cover.src = "https://avatars.steamstatic.com/b5bd56c1aa4644a474a2e4972be27ef9e82e517e_full.jpg";

        let title = document.createElement("h1");
        title.style.margin = "0px";
        title.style.marginLeft = "15vh";
        title.style.width = "calc(100% - 15vh)";
        title.style.height = "5vh";
        title.style.overflow = "hidden";
        title.style.whiteSpace = "nowrap";
        title.style.textOverflow = "ellipsis";
        title.innerText = "title";
        title.title = "title";

        let artist = document.createElement("h2");
        artist.style.margin = "0px";
        artist.style.marginLeft = "15vh";
        artist.style.width = "calc(100% - 15vh)";
        artist.style.height = "3.5vh";
        artist.style.overflow = "hidden";
        artist.style.whiteSpace = "nowrap";
        artist.style.textOverflow = "ellipsis";
        artist.innerText = "artist";
        artist.title = "artist";

        let play = document.createElement("div");
        play.style.position = "absolute";
        play.style.marginLeft = "15vh";
        play.style.height = "5vh";
        play.style.width = "5vh";
        play.style.background = "url('images/play.png')";
        play.style.backgroundSize = "cover";
        play.style.cursor = "pointer";
        play.onclick = () => {
            this.toggle();

            if(this.audio.paused)
            {
                play.style.background = "url('images/play.png')";
                play.style.backgroundSize = "cover";
            }
            else
            {
                play.style.background = "url('images/pause.png')";
                play.style.backgroundSize = "cover";
            }
        };

        let bar = document.createElement("div");
        bar.style.marginLeft = "20vh";
        bar.style.width = "calc(100% - 20vh)";
        bar.style.height = "20%";
        
        let barBG = document.createElement("div");
        barBG.className = "back";
        barBG.style.position = "absolute";
        barBG.style.width = "calc(20vw - 20vh)";
        barBG.style.height = "5%";
        barBG.style.left = "20vh";
        barBG.style.top = "calc(calc(100% - 15vh) + 11.5vh)";
        barBG.style.background = "linear-gradient(to bottom, #808080, #404040)";
        
        let barFG = document.createElement("div");
        barFG.className = "fore";
        barFG.style.width = "50%";
        barFG.style.height = "100%";
        barFG.style.background = "linear-gradient(to bottom, #537ab3, #134b5f)";

        let time = document.createElement("p");
        time.className = "time";
        time.style.float = "left";
        time.style.margin = "0px";
        time.innerText = "00:00";

        let duration = document.createElement("p");
        duration.className = "duration";
        duration.style.float = "right";
        duration.style.margin = "0px";
        duration.innerText = "00:00";
        
        document.body.appendChild(div)
        div.appendChild(cover);
        div.appendChild(title);
        div.appendChild(artist);
        div.appendChild(play);

        bar.appendChild(barBG);
        barBG.appendChild(barFG);
        bar.appendChild(time);
        bar.appendChild(duration);

        div.appendChild(bar);

        this.audio = player;
        this.title = title;
        this.artist = artist;
        this.cover = cover;
        this.bar = bar;
    }

    updateTime()
    {

        let duration = this.audio.duration;
        let minutes = Math.floor(duration / 60);
        let seconds = Math.floor(duration - minutes * 60);

        this.bar.getElementsByClassName("duration")[0].innerText = minutes + ":" + seconds;
    }

    toggle()
    {
        if(this.audio.paused)
        {
            this.audio.play();
        }
        else
        {
            this.audio.pause();
        }

        this.updateTime();
    }

    play(song)
    {
        this.song = song;
        this.audio.src = song.file;
        this.audio.play();

        this.title.innerText = song.title;
        this.title.title = song.title;
        this.artist.innerText = song.artist;
        this.artist.title = song.artist;
        this.cover.src = song.cover;

        this.updateTime();
    }
}

const songs = [
    new song("MARETU - Magical Doctor", "MARETU",
        "songs/MARETU - Magical Doctor.mp3",
        "songs/MARETU - Magical Doctor.jpg"),
    new song("right here", "hkmori [forever]",
        "songs/hkmori [forever] - right here.mp3",
        "songs/hkmori - forever.jpg"),
    new song("i wish i could stay awake", "hkmori [forever]",
        "songs/hkmori [forever] - i wish i could stay awake.mp3",
        "songs/hkmori - forever.jpg"),
    new song("I dont know how to be me", "hkmori [forever]",
        "songs/hkmori [forever] - I dont know how to be me.mp3",
        "songs/hkmori - forever.jpg"),
    new song("deeply delusional", "hkmori [forever]",
        "songs/hkmori [forever] - deeply delusional.mp3",
        "songs/hkmori - forever.jpg"),
    new song("am i overreacting", "hkmori [panic attack in bed]",
        "songs/hkmori [panic attack in bed] - am i overreacting.mp3",
        "songs/hkmori - panic attack in bed.jpg"),
    new song("i just want to be your friend...", "hkmori [panic attack in bed]",
        "songs/hkmori [panic attack in bed] -  just want to be your friend....mp3",
        "songs/hkmori - panic attack in bed.jpg"),
    new song("we were perfect", "hkmori [panic attack in bed]",
        "songs/hkmori [panic attack in bed] - we were perfect.mp3",
        "songs/hkmori - panic attack in bed.jpg"),
    new song("no self to kill", "hkmori [panic attack in bed]",
        "songs/hkmori [panic attack in bed] - no self to kill.mp3",
        "songs/hkmori - panic attack in bed.jpg"),
    new song("panic attack in bed", "hkmori [panic attack in bed]",
        "songs/hkmori [panic attack in bed] - panic attack in bed.mp3",
        "songs/hkmori - panic attack in bed.jpg"),
    new song("Failure Girl", "Kairiki Bear [IMITATION GALLERY]",
        "songs/Kairiki Bear [IMITATION GALLERY] - Failure Girl.mp3",
        "songs/Kairiki Bear - IMITATION GALLERY.jpg"),
    new song("It's Another Maze There", "KikuoHana [Second Act]",
        "songs/KikuoHana [Second Act] - It's Another Maze There.mp3",
        "songs/KikuoHana - Second Act.jpg"),
    new song("O Light", "KikuoHana [First Act]",
        "songs/KikuoHana [First Act] - O Light.mp3",
        "songs/KikuoHana - First Act.jpg"),
    new song("The Girls Who Sells Misfortune", "KikuoHana [Second Act]",
        "songs/KikuoHana [Second Act] - The Girls Who Sells Misfortune.mp3",
        "songs/KikuoHana - Second Act.jpg")
];
const songPlayer = new player();
let curSong = Math.floor(Math.random() * songs.length);

if(curSong >= songs.length)
{
    curSong = songs.length;
}
if(curSong < 0)
{
    curSong = 0;
}

songPlayer.play(songs[curSong]);
songPlayer.audio.pause();
songPlayer.audio.addEventListener("ended", () => {
    curSong += 1;
    
    if(curSong >= songs.length)
    {
        curSong = 0;
    }

    songPlayer.play(songs[curSong]);
});

setInterval(() => {
    let time = songPlayer.audio.currentTime;
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time - minutes * 60);

    let duration = songPlayer.audio.duration;
    let percent = (time / duration) * 100;

    songPlayer.bar.getElementsByClassName("time")[0].innerText = innerText = minutes + ":" + seconds;
    songPlayer.bar.getElementsByClassName("back")[0].getElementsByClassName("fore")[0].style.width = percent + "%";
})