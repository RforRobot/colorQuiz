function colorDistance(color1, color2) {

    // console.log(color1);
    // console.log(color2);

    hsl1 = RGB2HSL(colorMap[color1]);
    hsl2 = RGB2HSL(colorMap[color2]);

    // By default JS modulo can also output negative values, so we shift by 360
    var colorDistance = Math.round(hsl1.h - hsl2.h + 360) % 360;

    // distance > 180 indicates going the 'wrong way'
    if (colorDistance > 180) colorDistance = 360 - colorDistance;

    /* //Debugging
    console.log("colorDistance of " +
         color1 + " (hue:" + Math.round(hsl1.h) + ") and " +
         color2 + " (hue:" + Math.round(hsl2.h) + ") is: " + colorDistance);
    */

    return colorDistance;

}

// RGB Manhattan distance version, not very fun
// function colorDistance(color1, color2) {

//     // console.log(color1);
//     // console.log(color2);

//     var r1 = colorMap[color1][0];
//     var g1 = colorMap[color1][1];
//     var b1 = colorMap[color1][2];
    
//     var r2 = colorMap[color2][0];
//     var g2 = colorMap[color2][1];
//     var b2 = colorMap[color2][2];

//     var colorDistance = Math.abs(r1 - r2) + Math.abs(g1 - g2) + Math.abs(b1 - b2);

//     return colorDistance;

// }