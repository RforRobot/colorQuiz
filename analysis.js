var analysisTable = document.getElementById('analysis');

var len = colorList.length;

function analyze() {

    for (var i = 0; i < len; i++) {

        var color1 = colorList[i];

        analysisTable.style.visibility="visible";

        analysisTable.insertRow();

        analysisTable.rows[i + 1].insertCell();
        analysisTable.rows[i + 1].insertCell();
        analysisTable.rows[i + 1].insertCell();
        analysisTable.rows[i + 1].insertCell();
        analysisTable.rows[i + 1].insertCell();
        analysisTable.rows[i + 1].insertCell();

        analysisTable.rows[i + 1].cells[0].innerHTML = color1;
        analysisTable.rows[i + 1].cells[1].innerHTML = 0;
        analysisTable.rows[i + 1].cells[2].innerHTML = 0;
        analysisTable.rows[i + 1].cells[3].innerHTML = 0;
        analysisTable.rows[i + 1].cells[4].innerHTML = 0;
        analysisTable.rows[i + 1].cells[5].innerHTML = 0;

        if (colorMap[color1] == undefined) {
            analysisTable.rows[i + 1].cells[1].innerHTML = "N/A";
            continue;
        }

        for (var j = 0; j < len; j++) {
            var color2 = colorList[j];
            if (colorMap[color2] == undefined) continue;

            if (colorDistance(color1,color2) >= 150) {
             //   console.log("distance is " + colorDistance + " moving on...");
                continue;
            }

            var rowIndex = Math.floor(colorDistance / 30) + 1;

           // console.log("i:" + i + ", j:" + j + ", rowIndex: " + rowIndex + ", colorDistance: " + colorDistance);

            analysisTable.rows[i + 1].cells[rowIndex].innerHTML++;

        }
    }

}
