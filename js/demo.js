// where should the slider start at
var index = 0;
// dashes that indicate the position
var indicator = document.getElementsByClassName("indicator");
// add the onhover behavior (does not work via css because js main function overrides it)
for (let i = 0; i < indicator.length; i++) {
    indicator[i].onmouseover = () => {
        indicator[i].style.background = "black";
    }
    indicator[i].onmouseout = () => {
        indicator[i].style.background = "#0F5F75";
        if (i == index) {
            indicator[i].style.background = "black";
        }
    }
}
// start and repeat slider's main function every 4.5 seconds
currentSlide(index);
var slideTimer = setInterval(() => {
    index++;
    if (index < 0) {
        index = 3;
    }
    if (index > 3) {
        index = 0;
    }
    currentSlide(index);
}, 4500);
// right arrow function
function nextSlide() {
    index++;
    if (index > 3) {
        index = 0;
    }
    currentSlide(index);
    clearInterval(slideTimer);
    slideTimer = setInterval(() => {
        index++;
        if (index < 0) {
            index = 3;
        }
        if (index > 3) {
            index = 0;
        }
        currentSlide(index);
    }, 4500);
}
// left arrow function 
function previousSlide() {
    index--;
    if (index < 0) {
        index = 3;
    }
    currentSlide(index);
    clearInterval(slideTimer);
    slideTimer = setInterval(() => {
        index++;
        if (index < 0) {
            index = 3;
        }
        if (index > 3) {
            index = 0;
        }
        currentSlide(index);
    }, 4500);
}
// slider's main function
function currentSlide(value) {
    index = value;
    var wrapper = document.getElementById("slide-wrapper");
    var margin = "-" + value + "00%";
    wrapper.style.marginLeft = margin;
    for (let i = 0; i < indicator.length; i++) {
        indicator[i].style.background = "#0F5F75";
        if (i == value) {
            indicator[i].style.background = "black";
        }
    }
}
