// Objects
const mainTable = document.getElementById('main');

// index of colorRow in the table
const colorRow = 3;

addSomeCells(3, 5)

shapeColorRow();

// Listeners in game.js
const gameTypeSelect = document.getElementById('gameType');

const nextButton = document.getElementById('next');

const infoSelect = document.getElementById('RGBinfo');

const outs = document.getElementsByTagName('output');

const nameOut = outs[0];

function shapeColorRow() {

    var size = window.innerWidth / 6;

    for (var i = 0; i < 5; i++) {
        var cell = mainTable.rows[colorRow].cells[i];

        cell.setAttribute("width", size);
        cell.setAttribute("height", size);
    }

}

