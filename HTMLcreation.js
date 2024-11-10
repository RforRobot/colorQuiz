// mainTable,colorRow defined in HTMLelements

function addSomeCells(numColumns, numRows) {

    for (var i = 0; i < numColumns; i++) {
        mainTable.insertRow();
        for (var j = 0; j < numRows; j++) {
            mainTable.rows[colorRow + i].insertCell();
            
            mainTable.rows[colorRow + i].cells[j].innerHTML = "<output></output>";
        }
    }
}
