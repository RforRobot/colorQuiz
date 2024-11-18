// Listener
nextButton.addEventListener("click", advanceGameState);
// function in game.js

hintSelect.addEventListener("input", changeHintInfo);

gameTypeSelect.addEventListener("input", changeGameType);

document.addEventListener("keydown",keyEventHandler);


for (checkbox of checkBoxes) {
    checkbox.addEventListener("input", checkBoxHandler);
}

function checkBoxHandler() {
    
    hideOrShowInfo();

//    console.log("checkBoxHandler called in gamestate " + gameState);

}

function changeHintInfo() {
    document.getElementById("hintOutDiv").style['backgroundColor'] = 'gray';
    hintOut.innerHTML = "&nbsp";
    displayHint();

    for (checkbox of document.querySelectorAll('input[type=checkbox]')) {
        checkbox.addEventListener("input", hideOrShowInfo);
    }

    for (checkbox of checkBoxes) {
        checkbox.disabled = false;
    }

    document.getElementById(hintSelect.value + "Check").checked = false;
    document.getElementById(hintSelect.value + "Check").disabled = true;

    hideOrShowInfo();
}


function keyEventHandler(event) {
    console.log("Event.code is: " + event.code);
        const callback = {
            "KeyN" : advanceGameState
        }[event.code];
        callback?.();
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
            colorList = whiteList;
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
