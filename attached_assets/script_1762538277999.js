document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.testimonial-track');
  const slides = document.querySelectorAll('.testimonial');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.left-btn');
  const nextBtn = document.querySelector('.right-btn');
  let index = 0;

  const update = () => {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
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

  // ✅ Read More toggle
  document.querySelectorAll('.testimonial').forEach((t) => {
    const text = t.querySelector('.testimonial-text');
    const btn = t.querySelector('.read-more');
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const expanded = text.classList.toggle('expanded');
      btn.textContent = expanded ? 'Read less' : 'Read more';
    });
  });

  update();
});
