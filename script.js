const header = document.querySelector('.site-header');
const nav = document.querySelector('.site-nav');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-menu a');
const backToTop = document.querySelector('.back-to-top');
const filterButtons = document.querySelectorAll('.filter-button');
const galleryItems = document.querySelectorAll('.gallery-item');
const revealItems = document.querySelectorAll('.reveal');
const reviewTrack = document.querySelector('.testimonial-track');
const reviewItems = document.querySelectorAll('.testimonial-item');
const reviewDots = document.querySelectorAll('.dot');
const form = document.querySelector('.contact-form');
const formStatus = document.querySelector('.form-status');

if (header) {
  const updateHeaderState = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 20);
  };

  updateHeaderState();
  window.addEventListener('scroll', updateHeaderState, { passive: true });
}

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Menü schließen' : 'Menü öffnen');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Menü öffnen');
    });
  });
}

if (backToTop) {
  const toggleBackToTop = () => {
    backToTop.classList.toggle('is-visible', window.scrollY > 500);
  };

  toggleBackToTop();
  window.addEventListener('scroll', toggleBackToTop, { passive: true });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.toggle('is-active', item === button));

    galleryItems.forEach((item) => {
      const matches = filter === 'alle' || item.dataset.category === filter;
      item.classList.toggle('is-hidden', !matches);
    });
  });
});

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

if (reviewTrack && reviewItems.length) {
  let activeIndex = 0;
  const showReview = (index) => {
    activeIndex = (index + reviewItems.length) % reviewItems.length;
    reviewTrack.style.transform = `translateX(-${activeIndex * 100}%)`;

    reviewDots.forEach((dot, dotIndex) => {
      dot.classList.toggle('is-active', dotIndex === activeIndex);
    });
  };

  reviewDots.forEach((dot, index) => {
    dot.addEventListener('click', () => showReview(index));
  });

  const autoChange = () => {
    if (window.innerWidth <= 760) {
      showReview(activeIndex + 1);
    }
  };

  setInterval(autoChange, 5000);
}

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameField = form.querySelector('#name');
    const emailField = form.querySelector('#email');
    const messageField = form.querySelector('#message');
    const fields = [nameField, emailField, messageField];
    let isValid = true;

    fields.forEach((field) => {
      if (!field) return;

      const value = field.value.trim();
      let errorMessage = '';

      if (field.name === 'name' && value.length < 2) {
        errorMessage = 'Bitte geben Sie Ihren Namen ein.';
      }

      if (field.name === 'email') {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) {
          errorMessage = 'Bitte geben Sie Ihre E-Mail-Adresse ein.';
        } else if (!emailPattern.test(value)) {
          errorMessage = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
        }
      }

      if (field.name === 'message' && value.length < 10) {
        errorMessage = 'Bitte geben Sie eine kurze Nachricht ein.';
      }

      field.setAttribute('aria-invalid', String(Boolean(errorMessage)));
      field.style.borderColor = errorMessage ? '#b75a5a' : 'rgba(26, 26, 26, 0.16)';

      if (errorMessage) {
        isValid = false;
      }
    });

    if (!isValid) {
      if (formStatus) {
        formStatus.textContent = 'Bitte prüfen Sie Ihre Eingaben.';
        formStatus.classList.remove('is-success');
        formStatus.classList.add('is-error');
      }
      return;
    }

    form.reset();

    if (formStatus) {
      formStatus.textContent = 'Vielen Dank! Ihre Anfrage wurde gesendet.';
      formStatus.classList.remove('is-error');
      formStatus.classList.add('is-success');
    }
  });
}
