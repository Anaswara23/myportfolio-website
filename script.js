document.addEventListener('DOMContentLoaded', () => {
  initWorkExperienceSlideshows();
  initTestimonialCarousel();
});

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
  const prevBtn = document.querySelector('.left-btn');
  const nextBtn = document.querySelector('.right-btn');
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
