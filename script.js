// Fade-up on scroll for the sections below the fold.
// Does nothing when the visitor prefers reduced motion or the browser
// lacks IntersectionObserver, so the page never depends on this file.
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!('IntersectionObserver' in window)) return;

  document.documentElement.classList.add('js');

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

  document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
  });
})();
