var prefix = "tab-";
var prebtn = "btn";
var prediv = "div"

var btns = [ ];
var divs = [ ];

window.addEventListener("DOMContentLoaded", () => {
    var btnpre = prefix + prebtn;
    var divpre = prefix + prediv;
    
    for (var i = 1; i < document.getElementsByClassName(btnpre).length + 1; i++) {
        btns[btns.length] = document.getElementById(btnpre + i.toString());
        divs[divs.length] = document.getElementById(divpre + i.toString());
    }
});

function tab(id) {
    id = id - 1;

    for (var i = 0; i < btns.length; i++) {
        if(btns[i].classList.contains("active")) {
            btns[i].classList.remove("active");
        }

        if(!divs[i].classList.contains("hidden")) {
            divs[i].classList.add("hidden");
        }
    }

    if(!btns[id].classList.contains("active")) {
        btns[id].classList.add("active");
    }

    if(divs[id].classList.contains("hidden")) {
        divs[id].classList.remove("hidden");
    }
}