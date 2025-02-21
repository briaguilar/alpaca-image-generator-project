// Establishing variables of the alpaca
// Getting the elements from index.html via their IDs
let ears = document.getElementById("ears");
let hair = document.getElementById("hair");
let eyes = document.getElementById("eyes");
let neck = document.getElementById("neck");
let mouth = document.getElementById("mouth");
let leg = document.getElementById("leg");
let background = document.getElementById("background");
let acce = document.getElementById("acce");
let parts = document.getElementById("parts");
let types = document.getElementById("types");

// This is the default hair being set as the initial hair element
letTempHair = "default";

let partsBtn = [
    { class: "buttons", value: "hair", content: "Hair" },
    { class: "buttons", value: "ears", content: "Ears" },
    { class: "buttons", value: "mouth", content: "Mouth" },
    { class: "buttons", value: "neck", content: "Neck" },
    { class: "buttons", value: "leg", content: "Leg" },
    { class: "buttons", value: "eyes", content: "Eyes" },
    { class: "buttons", value: "acce", content: "Accessories" },
    { class: "buttons", value: "background", content: "Background" }
];

let earsBtn = [
    { class: "buttons", value: "default", content: "Default" },
    { class: "buttons", value: "tilt-backward", content: "Backward" },
    { class: "buttons", value: "tilt-forward", content: "Forward" }
];

let hairBtn = [
    { class: "buttons", value: "default", content: "Default" },
    { class: "buttons", value: "bang", content: "Bang" },
    { class: "buttons", value: "curls", content: "Curls" },
    { class: "buttons", value: "elegant", content: "Elegant" },
    { class: "buttons", value: "fancy", content: "Fancy" },
    { class: "buttons", value: "quiff", content: "Quiff" },
    { class: "buttons", value: "short", content: "Short" }
];

let acceBtn = [
    { class: "buttons", value: "earings", content: "Earings" },
    { class: "buttons", value: "flower", content: "Flower" },
    { class: "buttons", value: "glasses", content: "Glasses" },
    { class: "buttons", value: "headphone", content: "Headphone" }
];

let eyesBtn = [
    { class: "buttons", value: "default", content: "Default" },
    { class: "buttons", value: "angry", content: "Angry" },
    { class: "buttons", value: "naughty", content: "Naughty" },
    { class: "buttons", value: "panda", content: "Panda" },
    { class: "buttons", value: "smart", content: "Smart" },
    { class: "buttons", value: "star", content: "Star" }
];

let backgroundBtn = [
    { class: "buttons", value: "default", content: "Default" },
    { class: "buttons", value: "blue50", content: "Blue 50" },
    { class: "buttons", value: "blu60", content: "Blue 60" },
    { class: "buttons", value: "blue70", content: "Blue 70" },
    { class: "buttons", value: "darkblue30", content: "Dark Blue 30" },
    { class: "buttons", value: "darkblue50", content: "Dark Blue 50" },
    { class: "buttons", value: "darkblue70", content: "Dark Blue 70" },
    { class: "buttons", value: "green50", content: "Green 50" },
    { class: "buttons", value: "green60", content: "Green 60" },
    { class: "buttons", value: "green70", content: "Green 70" },
    { class: "buttons", value: "grey40", content: "Grey 40" },
    { class: "buttons", value: "grey70", content: "Grey 70" },
    { class: "buttons", value: "grey80", content: "Grey 80" },
    { class: "buttons", value: "red50", content: "Red 50" },
    { class: "buttons", value: "red60", content: "Red 60" },
    { class: "buttons", value: "red70", content: "Red 70" },
    { class: "buttons", value: "yellow50", content: "Yellow 50" },
    { class: "buttons", value: "yellow60", content: "Yellow 60" },
    { class: "buttons", value: "yellow70", content: "Yellow 70" }
];

let legBtn = [
    { class: "buttons", value: "default", content: "Default" },
    { class: "buttons", value: "bubble-tea", content: "Bubble Tea" },
    { class: "buttons", value: "cookie", content: "Cookie" },
    { class: "buttons", value: "game-console", content: "Game Console" },
    { class: "buttons", value: "tilt-backward", content: "Backward" },
    { class: "buttons", value: "tilt-forward", content: "Forward" }
];

let mouthBtn = [
    { class: "buttons", value: "default", content: "Default" },
    { class: "buttons", value: "astonished", content: "Astonished" },
    { class: "buttons", value: "eating", content: "Eating" },
    { class: "buttons", value: "laugh", content: "Laugh" },
    { class: "buttons", value: "tongue", content: "Tongue" }
];

const bgCheck = [
    "blue50",
    "blue60",
    "blue70",
    "darkblue30",
    "darkblue50",
    "darkblue70",
    "green50",
    "green60",
    "green70",
    "grey40",
    "grey70",
    "grey80",
    "red50",
    "red60",
    "red70",
    "yellow50",
    "yellow60",
    "yellow70"
];

