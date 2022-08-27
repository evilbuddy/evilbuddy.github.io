var frames = [
    "[|         ]",
    "[||        ]",
    "[|||       ]",
    "[||||      ]",
    "[|||||     ]",
    "[||||||    ]",
    "[|||||||   ]",
    "[||||||||  ]",
    "[||||||||| ]",
    "[||||||||||]",
    "E||||||||",
    "Ev||||||||",
    "Evi|||||||",
    "Evil||||||",
    "Evil |||||",
    "Evil B||||",
    "Evil Bu|||",
    "Evil Bud||",
    "Evil Budd|",
    "Evil Buddy",
    "Evil Buddy",
    "|Evil Buddy",
    "|Evil Buddy",
    "|vil Buddy",
    "|il Buddy",
    "|l Buddy",
    "|Buddy",
    "|uddy",
    "|ddy",
    "|dy",
    "|y",
];

var frame = 0;

function update()
{
    if(frame >= frames.length)
    {
        frame = 0;
    }

    document.title = frames[frame];

    frame += 1;
}

setInterval(update, 300);