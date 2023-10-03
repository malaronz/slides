window.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slider img');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    let currentIndex = 0;
    
    function showSlide(index) {
    slides.forEach(function(slide) {
    slide.style.opacity = 0;
    });
    
    slides[index].style.opacity = 1;
    }
    
    prevButton.addEventListener('click', function() {
    currentIndex--;
    if (currentIndex < 0) {
    currentIndex = slides.length - 1;
    }
    showSlide(currentIndex);
    });
    
    nextButton.addEventListener('click', function() {
    currentIndex++;
    if (currentIndex >= slides.length) {
    currentIndex = 0;
    }
    showSlide(currentIndex);
    });
    
    showSlide(currentIndex);
    });