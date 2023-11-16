let currentIndex = 0;
let testimonials = document.querySelectorAll('.testimonials-slide');


function showTestimonial(index) {
    testimonials.forEach(function (testimonial) {
        testimonial.style.display = 'none';
    });

    testimonials[index].style.display = 'flex';

    let dots = document.querySelectorAll('.slider-dot');
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
let overlay = document.querySelector('.color-overlay');
let heroDescriptionLeft = document.querySelector('.hero-description-left');
let heroLeftSecondSpan = document.querySelector('.hero-left-second-span');
let colors = ['#28eea9e9', '#af28eeb4', '#ff0088c3']; 
let intervalDuration = 3000;

setInterval(function() {
    let currentIndex = Math.floor((Date.now() / intervalDuration) % colors.length);
    
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
    let dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle("active");
  }



// Function to toggle the menu visibility
function toggleMenu() {
    let modal = document.getElementById("myModal");
    modal.style.display = (modal.style.display === "none" || modal.style.display === "") ? "block" : "none";
}

// Function to close the modal
function closeModal() {
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
}
