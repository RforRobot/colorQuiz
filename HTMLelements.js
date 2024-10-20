// Objects
const mainTable = document.getElementById('main');

// index of colorRow in the table
const colorRow = 2;

resizeCells();

// Listener in game.js
const nextButton = document.getElementById('next');

const outs = document.getElementsByTagName('output');

const nameOut = outs[0];

function resizeCells() {

    var size = window.innerWidth / 6;

    for (var i = 0; i < 5; i++) {
        mainTable.rows[colorRow].cells[i].setAttribute("width", size)
        mainTable.rows[colorRow].cells[i].setAttribute("height", size)
    }

}
