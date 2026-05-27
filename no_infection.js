runEveryTick(function() {

    for (var i = 0; i < currentPixels.length; i++) {

        var pixel = currentPixels[i];

        if (!pixel) continue;

        if (pixel.element === "infection") {
            deletePixel(pixel.x, pixel.y);
        }

        if (pixel.element === "plague") {
            deletePixel(pixel.x, pixel.y);
        }

        if (pixel.element === "cancer") {
            deletePixel(pixel.x, pixel.y);
        }
    }
});