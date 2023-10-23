// Initialize slideIndex for each slideshow
const slideIndexes = [1, 1, 1]; // Initialize to the first image for each slideshow

function showSlides(slideshowIndex, n) {
    const slides = document.querySelectorAll(`.slideshow-container-${slideshowIndex} img`);
    if (n > slides.length) {
        slideIndexes[slideshowIndex] = 1;
    }
    if (n < 1) {
        slideIndexes[slideshowIndex] = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndexes[slideshowIndex] - 1].style.display = 'block';
}

function plusSlides(slideshowIndex, n) {
    showSlides(slideshowIndex, (slideIndexes[slideshowIndex] += n));
}

// Call showSlides for each slideshow
showSlides(0, slideIndexes[0]); // Display the initial image for the first slideshow
showSlides(1, slideIndexes[1]); // Display the initial image for the second slideshow
showSlides(2, slideIndexes[2]); // Display the initial image for the third slideshow

// Start the slideshows when the page loads
window.onload = function () {
    showSlides(0, slideIndexes[0]); // Start the first slideshow
    showSlides(1, slideIndexes[1]); // Start the second slideshow
    showSlides(2, slideIndexes[2]); // Start the third slideshow
};


