// Hero section animation
window.addEventListener('DOMContentLoaded', () => {
  gsap.to(".fade-up", { 
    opacity: 1, 
    y: 0, 
    duration: 1, 
    delay: 0.3, 
    stagger: 0.3,
    ease: "power3.out"
  });
  gsap.to(".btn", { 
    opacity: 1, 
    y: 0, 
    duration: 1, 
    delay: 1,
    ease: "power3.out"
  });
});

// Animation control variables
let aboutAnimated = false;

// Scroll-triggered animations
window.addEventListener('scroll', () => {
  // About box animation
  const box = document.querySelector('.about-box');
  if (box) {
    const boxRect = box.getBoundingClientRect();
    if (!aboutAnimated && boxRect.top < window.innerHeight - 100) {
      gsap.to(box, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)",
        borderColor: "#00adb5"
      });
      aboutAnimated = true;
    }
  }

  // Animate paragraph fade-ins inside about box
  gsap.to(".about-box .fade-up", {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
  });

  // Lookbook items animation
  const items = document.querySelectorAll('.lookbook-item');
  items.forEach((item, i) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100 && !item.classList.contains('animated')) {
      gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: i * 0.2,
        ease: "power3.out"
      });
      item.classList.add('animated');
    }
  });

  // Back to Top button show/hide
  const backToTopBtn = document.querySelector('.back-to-top');
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

// Back to top button smooth scroll
document.querySelector('.back-to-top').addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});