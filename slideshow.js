let slideIndex = 1; // Initialize to the first image

function showSlides(n) {
    const slides = document.querySelectorAll('.slideshow-container img');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}

function plusSlides(n) {
    showSlides((slideIndex += n));
}

showSlides(slideIndex); // Display the initial image

// Start the slideshow when the page loads
window.onload = function () {
    showSlides(slideIndex);
};