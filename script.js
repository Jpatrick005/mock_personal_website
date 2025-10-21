document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('#nav-links a');
  const sections = document.querySelectorAll('section, header.hero');
  const hamburger = document.getElementById('hamburger');
  const navList = document.getElementById('nav-links');

  // === Highlight Active Navigation Link on Scroll ===
  function updateActiveNav() {
    const top = window.scrollY;
    let current = '';

    sections.forEach(sec => {
      const offset = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (top >= offset && top < offset + height) {
        current = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      link.classList.toggle('active', href === '#' + current);
    });
  }

  window.addEventListener('scroll', updateActiveNav);
  window.addEventListener('load', updateActiveNav);

  // === Mobile Hamburger Menu Toggle ===
  if (hamburger && navList) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navList.classList.toggle('show');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navList.classList.remove('show');
      });
    });
  }
});
