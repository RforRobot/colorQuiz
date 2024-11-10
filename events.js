// Listener
nextButton.addEventListener("click", advanceGameState);
// function in game.js

gameTypeSelect.addEventListener("input", changeGameType);

infoSelect.addEventListener("input", changeInfoType);

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