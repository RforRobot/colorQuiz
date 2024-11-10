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

        var colorRGB = colorMap[fiveColors[i - 1]];
        var pseudoLightness = (colorRGB[0] + colorRGB[1] + colorRGB[2]) / 3;

        if (pseudoLightness < 128) {
            outs[i].style = "color: white"
        } else {
            outs[i].style = "color: black"
        }

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