// Hair Button function
function handleHair() {
    hairBtn.forEach((e) => {
        console.log(e);
        const node = document.createElement("button");
        node.classList.add(e.class);
        node.value = e.value;
        node.innerText = e.content;
        types.appendChild(node);
    });

    let BtnArray = document.getElementsByClassName("buttons");

    const imgSrc = document.getElementById("hair");

    Array.from(BtnArray).forEach((e) => {
        e.addEventListener("click", (ele) => {
            if (
                ele.target.value == "bang" ||
                ele.target.value == "curls" ||
                ele.target.value == "default" ||
                ele.target.value == "elegant" ||
                ele.target.value == "quiff" ||
                ele.target.value == "short"
            )
            imgSrc.src = `/alpaca/hair/${ele.target.value}.png`;
        });
    });
}

// Accessories function
function handleAcce() {
    acceBtn.forEach((e) => {
        console.log(e);
        const node = document.createElement("button");
        node.classList.add(e.class);
        node.innerText = e.content;
        types.appendChild(node);
    });

    let BtnArray = document.getElementsByClassName("buttons");

    const imgSrc = document.getElementById("acce");

    Array.from(BtnArray).forEach((e) => {
        e.addEventListener("click", (ele) => {
            if (
                ele.target.value == "earings" ||
                ele.target.value == "flower" ||
                ele.target.value == "glasses" ||
                ele.target.value == "headphone"
            )
            imgSrc.src = `/alpaca/accessories/${ele.target.value}.png`;
        });
    });
}

// Background function
function handleBackground() {
    backgroundBtn.forEach((e) => {
        console.log(e);
        const node = document.createElement("button");
        node.classList.add(e.class);
        node.value = e.value;
        node.innerText = e.content;
        types.appendChild(node);
    });

    let BtnArray = document.getElementsByClassName("buttons");

    const imgSrc = document.getElementById("background");

    Array.from(BtnArray).forEach((e) => {
        e.addEventListener("click", (ele) => {
            let cnt = 0;
            bgCheck.map((e) => {
                if (e == ele.target.value) {
                    cnt++;
                }
            });

            if (cnt >= 1) {
                imgSrc.src = `/alpaca/backgrounds/${ele.target.value}.png`;
            }
        });
    });
}

// Ears function
function handleEars() {
    earsBtn.forEach((e) => {
        console.log(e);
        const node = document.createElement("button");
        node.classList.add(e.class);
        node.value = e.value;
        node.innerText = e.content;
        types.appendChild(node);
    });

    let BtnArray = document.getElementsByClassName("buttons");

    const imgSrc = document.getElementById("ears");

    Array.from(BtnArray).forEach((e) => {
        e.addEventListener("click", (ele) => {
            let cnt = 0;

            if (
                ele.target.value == "default" ||
                ele.target.value == "tilt-backward" ||
                ele.target.value == "tilt-forward"
             ) {
                imgSrc.src = `/alpaca/ears/${ele.target.value}.png`;
            }
        });
    });
}

// Eyes function
function handleEyes() {
    eyesBtn.forEach((e) => {
        console.log(e);
        const node = document.createElement("button");
        node.classList.add(e.class);
        node.value = e.value;
        node.innerText = e.content;
        types.appendChild(node);
    });

    let BtnArray = document.getElementsByClassName("buttons");

    const imgSrc = document.getElementById("eyes");

    Array.from(BtnArray).forEach((e) => {
        e.addEventListener("click", (ele) => {
            let cnt = 0;

            if  (
                ele.target.value == "angry" ||
                ele.target.value == "default" ||
                ele.target.value == "naughty" ||
                ele.target.value == "panda" ||
                ele.target.value == "smart" ||
                ele.target.value == "star"
            ) {
                imgSrc.src = `/alpaca/eyes/${ele.target.value}.png`;
            }
        });
    });
}

// Leg function
function handleLeg() {
    legBtn.forEach((e) => {
        console.log(e);
        const node = document.createElement("button");
        node.classList.add(e.class);
        node.value = e.value;
        node.innerText = e.content;
        types.appendChild(node);
    });

    let BtnArray = document.getElementsByClassName("buttons");

    const imgSrc = document.getElementById("leg");

    Array.from(BtnArray).forEach((e) => {
        e.addEventListener("click", (ele) => {
            let cnt = 0;

            if (
                ele.target.value == "bubble-tea" ||
                ele.target.value == "default" ||
                ele.target.value == "game-console" ||
                ele.target.value == "tilt-backward" ||
                ele.target.value == "tilt-forward"
            ) {
                imgSrc.src = `/alpaca/leg/${ele.target.value}.png`;
            }
        });
    });
}

