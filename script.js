document.addEventListener('DOMContentLoaded', () => {
  initHeroAnimations();
  initThreeJS();
  initWorkExperienceSlideshows();
  initTestimonialCarousel();
});

function initHeroAnimations() {
  const typingText = document.querySelector('.typing-text');
  const fullText = "Hello World! I'm Anaswara Raghuthaman";
  let index = 0;

  function typeWriter() {
    if (index < fullText.length) {
      typingText.textContent += fullText.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    }
  }

  setTimeout(typeWriter, 500);
}

function initThreeJS() {
  const container = document.getElementById('three-canvas-container');
  
  if (!container || typeof THREE === 'undefined') return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);

  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 500;
  const posArray = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 10;
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.02,
    color: 0xffffff,
    transparent: true,
    opacity: 0.8
  });

  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particlesMesh);

  camera.position.z = 3;

  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  });

  function animate() {
    requestAnimationFrame(animate);
    
    particlesMesh.rotation.y += 0.001;
    particlesMesh.rotation.x += 0.0005;

    particlesMesh.rotation.y += mouseX * 0.0005;
    particlesMesh.rotation.x += mouseY * 0.0005;

    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
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
}
