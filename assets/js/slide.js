let totalSlide = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;

let sliderWidth = document.querySelector('.slider').clientWidth;


document.querySelector('.slider--width').style.width = 
    `${sliderWidth * totalSlide}px`;

document.querySelector('.slider--controls').style.width = 
    `${sliderWidth}px`;
document.querySelector('.slider--controls').style.height = 
    `${document.querySelector('.slider').clientHeight}px`;

function goleft() {
    currentSlide--;
    if(currentSlide < 0) {
        currentSlide = totalSlide - 1;
    }
    updateMargin();
}
function goRight() {
    currentSlide++;
    if(currentSlide > (totalSlide-1)) {
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin() {
    let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth);
    document.querySelector('.slider--width').style.marginLeft = 
        `-${newMargin}px`;
}

// setInterval(goNext, 5000);