let colourDisplay = document.querySelector(".colourDisplay")
let changeBtn = document.querySelector(".changeBtn")
let colours = [" linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
            "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
            "linear-gradient(45deg, #00DBDE 0%, #FC00FF 100%)",
            "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
            "linear-gradient(34deg, #FFFFFF 0%, #6284FF 50%, #FF0000 100%)",
            "linear-gradient(0deg, #08AEEA 0%, #2AF598 100%)",
            "linear-gradient(147deg, #FFE53B 0%, #FF2525 74%)",
            "linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%)",
            "linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%)",
            "linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)",
            "linear-gradient(132deg, #F4D03F 0%, #16A085 100%)"
]

let randomColour = colours[Math.floor(Math.random()*3)]


function switchColour(){
    const randomColour = getRandomColour()
    let random = colours[randomColour]
    document.body.style.background = random
    colourDisplay.textContent = "BACKGROUND COLOUR: " + colours[randomColour]
}

function getRandomColour(){
    return Math.floor(Math.random()*colours.length)
}
