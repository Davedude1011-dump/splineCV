const mouse = document.querySelector(".mouse");

function isTouchDevice() {
    try {
        document.createEvent("TouchEvent");
        return true;
    }
    catch (e) {
        return false;
    }
}

const move = (e) => {
    try {
        var x = !isTouchDevice() ? e.pageX : e.touches
        [0].pageX;
        var y = !isTouchDevice() ? e.pageY : e.touches
        [0].pageY;
    }
    catch (e) {}
    mouse.style.left = x + "px"
    mouse.style.top = y + "px"

    
}

document.addEventListener("mousemove", (e) => {
    if (document.body.style.cursor === "pointer") {
        console.log("hi")
        document.body.style.cursor = "normal"
        mouse.style.height = "25px"
        mouse.style.width = "25px"
    }
    move(e)
})


document.querySelector(".splineBG").style.cursor = "none";