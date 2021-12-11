function op(URL, newtab = true) {
    if(newtab == true) {
        window.open(URL, '_blank');
    }
    else {
        window.open(URL, '_self');
    }
}

function twitch() {
    op("https://twitch.tv/evilbuddy_");
}

function youtube() {
    alert("soon !");
}

function discord() {
    op("https://discord.gg/9qXe59UajH");
}