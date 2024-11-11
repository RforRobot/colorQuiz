// 0 - reveal phase
// 1 - game in progress
var gameState = 0;

var fiveColors = [];

var secretColor;

var distanceLimit = 60;

var colorList = fullColorList;

function advanceGameState() {
        
    if (gameState == 1) {
        nextButton.innerText = "New color"
        displaySolution();
        gameState = 0;
    } else if (gameState == 0) {
        nextButton.innerText = "Reveal solution"
        getColors();
        gameState = 1;
    } else {
        console.log("Unkown gameState:" + gameState);
    }
        
    hideInfo();
    displayInfo();
}

function getColors() {

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
            //            console.log(colorDrawCounter);
        }

        // break loop if 5 colors are done
        if (numCol == numColors) {
            gettingColors = false;
        }
        colorDrawCounter++;
    }

    var index = Math.floor(Math.random() * numColors);

    secretColor = fiveColors[index];

    displayHint();
}

getColors();
advanceGameState();