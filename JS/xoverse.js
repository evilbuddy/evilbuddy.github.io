function op(URL, newtab = true) {
    if(newtab == true) {
        window.open(URL, '_blank');
    }
    else {
        window.open(URL, '_self');
    }
}