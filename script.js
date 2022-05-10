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
    alert("soon !\n(someday)\n(maybe)");
}

function discord() {
    op("https://discord.gg/9qXe59UajH");
}

function sites() {
    op("sites.html", false);
}

function main() {
    op("index.html", false);
}