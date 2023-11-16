//slides animation
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
let colors = ['#28eea9e9', '#af28eeb4', '#ff0088c3']; 
let intervalDuration = 3000;

setInterval(function() {
    let currentIndex = Math.floor((Date.now() / intervalDuration) % colors.length);
    
    overlay.style.backgroundColor = colors[currentIndex];

    if (colors[currentIndex] === '#28eea9e9') {
        heroDescriptionLeft.style.color = 'black'; 
    } else if (colors[currentIndex] === '#af28eeb4') {
        heroDescriptionLeft.style.color = 'white'; 
    } else {
        heroDescriptionLeft.style.color = 'white';
    }
}, intervalDuration);

//adding the texts animation
const sentences = [
    'Software Engineer?',
    'Data Engineer?',
    'UIUX DESIGNER?'
  ];
  
  let currentWordIndex = 0;
  let offset = 0;
  const sentenceElement = document.querySelector('.hero-left-second-span');
  let forwards = true;
  let skipCount = 0;
  const skipDelay = 5;
  const speed = 70;

  const updateSentence = () => {
    sentenceElement.textContent = sentences[currentWordIndex].substring(0, offset);
  };

  const handleAnimation = () => {
    if (forwards) {
      if (offset >= sentences[currentWordIndex].length) {
        if (++skipCount === skipDelay) {
          forwards = false;
          skipCount = 0;
        }
      }
    } else if (offset === 0) {
      forwards = true;
      currentWordIndex = (currentWordIndex + 1) % sentences.length;
    }

    if (skipCount === 0) {
      forwards ? offset++ : offset--;
    }

    updateSentence();
  };

  setInterval(handleAnimation, speed);



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
