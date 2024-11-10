// Listener
nextButton.addEventListener("click", advanceGameState);

gameTypeSelect.addEventListener("input", changeGameType);

infoSelect.addEventListener("input", changeInfoType);

// 0 - reveal phase
// 1 - game in progress
var gameState = 1;

var fiveColors = [];

var distanceLimit = 60;

var colorList = fullColorList;

var displayInfo = infoSelect.value;

function advanceGameState() {
    if (gameState == 1) {
        nextButton.innerText = "New color"
        displayNames();
        gameState = 0;
    } else if (gameState == 0) {
        nextButton.innerText = "Reveal names"
        getColors();
        gameState = 1;
    } else {
        console.log("Unkown gameState:" + gameState);
    }

    if (displayInfo == "always" || (displayInfo == "afterGuess" && gameState == 0)) {
        displayRGBinfo();
    }
}

function changeInfoType() {
    displayInfo = infoSelect.value;
}

function changeGameType() {
    var gameType = gameTypeSelect.value;
    switch (gameType) {
        case 'proxy':
            colorList = fullColorList;
            distanceLimit = 60;
            break;
        case 'red':
            colorList = redList;
            distanceLimit = 255 * 3;
            break;
        case 'orange':
            colorList = orangeList;
            distanceLimit = 255 * 3;
            break;
        case 'yellow':
            colorList = yellowList;
            distanceLimit = 255 * 3;
            break;
        case 'green':
            colorList = greenList;
            distanceLimit = 255 * 3;
            break;
        case 'cyan':
            colorList = cyanList;
            distanceLimit = 255 * 3;
            break;
        case 'blue':
            colorList = blueList;
            distanceLimit = 255 * 3;
            break;
        case 'pink':
            colorList = pinkList;
            distanceLimit = 255 * 3;
            break;
        case 'white':
            colorList = whileList;
            distanceLimit = 255 * 3;
            break;
        case 'purple':
            colorList = purpleList;
            distanceLimit = 255 * 3;
            break;
        case 'gray':
            colorList = grayList;
            distanceLimit = 255 * 3;
            break;
        case 'brown':
            colorList = brownList;
            distanceLimit = 255 * 3;
            break;
        default:
            console.log(`Invalid gametype ${gameType} given.`);
    }
}




function getColors() {

    hideNames();

    fiveColors = [];

    var gettingColors = true;
    var colorDrawCounter = 0;

    while (gettingColors) {

        //  we tried drawing a lot of times and cannot seem to find a close color; let us restart
        if (colorDrawCounter > 999) {
            fiveColors = [];
            colorDrawCounter = 0;
        }

        var index = Math.floor(Math.random() * colorList.length - 1 + 1);
        var color = colorList[index];

        var numCol = fiveColors.length;

        // push color if it is first OR (unique AND close to previous one)
        if (numCol < 1 || (fiveColors.indexOf(color) === -1) && colorDistance(color, fiveColors[numCol - 1]) < distanceLimit) {
            fiveColors.push(color);
            console.log(colorDrawCounter);
        }

        // break loop if 5 colors are done
        if (numCol == 5) {
            gettingColors = false;
        }
        colorDrawCounter++;
    }

    displayColors();

}

function displayColors() {

    var index = Math.floor(Math.random() * 5);
    nameOut.value = fiveColors[index];

    for (var i = 0; i < 5; i++) {
        mainTable.rows[colorRow].cells[i].setAttribute("style", "background-color:" + fiveColors[i]);
    }

}

function displayNames() {

    for (var i = 1; i < 6; i++) {
        outs[i].value = fiveColors[i - 1];
    }

}

function displayRGBinfo() {

    console.log("info displayed");

    const RGBoutOffset = 5;
    const HSLoutOffset = 10;
    for (var i = 1; i < 6; i++) {

        var color = fiveColors[i - 1];

        outs[i + RGBoutOffset].value = "("
            + colorMap[color][0] + ","
            + colorMap[color][1] + ","
            + colorMap[color][2] + ")";

        var hsl = RGB2HSL(colorMap[color]);
        outs[i + HSLoutOffset].value =
            "H:" + Math.round(hsl.h) +
            " S:" + Math.round(hsl.s) +
            " L:" + Math.round(hsl.l);
    }

}

function hideNames() {

    console.log("names hidden");

    for (var i = 1; i < 16; i++) {
        outs[i].value = "";
    }

}

getColors();