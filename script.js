const sliderConatiner = document.querySelector('.slider-container')
const leftSlide = document.querySelector('.left-slide')
const rightSlide = document.querySelector('.right-slider')
const upArrow = document.querySelector('.up-arrow')
const downArrow = document.querySelector('.down-arrow')
const slidesLength = rightSlide.querySelectorAll('div').length
let slideStartingIndex = 0

leftSlide.style.top = `-${(slidesLength - 1)*100}vh`

upArrow.addEventListener('click', () => change('up'))
downArrow.addEventListener('click', () => change('down'))

const change = (direction) => {
    const slideHeight = sliderConatiner.clientHeight
    if(direction === 'up'){
        slideStartingIndex++
        if(slideStartingIndex > slidesLength-1){
            slideStartingIndex = 0
        }   

    } else if(direction === 'down'){
        slideStartingIndex--
        if(slideStartingIndex < 0 ){
            slideStartingIndex = slidesLength -1
        }
    } 

    rightSlide.style.transform = `translateY(-${slideStartingIndex * slideHeight}px)`
    leftSlide.style.transform = `translateY(${slideStartingIndex * slideHeight}px)`
}
