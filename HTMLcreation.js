// mainTable,colorRow defined in HTMLelements

function addSomeCells(numColumns) {

    mainTable.insertRow();
    for (var i = 0; i < numColumns; i++) {
        mainTable.rows[colorRow].insertCell();
        mainTable.rows[colorRow].cells[i].innerHTML = colorRowCell();
    }
}

function addHintSelect() {
    document.getElementById('hintSelectDiv').innerHTML =
        '<select id="hint">' +
        '<option value="name">Show color name</option>' +
        '<option value="color">Show color</option>' +
        '<option value="rgb">Show RGB</option>' +
        '<option value="hsl">Show HSL</option>' +
        '</select>';
}

function addGameTypeSelect() {
    document.getElementById('gameTypeDiv').innerHTML =
        '<select id="gameType">' +
        '<option value="proxy">Proximity</option>' +
        '<option value="blue">Hues of blue</option>' +
        '<option value="brown">Hues of brown</option>' +
        '<option value="cyan">Hues of cyan</option>' +
        '<option value="gray">Hues of gray</option>' +
        '<option value="green">Hues of green</option>' +
        '<option value="orange">Hues of orange</option>' +
        '<option value="pink">Hues of pink</option>' +
        '<option value="purple">Hues of purple</option>' +
        '<option value="red">Hues of red</option>' +
        '<option value="white">Hues of white</option>' +
        '<option value="yellow">Hues of yellow</option>' +
        '</select>';
}

function colorRowCell() {
    var inner = '<div align = "center">' +
        '<table>' +
        '<tr><td><br></td></tr>' +
        '<tr><td><br></td></tr>' +

        '<tr><td>' +
        '<div class = "nameDiv">' +
        '<output></output></div>' +
        '</td></tr>' +

        '<tr><td>' +
        '<div class = "rgbDiv">' +
        '<output></output></div>' +
        '</td></tr>' +

        '<tr><td>' +
        '<div class = "hslDiv">' +
        '<output></output></div>' +
        '</td></tr>' +

        '</table></div>';

    return inner;
}


function addCheckBoxes() {
    mainTable.rows[colorRow].cells[0].innerHTML =
        '<div align = "center">' +
        '<table>' +
        '<tr>' +
        '<td>' + 'Show' + '</td>' +
        '</tr>' +
        
        '<tr>' +
        '<td>' + 'color' + '</td>' +
        '<td>' +
        '<input type="checkbox" id="colorCheck" checked />' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td>' + 'name' + '</td>' +
        '<td>' +
        '<input type="checkbox" id="nameCheck" disabled=true />' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td>' + 'RGB' + '</td>' +
        '<td>' +
        '<input type="checkbox" id="rgbCheck" checked />' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td>' + 'HSL' + '</td>' +
        '<td>' +
        '<input type="checkbox" id="hslCheck" checked />' +
        '</td>' +
        '</tr>' +

        '</table>' +
        '</div>';
}

