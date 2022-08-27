var tabs = [ ]
var buttons = [ ]
var bar = undefined;

var curtab = 1;

window.addEventListener("DOMContentLoaded", () => {
    tabs = [
        document.getElementById("About"),
        document.getElementById("Dev"),
        document.getElementById("Team"),
        document.getElementById("Media")
    ]

    buttons = [
        document.getElementById("About-btn"),
        document.getElementById("Dev-btn"),
        document.getElementById("Team-btn"),
        document.getElementById("Media-btn")
    ]

    bar = document.getElementById("navbar");
})

function changeTab(button, tab, nmb)
{
    for(var i = 0; i < tabs.length; i++)
    {
        var element = tabs[i];
        
        if(!element.classList.contains("hidden"))
        {
            element.classList.add("hidden");
        }
    }

    for(var i = 0; i < buttons.length; i++)
    {
        var element = buttons[i];
        
        if(element.classList.contains("tab-on"))
        {
            element.classList.remove("tab-on");
        }
    }

    tab.classList.remove("hidden");
    button.classList.add("tab-on");

    if(nmb > curtab)
    {
        bar.style.transitionDuration = (0.1 * (nmb - curtab)).toString() + "s";
    }
    else
    {
        bar.style.transitionDuration = (0.1 * (curtab - nmb)).toString() + "s";
    }

    curtab = nmb;

    bar.style.marginLeft = (25 * (nmb - 1)).toString() + "%";
}