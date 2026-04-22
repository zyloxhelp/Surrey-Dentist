// ============ NAV SCROLL EFFECT ============
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (nav) {
    if (window.scrollY > 50) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
});

// ============ MOBILE MENU ============
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileToggle) {
  mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// ============ SCROLL REVEAL ============
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ============ FORM HANDLER ============
function handleBooking(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.form-submit, button[type="submit"]');
  if (!btn) return;
  const original = btn.textContent;
  btn.textContent = '✓ Thank you! We\'ll call within 15 minutes';
  btn.style.background = 'var(--gold)';
  btn.style.color = 'var(--ink)';
  setTimeout(() => {
    btn.textContent = original;
    btn.style.background = '';
    btn.style.color = '';
    e.target.reset();
  }, 3500);
}

// ============ SMOOTH SCROLL FOR HASH LINKS ============
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (href === '#' || href === '#!') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ============ HERO IMAGE ROTATOR ============
const heroImages = document.querySelectorAll('.hero-rotating img');
if (heroImages.length > 1) {
  let currentIdx = 0;
  setInterval(() => {
    heroImages[currentIdx].classList.remove('active');
    currentIdx = (currentIdx + 1) % heroImages.length;
    heroImages[currentIdx].classList.add('active');
  }, 4000);
}
