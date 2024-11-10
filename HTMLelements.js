// Objects
const mainTable = document.getElementById('main');

// index of colorRow in the table
const colorRow = 3;

addSomeCells(3, 5)

resizeCells();

// Listeners in game.js
const gameTypeSelect = document.getElementById('gameType');

const nextButton = document.getElementById('next');

const infoSelect = document.getElementById('RGBinfo');

const outs = document.getElementsByTagName('output');

const nameOut = outs[0];

function resizeCells() {

    var size = window.innerWidth / 6;

    for (var i = 0; i < 5; i++) {
        mainTable.rows[colorRow].cells[i].setAttribute("width", size)
        mainTable.rows[colorRow].cells[i].setAttribute("height", size)
    }

}

