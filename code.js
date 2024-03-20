class code
{
    name = undefined;
    func = undefined;

    constructor(name, func)
    {
        this.name = name;
        this.func = func;
    }
}

codes = [
    new code("benadryl", () => {
        if(document.getElementById("benadryl"))
        {
            document.getElementById("benadryl").remove();
            return;
        }

        let e = document.createElement("img");
        e.id = "benadryl";
        e.src = "https://static.zerochan.net/Ame-chan.full.3924312.jpg";
        e.style.position = "absolute";
        e.style.display = "block";
        e.style.left = "90vw";
        e.style.top = "calc(100vh - 14.3266475645vw)";
        e.style.width = "10vw";
        e.style.height = "14.3266475645vw";
        document.body.appendChild(e);
    }),
    new code("dylsem", () => {
        let colors = [];

        for(let i = 0; i < 50; i++) {
            let color = document.createElement("div");
            document.body.append(color);
            color.style.position = "absolute";
            color.style.width = "5vh";
            color.style.height = "5vh";
                
            colors[i] = color;
        }

        setInterval(function(colors) {
            for(let i = 0; i < colors.length; i++) {
                let color = colors[i];
                color.style.background = "rgba(" + Math.random() * 255 + ", " + Math.random() * 255 + ", " + Math.random() * 255 + ", 255)";
                color.style.left = Math.random() * 100 + "%";
                color.style.top = Math.random() * 100 + "%";
            }
        }, 64, colors);
    }),
    new code("overdose", () => {
        if(document.body.style.backgroundImage != "url(\"https://1sn2023g4.alwaysdata.net/images/Needy%20Streamer%20Overload.png\")")
        {
            document.body.style.backgroundImage = "url(\"https://1sn2023g4.alwaysdata.net/images/Needy%20Streamer%20Overload.png\")";
        }
        else
        {
            document.body.style.backgroundImage = null;
        }
    })
];

let typing = "";

document.addEventListener("keydown", function(input)
{
    typing += input.key.toLowerCase();

    let valid = false

    codes.forEach(code => {
        if(code.name == typing)
        {
            code.func();
            typing = "";
        }

        if(code.name.toLowerCase().substring(0, typing.length).trim() == typing.trim())
        {
            valid = true;
        }
    });

    if(!valid)
    {
        typing = "";
    }
});