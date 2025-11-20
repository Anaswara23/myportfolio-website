document.addEventListener('DOMContentLoaded', () => {
  initWorkExperienceSlideshows();
  initTestimonialCarousel();
  initEmailJS();
});

// EmailJS Configuration
function initEmailJS() {
  // Initialize EmailJS with your public key (you'll get this from EmailJS dashboard)
  emailjs.init("UAxfcEEWtWpQurl9C"); // Replace with your actual public key
  
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const btnText = document.querySelector('.btn-text');
  const btnLoading = document.querySelector('.btn-loading');
  const formStatus = document.getElementById('form-status');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show loading state
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline';
    submitBtn.disabled = true;
    formStatus.innerHTML = '';
    
    // Send email using EmailJS
    emailjs.sendForm(
      'service_8v80k9j',    // Replace with your service ID
      'template_w6e343y',   // Replace with your template ID
      form
    ).then(function(response) {
      // Success
      console.log('SUCCESS!', response.status, response.text);
      formStatus.innerHTML = '<p style="color: #4CAF50;">✅ Message sent successfully! I\'ll get back to you soon.</p>';
      form.reset();
    }, function(error) {
      // Error
      console.log('FAILED...', error);
      formStatus.innerHTML = '<p style="color: #f44336;">❌ Failed to send message. Please try again or email me directly.</p>';
    }).finally(function() {
      // Reset button state
      btnText.style.display = 'inline';
      btnLoading.style.display = 'none';
      submitBtn.disabled = false;
    });
  });
}

function initWorkExperienceSlideshows() {
  const slideshows = document.querySelectorAll('.timeline-slideshow');
  
  slideshows.forEach((slideshow) => {
    const images = slideshow.querySelectorAll('.slideshow-image');
    if (images.length === 0) return;
    
    let currentIndex = 0;
    
    setInterval(() => {
      images[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add('active');
    }, 3500);
  });
}

function initTestimonialCarousel() {
  const track = document.querySelector('.testimonial-track');
  const slides = document.querySelectorAll('.testimonial');
  const dots = document.querySelectorAll('.carousel-dots .dot');
  const prevBtn = document.querySelector('.testimonial-carousel .left-btn');
  const nextBtn = document.querySelector('.testimonial-carousel .right-btn');
  let index = 0;

  function collapseAllTestimonials() {
    slides.forEach((testimonial) => {
      const collapsedText = testimonial.querySelector('.testimonial-text.collapsed');
      const fullText = testimonial.querySelector('.testimonial-text-full');
      const btn = testimonial.querySelector('.read-more-btn');
      
      if (collapsedText) collapsedText.style.display = 'block';
      if (fullText) fullText.style.display = 'none';
      if (btn) btn.textContent = 'Read more';
    });
  }

  const update = () => {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
    
    collapseAllTestimonials();
  };

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    update();
  });

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    update();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      index = i;
      update();
    });
  });

  slides.forEach((testimonial) => {
    const collapsedText = testimonial.querySelector('.testimonial-text.collapsed');
    const fullText = testimonial.querySelector('.testimonial-text-full');
    const btn = testimonial.querySelector('.read-more-btn');
    
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        
        const isExpanded = fullText.style.display === 'block';
        
        if (isExpanded) {
          collapsedText.style.display = 'block';
          fullText.style.display = 'none';
          btn.textContent = 'Read more';
        } else {
          collapsedText.style.display = 'none';
          fullText.style.display = 'block';
          btn.textContent = 'Read less';
        }
      });
    }
  });

  update();
}

document.addEventListener("DOMContentLoaded", () => {
  const projectCarousel = document.querySelector(".project-carousel");
  const projectTrack = projectCarousel.querySelector(".projects-track");
  const projectCards = projectTrack.querySelectorAll(".project-card");
  const leftBtn = projectCarousel.querySelector(".nav-btn.left-btn");
  const rightBtn = projectCarousel.querySelector(".nav-btn.right-btn");

  let currentProjectIndex = 0;
  const visibleCount = 3;
  const cardWidth = projectCards[0].getBoundingClientRect().width;
  const gap = parseFloat(getComputedStyle(projectTrack).gap) || 0;

  let autoSlideInterval;

  function updateProjects() {
    const offset = -(cardWidth + gap) * currentProjectIndex;
    projectTrack.style.transform = `translateX(${offset}px)`;
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      if (currentProjectIndex < projectCards.length - visibleCount) {
        currentProjectIndex++;
      } else {
        currentProjectIndex = 0; // loop back to start
      }
      updateProjects();
    }, 12000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval); // stop current interval
    startAutoSlide(); // restart after user interaction
  }

  rightBtn.addEventListener("click", () => {
    if (currentProjectIndex < projectCards.length - visibleCount) {
      currentProjectIndex++;
      updateProjects();
      resetAutoSlide();
    }
  });

  leftBtn.addEventListener("click", () => {
    if (currentProjectIndex > 0) {
      currentProjectIndex--;
      updateProjects();
      resetAutoSlide();
    }
  });

  // Start auto-slide initially
  startAutoSlide();

  // Pause auto-slide when hovering over the carousel
  projectCarousel.addEventListener("mouseenter", () => {
    clearInterval(autoSlideInterval);
  });

  // Resume auto-slide when mouse leaves the carousel
  projectCarousel.addEventListener("mouseleave", () => {
    startAutoSlide();
  });

  // Optional: recalc on resize for responsive behavior
  window.addEventListener("resize", () => {
    if (currentProjectIndex > projectCards.length - visibleCount) {
      currentProjectIndex = projectCards.length - visibleCount;
      if (currentProjectIndex < 0) currentProjectIndex = 0;
      updateProjects();
    }
  });
});

