// Rivium Solutions - JavaScript

// ===== LANGUAGE SWITCHING =====

// Switch language using Google Translate
function switchLanguage(lang) {
  // Close dropdown
  const dropdown = document.getElementById('lang-dropdown');
  if (dropdown) {
    dropdown.classList.remove('active');
  }

  // If selecting English, reset to original
  if (lang === 'en') {
    // Clear ALL googtrans cookies thoroughly
    const hostname = window.location.hostname;
    const domains = ['', hostname, '.' + hostname];
    const paths = ['/', ''];

    domains.forEach(domain => {
      paths.forEach(path => {
        const domainPart = domain ? ';domain=' + domain : '';
        const pathPart = path ? ';path=' + path : '';
        document.cookie = 'googtrans=' + domainPart + pathPart + ';expires=Thu, 01 Jan 1970 00:00:00 GMT';
      });
    });

    // Force reload to show original English content
    window.location.reload(true);
    return;
  }

  // For other languages, set the cookie and reload
  const hostname = window.location.hostname;
  const cookieValue = '/en/' + lang;

  // Set cookie for multiple domain variations to ensure it works
  document.cookie = 'googtrans=' + cookieValue + ';path=/';
  if (hostname) {
    document.cookie = 'googtrans=' + cookieValue + ';path=/;domain=' + hostname;
    document.cookie = 'googtrans=' + cookieValue + ';path=/;domain=.' + hostname;
  }

  // Reload to apply translation
  window.location.reload(true);
}

// Update current language display based on cookie
function updateCurrentLangDisplay() {
  const currentLangSpan = document.getElementById('current-lang');
  if (!currentLangSpan) return;

  const cookie = document.cookie.split(';').find(c => c.trim().startsWith('googtrans='));
  if (cookie) {
    const value = cookie.split('=')[1];
    const lang = value.split('/').pop(); // Get last part after /en/
    const langMap = { 'no': 'NO', 'de': 'DE', 'nl': 'NL', 'en': 'EN' };
    currentLangSpan.textContent = langMap[lang] || 'EN';
  } else {
    currentLangSpan.textContent = 'EN';
  }
}

// ===== DOM READY =====

document.addEventListener('DOMContentLoaded', function() {

  // Language dropdown toggle
  const langBtn = document.getElementById('lang-btn');
  const langDropdown = document.getElementById('lang-dropdown');

  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      langDropdown.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
        langDropdown.classList.remove('active');
      }
    });
  }

  // Update language display on load
  updateCurrentLangDisplay();

  // Mobile menu toggle
  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');

      // Toggle icon (hamburger to X)
      const icon = menuButton.querySelector('svg');
      if (mobileMenu.classList.contains('active')) {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />';
      } else {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />';
      }
    });

    // Close mobile menu when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        const icon = menuButton.querySelector('svg');
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />';
      });
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});
