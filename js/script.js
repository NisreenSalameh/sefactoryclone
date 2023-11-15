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

// Auto sliding functionality
setInterval(nextTestimonial, 4000);

function currentSlide(index) {
currentIndex = index;
showTestimonial(currentIndex);
}
