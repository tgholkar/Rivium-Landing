// Rivium Solutions - JavaScript

// ===== HIDE GOOGLE TRANSLATE BAR =====

// Function to hide Google Translate banner
function hideGoogleTranslateBar() {
  // Hide the banner frame iframe
  const bannerFrame = document.querySelector('.goog-te-banner-frame');
  if (bannerFrame) {
    bannerFrame.style.display = 'none';
    bannerFrame.style.visibility = 'hidden';
    bannerFrame.style.height = '0';
  }

  // Hide all skiptranslate elements
  const skipTranslate = document.querySelectorAll('.skiptranslate');
  skipTranslate.forEach(el => {
    if (el.tagName === 'IFRAME' || el.classList.contains('goog-te-banner-frame')) {
      el.style.display = 'none';
      el.style.visibility = 'hidden';
      el.style.height = '0';
    }
  });

  // Reset body position (Google Translate pushes body down)
  document.body.style.top = '0px';
  document.body.style.position = 'static';
}

// Run immediately and watch for changes
hideGoogleTranslateBar();

// Use MutationObserver to catch when Google adds elements
const observer = new MutationObserver(function(mutations) {
  hideGoogleTranslateBar();
});

// Start observing when DOM is ready
if (document.body) {
  observer.observe(document.body, { childList: true, subtree: true });
} else {
  document.addEventListener('DOMContentLoaded', function() {
    observer.observe(document.body, { childList: true, subtree: true });
  });
}

// Also run periodically for the first few seconds
let hideAttempts = 0;
const hideInterval = setInterval(function() {
  hideGoogleTranslateBar();
  hideAttempts++;
  if (hideAttempts > 20) {
    clearInterval(hideInterval);
  }
}, 250);

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
    // Clear ALL googtrans cookies with every possible variation
    const hostname = window.location.hostname;
    const hostParts = hostname.split('.');

    // Build list of all possible domain variations
    const domains = ['', hostname];
    if (hostParts.length >= 2) {
      domains.push('.' + hostname);
      domains.push('.' + hostParts.slice(-2).join('.'));
    }

    const paths = ['/', '', '/index.html'];
    const expiry = 'expires=Thu, 01 Jan 1970 00:00:00 GMT';

    // Clear with all combinations
    domains.forEach(domain => {
      paths.forEach(path => {
        const domainPart = domain ? ';domain=' + domain : '';
        const pathPart = ';path=' + (path || '/');
        document.cookie = 'googtrans=' + domainPart + pathPart + ';' + expiry;
        document.cookie = 'googtrans=/' + domainPart + pathPart + ';' + expiry;
        document.cookie = 'googtrans=/en/en' + domainPart + pathPart + ';' + expiry;
      });
    });

    // Also clear without any domain/path
    document.cookie = 'googtrans=;' + expiry;
    document.cookie = 'googtrans=;path=/;' + expiry;

    // Clear localStorage and sessionStorage items Google might use
    try {
      Object.keys(localStorage).forEach(key => {
        if (key.toLowerCase().includes('translate') || key.toLowerCase().includes('goog')) {
          localStorage.removeItem(key);
        }
      });
      Object.keys(sessionStorage).forEach(key => {
        if (key.toLowerCase().includes('translate') || key.toLowerCase().includes('goog')) {
          sessionStorage.removeItem(key);
        }
      });
    } catch (e) {}

    // Navigate to clean URL to ensure fresh page load
    const cleanUrl = window.location.protocol + '//' + window.location.host + window.location.pathname;
    window.location.href = cleanUrl;
    return;
  }

  // For other languages, first clear any existing translation
  document.cookie = 'googtrans=;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT';

  // Set the new language cookie
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

// Get current language from cookie
function getCurrentLanguage() {
  const cookie = document.cookie.split(';').find(c => c.trim().startsWith('googtrans='));
  if (cookie) {
    const value = cookie.split('=')[1];
    return value.split('/').pop(); // Get last part after /en/
  }
  return 'en';
}

// Update current language display based on cookie
function updateCurrentLangDisplay() {
  const currentLangSpan = document.getElementById('current-lang');
  if (!currentLangSpan) return;

  const lang = getCurrentLanguage();
  const langMap = { 'no': 'NO', 'de': 'DE', 'nl': 'NL', 'fr': 'FR', 'en': 'EN' };
  currentLangSpan.textContent = langMap[lang] || 'EN';
}

// Update custom translated elements based on language
function updateCustomTranslations() {
  const lang = getCurrentLanguage();

  // Update hero tagline
  const heroTagline = document.getElementById('hero-tagline');
  if (heroTagline) {
    const translation = heroTagline.getAttribute('data-' + lang) || heroTagline.getAttribute('data-en');
    if (translation) {
      heroTagline.innerHTML = translation;
    }
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

  // Update language display and custom translations on load
  updateCurrentLangDisplay();
  updateCustomTranslations();

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
