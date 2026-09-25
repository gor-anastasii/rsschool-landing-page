(() => {
  const btn = document.querySelector('.burger');
  const nav = document.getElementById('site-nav');
  if (!btn || !nav) return;
  const mq = window.matchMedia('(max-width: 768px)');

  const setOpen = (open) => {
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
    nav.classList.toggle('is-open', open);
    open ? window.scrollLock.lock('menu') : window.scrollLock.unlock('menu');
  };
  const isOpen = () => btn.getAttribute('aria-expanded') === 'true';

  btn.addEventListener('click', () => setOpen(!isOpen()));
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen()) { setOpen(false); btn.focus(); }
  });
  mq.addEventListener('change', (e) => { if (!e.matches) setOpen(false); });
})();
