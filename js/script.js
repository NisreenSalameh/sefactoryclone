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
let intervalDuration = 2500;
let heroDescriptionLeft = document.querySelector('.hero-description-left');

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

function closeModal() {
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
}


//Programs functionality
const programTabs = document.querySelectorAll('.tab');
let currentTab = null;
const programsSection = document.querySelector('.section-b-programs');

programTabs.forEach(tab => {
  tab.addEventListener('click', function () {
    if (currentTab) {
      currentTab.classList.remove('active-program');
      currentTab.querySelector('span').style.color = '';
    }

    tab.classList.add('active-program');
    currentTab = tab;

    const tabText = tab.textContent.trim();
    const titleSpan = document.querySelector('.title-span');
    const programSpan = document.querySelector('.program-span');

    switch (tabText) {
      case 'FCS':
        tab.querySelector('span').style.color = '#ffc635';
        programsSection.style.backgroundColor = '#ffc635';
        titleSpan.style.color = '#ffc635';
        programSpan.style.color = '#ffc635';
        break;
      case 'FSW':
        tab.querySelector('span').style.color = '#28eea7';
        programsSection.style.backgroundColor = '#28eea7';
        programSpan.style.color = '#28eea7';
        break;
      case 'FSD':
        tab.querySelector('span').style.color = '#9864da';
        programsSection.style.backgroundColor = '#9864da';
        titleSpan.style.color = '#9864da';
        programSpan.style.color = '#9864da';
        break;
      case 'UIX':
        tab.querySelector('span').style.color = '#fb508e';
        programsSection.style.backgroundColor = '#fb508e';
        titleSpan.style.color = '#fb508e';
        programSpan.style.color = '#fb508e';
        break;
      default:
        break;
    }
  });
});



const tabContents = {
  'FCS': {
    header: '<h2><span class="title-span">> FCS:</span> Foundations of Computer Science</h2>',
    description: '<p>// // This 9-week course covers fundamental topics in computer science, including data structures, algorithms, and foundational concepts. It is suitable for coding enthusiasts, former computer science students, and beginners who wish to learn Python programming, object-oriented programming, file systems, and more. The course includes online video materials, assignments, and instructor-led sessions.</p>',
    progress: '<div class="progress-lower"><div class="progress-lower-left"><p>next bootcamp data | <span class="program-span"> To be confirmed</span></p></div><button class="progress-btn">Learn more ></button></div>',
    image: 'assets/images/fcsprogram.png'
  },
  'FSW': {
    header: '<h2><span class="title-span">> FSW:</span> Full-Stack Web Development</h2>',
    description: '<p>// Our 14-week bootcamp is designed to equip aspiring developers with the technical and interpersonal skills needed to become professional software engineers. Participants will learn essential concepts such as Version Control, Object-Oriented Programming, Database Management Systems, MVC Design Patterns, Dependency Management, modern Web Frameworks, and AWS. The program also includes a soft-skills curriculum covering Communication & Interpersonal Skills, Professional Writing, Technical Presentations, Negotiation, and Interviewing, which will be taught through lectures, weekly projects, tech talks, and a final project to showcase their learning.</p>',
    progress: '<div class="progress-lower"><div class="progress-lower-left"><p>next bootcamp data | <span class="program-span"> To be confirmed</span></p></div><button class="progress-btn">Learn more ></button></div>',
    image: 'assets/images/fswprogram.png'
  },
  'FSD': {
    header: '<h2><span class="title-span">> FSD:</span> > FSD: Full-Stack Data</h2>',
    description: '<p>// // SE Factory 12-week Full-Stack Data course offers robust training in data analysis and engineering. Participants learn to handle large data sets with Python and use libraries like Pandas, NumPy, and Matplotlib for data manipulation and visualization. The course also delves into cloud orchestration, distributed computing, relational databases, and SQL basics. Hands-on projects provide real-world data analysis experience. Upon completion, students gain proficiency in Python for analytics, understand data warehousing, and can effectively visualize and present data insights.</p>',
    progress: '<div class="progress-lower"><div class="progress-lower-left"><p>next bootcamp data | <span class="program-span"> To be confirmed</span></p></div><button class="progress-btn">Learn more ></button></div>',
    image: 'assets/images/fsdprogram.png'
  },
  'UIX': {
    header: '<h2><span class="title-span">> UIX:</span> UI/UX Design Bootcamp</h2>',
    description: '<p>// // SE Factory 6-week UI/UX course offers immersive learning in UI/UX design. It encompasses the essentials of UI/UX, from mastering Figma, color psychology, typography to UX heuristics, prototyping and WCAG guidelines. Learners work on projects, transforming wireframes into mockups, and creating responsive interfaces. The course culminates in a final project, enabling students to conduct a thorough UX audit, revamp a website, and create a well-documented case study. Graduates leave equipped with a polished portfolio and market-ready skills in UI/UX design.</p>',
    progress: '<div class="progress-lower"><div class="progress-lower-left"><p>next bootcamp data | <span class="program-span"> To be confirmed</span></p></div><button class="progress-btn">Learn more ></button></div>',
    image: 'assets/images/uiuxprogram.png'
  }
};

const tabs = document.querySelectorAll('.tab');
const contentContainer = document.querySelector('.programs-left');
const imageContainer = document.querySelector('.programs-right'); 

tabs.forEach(tab => {
  tab.addEventListener('click', function () {
    tabs.forEach(t => t.classList.remove('active-program'));
    tab.classList.add('active-program');
    const tabText = tab.textContent.trim();
    contentContainer.innerHTML = tabContents[tabText].header + tabContents[tabText].description + tabContents[tabText].progress;
    imageContainer.src = tabContents[tabText].image;
  });
});