// Neck function
function handleNeck () {
    neckBtn.forEach((e) => {
        console.log(e);
        const node = document.createElement("button");
        node.classList.add(e.class);
        node.value = e.value;
        node.innerText = e.content;
        types.appendChild(node);
    });

    let BtnArray = document.getElementsByClassName("buttons");

    const imgSrc = document.getElementById("neck");

    Array.from(BtnArray).forEach((e) => {
        e.addEventListener("click", (ele) => {
            let cnt = 0;

            if (
                ele.target.value == "bend-forward" ||
                ele.target.value == "default" ||
                ele.target.value == "thick" ||
                ele.target.value == "bend-backward"
            ) {
                imgSrc.src = `/alpaca/neck/${ele.target.value}.png`;
            }
        });
    });
}

// Mouth function
function handleMouth() {
    mouthBtn.forEach((e) => {
        console.log(e);
        const node = document.createElement("button");
        node.classList.add(e.class);
        node.value = e.value;
        node.innerText = e.content;
        types.appendChild(node);
    });

    let BtnArray = document.getElementsByClassName("buttons");

    const imgSrc = document.getElementById("mouth");

    Array.from(BtnArray).forEach((e) => {
        e.addEventListener("click", (ele) => {
            let cnt = 0;

            if (
                ele.target.value == "astonished" ||
                ele.target.value == "default" ||
                ele.target.value == "eating" ||
                ele.target.value == "laugh" ||
                ele.target.value == "tongue"
            ) {
                imgSrc.src = `/alpaca/mouth/${ele.target.value}.png`;
            }
        });
    });
}

// Action function
function handleAction(e) {
    const actionToTakePlace = e.target.value;

    if (actionToTakePlace == "random") {
        const hairNumber = Math.floor(Math.random() * hairBtn.length-1);
        hair.src = `/alpaca/hair/${hairBtn[hairNumber].value}.png`;

        const acceNumber = Math.floor(Math.random() * acceBtn.length-1);
        hair.src = `/alpaca/accessories/${acceBtn[acceNumber].value}.png`;

        const backgroundNumber = Math.floor(Math.random() * backgroundBtn.length-1);
        hair.src = `/alpaca/backgrounds/${backgroundBtn[backgroundNumber].value}.png`;

        const earsNumber = Math.floor(Math.random() * earsBtn.length-1);
        ears.src = `/alpaca/eyes/${earsBtn[eyesNumber].value}.png`;

        const eyesNumber = Math.floor(Math.random() * eyesBtn.length-1);
        eyes.src = `/alpaca/eyes/${eyesBtn[eyesNumber].value}.png`;

        const legNumber = Math.floor(Math.random() * legBtn.length-1);
        leg.src = `/alpaca/leg/${legBtn[legNumber].value}.png`;

        const mouthNumber = Math.floor(Math.random() * mouthBtn.length-1);
        mouth.src = `/alpaca/mouth/${mouthBtn[mouthNumber].value}.png`;

        const neckNumber = Math.floor(Math.random() * neckBtn.length-1);
        neck.src = `/alpaca/neck/${neckBtn[neckNumber].value}.png`;
    } else if (actionToTakePlace == "download") {
        const element = document.getElementById("imageContainer");

        html2canvas(element).then(canvas => {
            const imageURL = canvas.toDataURL('image/png');

            const link = document.createElement("a");
            link.href = imageURL;
            link.download = "alpaca-image.png";
            link.click();
        });
    }
}

partsBtn.forEach((e) => {
    console.log(e);
    const node = document.createElement("button");
    node.classList.add(e.class);
    node.value = e.value;
    node.innerText = e.content;
    parts.appendChild(node);
});

const buttons = document.getElementsByClassName("buttons");

const actionBtn = document.getElementsByClassName("action-btn");

Array.from(actionBtn).forEach((e) => {
    e.addEventListener("click", handleAction);
})

Array.from(buttons).forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const btnValue = e.target.value;
        console.log(e.target.value);

        if (btnValue == "hair") {
            types.innerHTML = "";
            handleHair();
        } else if (btnValue == "background") {
            types.innerHTML = "";
            handleBackground();
        } else if (btnValue == "acce") {
            types.innerHTML = "";
            handleAcce();
        } else if (btnValue == "ears") {
            types.innerHTML = "";
            handleEars();
        } else if (btnValue == "eyes") {
            types.innerHTML = "";
            handleEyes();
        } else if (btnValue == "leg") {
            types.innerHTML = "";
            handleLeg();
        } else if (btnValue == "neck") {
            types.innerHTML = "";
            handleNeck();
        } else if (btnValue == "mouth") {
            handleMouth();
        }
    });
});