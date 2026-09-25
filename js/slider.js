(() => {
  const root = document.querySelector('[data-slider]');
  if (!root) return;
  const track = root.querySelector('.slider__track');
  const slides = [...root.querySelectorAll('.slide')];
  const dots = [...root.querySelectorAll('.slider__dot')];
  const section = root.closest('section');
  const prev = section.querySelector('[data-slider-prev]');
  const next = section.querySelector('[data-slider-next]');
  let index = 0;

  const go = (i) => {
    index = (i + slides.length) % slides.length;
    track.style.transform = `translateX(${-index * 100}%)`;
    slides.forEach((s, n) => { s.toggleAttribute('inert', n !== index); s.setAttribute('aria-hidden', String(n !== index)); });
    dots.forEach((d, n) => {
      d.classList.toggle('is-active', n === index);
      n === index ? d.setAttribute('aria-current', 'true') : d.removeAttribute('aria-current');
    });
  };

  prev.addEventListener('click', () => go(index - 1));
  next.addEventListener('click', () => go(index + 1));
  dots.forEach((d, n) => d.addEventListener('click', () => go(n)));

  let startX = null;
  root.addEventListener('pointerdown', (e) => { if (e.pointerType === 'touch') startX = e.clientX; });
  root.addEventListener('pointerup', (e) => {
    if (startX === null) return;
    const dx = e.clientX - startX;
    startX = null;
    if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
  });

  go(0);
})();
