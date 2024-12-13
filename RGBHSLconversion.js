// function mostly from https://deepai.org/chat, very slight readability changes by me

function RGB2HSL(RGBobject) {

    var r = RGBobject[0];
    var g = RGBobject[1];
    var b = RGBobject[2];

    // console.log("r:" + r, "g:" + g, "g:" + g);

    // Normalize the RGB values to the range 0-1
    r /= 255;
    g /= 255;
    b /= 255;

    // Find the maximum and minimum values among R, G, and B
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        // Achromatic (gray)
        h = s = 0; // Hue and saturation are undefined
    } else {
        const d = max - min;

        // Calculate saturation
        if(l > 0.5) {
            s = d / (1 - l) / 2;
        } else {
            s = d / l / 2;
        }

        // Calculate hue
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
            //    console.log("g:" + g + "b:" + b + "d:" + d + "h:" + h)  
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6; // Normalize to [0, 1]
    }

    // console.log("h:" + h*360, "s:" + s*100, "l:" + l*100);

    // Convert hue to degrees and saturation/lightness to percentages
    return {
        h: h * 360, // Convert to degrees
        s: s * 100, // Convert to percentage
        l: l * 100  // Convert to percentage
    };
}