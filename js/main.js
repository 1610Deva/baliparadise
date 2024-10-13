const paragraphs = document.querySelectorAll(".paragraph");

document.addEventListener("scroll", function(){
    paragraphs.forEach(paragraph => {
        if(isInView(paragraph)){
            paragraph.classList.add("paragraph--visible");
        }
    })
})

function isInView(element){
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 &&
        rect.top < 
            (window.innerHeight - 160 || document.documentElement.clientHeight - 160)
    );
}


document.addEventListener('DOMContentLoaded', () => {
    const sliderTrack = document.querySelector('.slider-track');
    const slides = Array.from(document.querySelectorAll('.slide-items'));
    const slideWidth = slides[0].offsetWidth;

    // Clone the slides
    let cloneSlides = slides.map(slide => slide.cloneNode(true));
    cloneSlides.forEach(clone => sliderTrack.appendChild(clone));

    // Adjust the width of the slider track
    sliderTrack.style.width = `${slideWidth * slides.length * 2}px`;
});