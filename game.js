// 0 - reveal phase
// 1 - game in progress
var gameState = 0;

var fiveColors = [];

var secretColor;

var distanceLimit = 20;

var colorList = fullColorList;

function advanceGameState() {

    if (gameState == 1) {
        displaySolution();
        gameState = 0;
        nextButton.innerText = "New color"
    } else if (gameState == 0) {
        getColors();
        gameState = 1;
        nextButton.innerText = "Reveal solution"
    } else {
        console.log("Unkown gameState:" + gameState);
    }

    hideOrShowInfo();
    displayInfo();
}

function getColors() {

    fiveColors = [];

    var gettingColors = true;
    var colorDrawCounter = 0;
    var tryCounter = 0;

    while (gettingColors) {

        //  we tried drawing a lot of times and cannot seem to find a close color; let us restart
        if (colorDrawCounter > 999) {
            //  console.log("Could not find color close to " + fiveColors[fiveColors.length - 1] + " starting again.");

            colorDrawCounter = 0;
            fiveColors = [];
            tryCounter++;
        }

        var index = Math.floor(Math.random() * colorList.length - 1 + 1);
        var color = colorList[index];

        var numCol = fiveColors.length;

        // push color if it is first OR (unique AND close to previous one)
        if (numCol < 1 ||
            (fiveColors.indexOf(color) === -1
                && colorDistance(color, fiveColors[numCol - 1]) < distanceLimit)) {
            console.log(`Color ${color} accepted`);
            fiveColors.push(color);
        }

        numCol = fiveColors.length;

        // break loop if 5 colors are done
        if (numCol == numColors) {
            gettingColors = false;
        } 
        colorDrawCounter++;

        const tryLimit = 100;

        if (tryCounter > tryLimit) {
            console.log("Could not draw five close colors in more than " + tryLimit + " tries, something is wrong!");
            console.log("fiveColors:" + fiveColors + ", distance limit:" + distanceLimit);
            break;
        }

    }

    var index = Math.floor(Math.random() * numColors);

    secretColor = fiveColors[index];

    displayHint();
}

// getColors();
advanceGameState();
