// const sliderContainer = document.querySelector('.slider-container')
// const slideRight = document.querySelector('.right-slide')
// const slideLeft = document.querySelector('.left-slide')
// const upButton = document.querySelector('.up-button')
// const downButton = document.querySelector('.down-button')
// const slidesLength = slideRight.querySelectorAll('div').length

// let activeSlideIndex = 0

// slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

// upButton.addEventListener('click', () => changeSlide('up'))
// downButton.addEventListener('click', () => changeSlide('down'))

// const changeSlide = (direction) => {
//     const sliderHeight = sliderContainer.clientHeight
//     if(direction === 'up') {
//         activeSlideIndex++
//         if(activeSlideIndex > slidesLength - 1) {
//             activeSlideIndex = 0
//         }
//     } else if(direction === 'down') {
//         activeSlideIndex--
//         if(activeSlideIndex < 0) {
//             activeSlideIndex = slidesLength - 1
//         }
//     }

//     slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
//     slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
// }

const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;
const slideInterval = 2500; // Interval time in milliseconds (5 seconds)

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

// Function to change slide direction
const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1;
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
};

// Function to automatically change slides
const autoChangeSlide = () => {
    changeSlide('up'); // Change slide direction as needed
};

// Set interval for automatic slide change
const slideTimer = setInterval(autoChangeSlide, slideInterval);

// Event listeners for manual slide change
upButton.addEventListener('click', () => {
    clearInterval(slideTimer); // Stop automatic slide change on manual interaction
    changeSlide('up');
});

downButton.addEventListener('click', () => {
    clearInterval(slideTimer); // Stop automatic slide change on manual interaction
    changeSlide('down');
});
