var imgs = document.getElementsByClassName("blink")

for (var x = 0; x < imgs.length; x++) {
    var img = imgs[x]
    var nextImg = (x < 2) ? imgs[x + 1] : imgs[0]
    var delay = setTimeout(500, function () {
        img.style.display = none;
        nextImg.style.display = "block";
    })

    //hijack the loop and set to beginning when at end
    if (x == 2) {
        x = 0
    }
}