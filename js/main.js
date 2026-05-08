/* Scroll-triggered fade-in animations & scroll progress bar */
document.addEventListener('DOMContentLoaded', () => {
  // Fade-in on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // Scroll progress bar
  const progress = document.querySelector('.scroll-progress');
  if (progress) {
    window.addEventListener('scroll', () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = `${(window.scrollY / h) * 100}%`;
    });
  }

  // Mobile menu toggle
  const toggle = document.querySelector('.nav__mobile');
  const links = document.querySelector('.nav__links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
      links.style.flexDirection = 'column';
      links.style.position = 'absolute';
      links.style.top = '72px';
      links.style.left = '0';
      links.style.right = '0';
      links.style.background = 'rgba(10,10,10,0.98)';
      links.style.padding = '1.5rem';
      links.style.gap = '1rem';
    });
  }

  // Newsletter form
  const form = document.querySelector('.newsletter__form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input');
      if (input.value) {
        input.value = '';
        const btn = form.querySelector('button');
        btn.textContent = 'Merci ! ✓';
        setTimeout(() => { btn.textContent = "S'inscrire"; }, 3000);
      }
    });
  }
});
