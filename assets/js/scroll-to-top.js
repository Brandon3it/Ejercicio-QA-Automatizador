(function () {
  function initScrollTopButton() {
    const button = document.querySelector('[data-scroll-top-button]');
    if (!button || button.dataset.bound === 'true') return;
    button.dataset.bound = 'true';

    const toggleButton = () => {
      const shouldShow = window.scrollY > 260;

      if (shouldShow) {
        button.classList.remove('opacity-0', 'invisible', 'translate-y-6');
        button.classList.add('opacity-100', 'visible', 'translate-y-0');
      } else {
        button.classList.add('opacity-0', 'invisible', 'translate-y-6');
        button.classList.remove('opacity-100', 'visible', 'translate-y-0');
      }
    };

    button.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    toggleButton();
    window.addEventListener('scroll', toggleButton, { passive: true });
    window.addEventListener('resize', toggleButton);
  }

  const tryInit = () => {
    if (document.querySelector('[data-scroll-top-button]')) {
      initScrollTopButton();
    }
  };

  const observer = new MutationObserver(() => {
    tryInit();
  });

  const setup = () => {
    tryInit();
    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener('scroll-top:ready', tryInit, { once: true });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setup, { once: true });
  } else {
    setup();
  }
})();
