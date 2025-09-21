// Carousel functionality
const dots = document.querySelectorAll(".dot");
const track = document.querySelector(".carousel-track");
let currentSlide = 0;
const slideWidth = 370; // card width + gap

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentSlide = index;
        track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

        dots.forEach((d) => d.classList.remove("active"));
        dot.classList.add("active");
    });
});
