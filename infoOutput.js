// Offsets for output indices
const RGBoutOffset = 1;
const HSLoutOffset = RGBoutOffset + 1;


function displayHint() {

    var hintType = hintSelect.value;

    switch (hintType) {
        case 'name':
            hintOut.value = secretColor;
            break;
        case 'color':
            document.getElementById("hintOutDiv").style['backgroundColor'] = secretColor;
            break;
        case 'rgb':
            hintOut.value = ""
                + colorMap[secretColor][0] + ", "
                + colorMap[secretColor][1] + ", "
                + colorMap[secretColor][2];
            break;
        case 'hsl':
            var hsl = RGB2HSL(colorMap[secretColor]);
            hintOut.value =
                "" + Math.round(hsl.h) +
                ", " + Math.round(hsl.s) +
                ", " + Math.round(hsl.l);
            break;
        default:
            console.log("Unknown hint type: " + hintType);
    }
}

function displayInfo() {
    //    console.log("info displayed");

    if (document.getElementById("colorCheck").checked) {
        displayColors();
    }

    if (document.getElementById("nameCheck").checked) {
        displayColorNames();
    }

    if (document.getElementById("rgbCheck").checked) {
        displayRGBs();
    }

    if (document.getElementById("hslCheck").checked) {
        displayHSLs();
    }

    contrastAdjustment();
}

function displayColors() {
    for (var i = 0; i < numColors; i++) {
        mainTable.rows[colorRow].cells[1 + i].setAttribute("style", "background-color:" + fiveColors[i]);
    }
}

function displayColorNames() {

    for (var i = 0; i < numColors; i++) {
        outs[1 + i * 3].value = fiveColors[i];
    }

    for (e of document.getElementsByClassName("nameDiv")) {
        e.style["visibility"] = "visible"
    }
}

function displayRGBs() {
    for (var i = 0; i < numColors; i++) {
        var color = fiveColors[i];

        outs[RGBoutOffset + 1 + i * 3].value = ""
            + colorMap[color][0] + ", "
            + colorMap[color][1] + ", "
            + colorMap[color][2];
    }

    for (e of document.getElementsByClassName("rgbDiv")) {
        e.style["visibility"] = "visible"
    }
}

function displayHSLs() {
    for (var i = 0; i < numColors; i++) {
        var color = fiveColors[i];

        var hsl = RGB2HSL(colorMap[color]);
        outs[HSLoutOffset + 1 + i * 3].value =
            "" + Math.round(hsl.h) +
            ", " + Math.round(hsl.s) +
            ", " + Math.round(hsl.l);
    }

    for (e of document.getElementsByClassName("hslDiv")) {
        e.style["visibility"] = "visible"
    }
}

function contrastAdjustment() {

    for (var i = 0; i < numColors; i++) {
        var colorRGB = colorMap[fiveColors[i]];
        var pseudoLightness = (colorRGB[0] + colorRGB[1] + colorRGB[2]) / 3;

        var cutoff = 64;
        // When background color varies, black font might not be readable. 64 is an arbitrary cutoff
        if (pseudoLightness < cutoff && document.getElementById("colorCheck").checked) {
            for (var j = 0; j < 3; j++) {
                outs[1 + i * 3 + j].style = "color: white"
            }
        } else {
            for (var j = 0; j < 3; j++) {
                outs[1 + i * 3 + j].style = "color: black"
            }
        }
    }
}

function displaySolution() {

//    console.log("displaySolution called");

    switch (hintSelect.value) {
        case 'name':
            displayColorNames();
            break;
        case 'color':
            displayColors();
            break;
        case 'rgb':
            displayRGBs();
            break;
        case 'hsl':
            displayHSLs();
            break;
        default:
            console.log("Unknown hintType: " + hintSelect.value);
    }
}

function hideInfo() {

   // console.log("info hidden/cleared");

    for (var i = 0; i < numColors; i++) {

        if (!document.getElementById("colorCheck").checked) {
            mainTable.rows[colorRow].cells[i + 1].setAttribute("style", "background-color:" + 'lightgray');
        } else {
            displayColors();
        }

        if (!document.getElementById("nameCheck").checked) {
            document.getElementsByClassName("nameDiv")[i].style['visibility'] = "hidden";
        } else {
            document.getElementsByClassName("nameDiv")[i].style['visibility'] = "visible";
        }

        if (!document.getElementById("rgbCheck").checked) {
            document.getElementsByClassName("rgbDiv")[i].style['visibility'] = "hidden";
        } else {
            document.getElementsByClassName("rgbDiv")[i].style['visibility'] = "visible";
        }

        if (!document.getElementById("hslCheck").checked) {
            document.getElementsByClassName("hslDiv")[i].style['visibility'] = "hidden";
        } else {
            document.getElementsByClassName("hslDiv")[i].style['visibility'] = "visible";
        }
    }

    if (gameState == 0) {
        displaySolution();
    }
}