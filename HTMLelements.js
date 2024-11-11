// Objects
const mainTable = document.getElementById('main');

const numColors = 5;

// index of colorRow in the table
const colorRow = 4;

const numCells = 1 + numColors;

addHintSelect();
addGameTypeSelect();

addSomeCells(numCells);

addCheckBoxes();

const checkBoxes = document.querySelectorAll('input[type=checkbox]');

shapeColorRow();

// Listeners in events.js
const hintSelect = document.getElementById('hint');

const gameTypeSelect = document.getElementById('gameType');

const nextButton = document.getElementById('next');

const outs = document.getElementsByTagName('output');

const hintOut = outs[0];

function shapeColorRow() {

    var size = window.innerWidth / (numCells - 0.5);

    for (var i = 0; i < numCells; i++) {
        var cell = mainTable.rows[colorRow].cells[i];

        cell.setAttribute("width", size);
        cell.setAttribute("height", size);
    }

    mainTable.rows[colorRow].cells[0].setAttribute("width", size/2);

}

