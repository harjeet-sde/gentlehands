console.log("Welcome On Gallery.js")

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

const faqBtns = document.querySelectorAll(".faq-btn");

faqBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;

    // close all
    document.querySelectorAll(".faq-content").forEach((c) => {
      if (c !== content) c.classList.add("hidden");
    });

    // toggle current
    content.classList.toggle("hidden");
  });
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  item.querySelector(".faq-question").addEventListener("click", () => {
    item.classList.toggle("active");
  });
});


(() => {
  const gallery = document.querySelector('.gh-gallery');
  if (!gallery) return;

  const filters = [...gallery.querySelectorAll('.gh-gallery__filter')];
  const items = [...gallery.querySelectorAll('.gh-gallery__item')];
  const lightbox = gallery.querySelector('.gh-gallery__lightbox');
  const preview = lightbox.querySelector('img');
  const label = lightbox.querySelector('.gh-gallery__lightbox-label');
  const closeButton = lightbox.querySelector('.gh-gallery__close');

  filters.forEach(filter => {
    filter.addEventListener('click', () => {
      const selected = filter.dataset.filter;
      filters.forEach(button => {
        const active = button === filter;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', String(active));
      });
      items.forEach(item => {
        item.hidden = selected !== 'all' && item.dataset.category !== selected;
      });
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    preview.src = '';
    document.body.style.overflow = '';
  }

  items.forEach(item => {
    item.addEventListener('click', () => {
      const image = item.querySelector('img');
      if (!image || !image.complete || image.naturalWidth === 0) return;
      preview.src = image.currentSrc || image.src;
      preview.alt = image.alt;
      label.textContent = item.dataset.caption || image.alt;
      lightbox.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      closeButton.focus();
    });
  });

  closeButton.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', event => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox();
  });
})();