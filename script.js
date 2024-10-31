// scripts.js

document.querySelectorAll('.cta-btn').forEach(btn => {
    btn.addEventListener('click', () => alert('Button clicked!'));
  });
  
  window.addEventListener('scroll', () => {
    document.querySelector('header').classList.toggle('sticky', window.scrollY > 0);
  });
  