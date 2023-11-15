var currentIndex = 0;
var testimonials = document.querySelectorAll('.testimonials-slide');


function showTestimonial(index) {
    testimonials.forEach(function (testimonial) {
        testimonial.style.display = 'none';
    });

    testimonials[index].style.display = 'flex';

    var dots = document.querySelectorAll('.slider-dot');
    dots.forEach(function (dot) {
        dot.classList.remove('active');
    });

    dots[index].classList.add('active');
}

function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
}

function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
}

showTestimonial(currentIndex);
setInterval(nextTestimonial, 4000);

function currentSlide(index) {
currentIndex = index;
showTestimonial(currentIndex);
}

//Adding the color overlay animation
var overlay = document.querySelector('.color-overlay');
var heroDescriptionLeft = document.querySelector('.hero-description-left');
var heroLeftSecondSpan = document.querySelector('.hero-left-second-span');
var colors = ['#28eea9e9', '#af28eeb4', '#ff0088c3']; 
var intervalDuration = 3000;

setInterval(function() {
    var currentIndex = Math.floor((Date.now() / intervalDuration) % colors.length);
    
    overlay.style.backgroundColor = colors[currentIndex];

    if (colors[currentIndex] === '#28eea9e9') {
        heroLeftSecondSpan.textContent = 'Software Engineer?';
        heroDescriptionLeft.style.color = 'black'; 
    } else if (colors[currentIndex] === '#af28eeb4') {
        heroLeftSecondSpan.textContent = 'Data Engineer?';
        heroDescriptionLeft.style.color = 'white'; 
    } else {
        heroLeftSecondSpan.textContent = 'UI/UX Designer?';
        heroDescriptionLeft.style.color = 'white';
    }
}, intervalDuration);


function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle("active");
  }