function colorDistance(color1, color2) {

    // console.log(color1);
    // console.log(color2);

    var r1 = colorMap[color1][0];
    var g1 = colorMap[color1][1];
    var b1 = colorMap[color1][2];
    
    var r2 = colorMap[color2][0];
    var g2 = colorMap[color2][1];
    var b2 = colorMap[color2][2];

    var colorDistance = Math.abs(r1 - r2) + Math.abs(g1 - g2) + Math.abs(b1 - b2);

    return colorDistance;

}