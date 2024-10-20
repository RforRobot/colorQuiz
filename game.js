// Listener
nextButton.addEventListener("click", advanceGameState);


// 0 - reveal phase
// 1 - game in progress
var gameState = 1;

var fiveColors = [];

function advanceGameState() {
    if (gameState == 1) {
        displayNames();
        gameState = 0;
    } else if (gameState == 0) {
        getColors();
        gameState = 1;
    } else {
        console.log("Unkown gameState:" + gameState);
    }

}

function getColors() {

    hideNames();

    fiveColors = [];

    var gettingColors = true;
    var colorDrawCounter = 0;
    
    while (gettingColors) {
        
        //  we tried drawing a lot of times and cannot seem to find a close color; let us restart
        if(colorDrawCounter > 999) {
            fiveColors = [];
            colorDrawCounter = 0;      
        }

        var index = Math.floor(Math.random() * 140 + 1);
        var color = colorList[index];

        var numCol = fiveColors.length;
        
        // push color if it is first OR (unique AND close to previous one)
        if (numCol < 1 || (fiveColors.indexOf(color) === -1) && colorDistance(color,fiveColors[numCol-1]) < 60) {
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

function hideNames() {

    for (var i = 1; i < 6; i++) {
        outs[i].value = "";
    }

}

getColors();