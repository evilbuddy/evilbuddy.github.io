function tab(sender)
{
    let name = sender.parentNode.id.replace("-btns", "");

   offAll(name);

    // get and show selected tab
    let tab = document.getElementById(name + "-tab" + sender.id.replace(name + "-btn", ""));
    if(tab.classList.contains("hidden"))
    {
        tab.classList.remove("hidden");
    }

    // set selected button to active
    if(!sender.classList.contains("active"))
    {
        sender.classList.add("active");
    }
}

// function to disable everything with the specified name
function offAll(name)
{
    let btns = document.getElementById(name + "-btns").children;
    let tabs = document.getElementById(name + "-body").children;

    // hide all tabs
    for(let i = 0; i < tabs.length; i++)
    {
        let v = tabs[i];

        if(!v.classList.contains("hidden"))
        {
            v.classList.add("hidden");
        }
    }

    // set all buttons to inactive
    for(let i = 0; i < btns.length; i++)
    {
        let v = btns[i];

        if(v.classList.contains("active"))
        {
            v.classList.remove("active");
        }
    }
}