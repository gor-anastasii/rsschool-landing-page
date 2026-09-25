window.scrollLock = (() => {
  const holders = new Set();
  const update = () => {
    const locked = holders.size > 0;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = locked ? 'hidden' : '';
    document.body.style.paddingRight = locked && scrollbar > 0 ? scrollbar + 'px' : '';
  };
  return {
    lock(id) { holders.add(id); update(); },
    unlock(id) { holders.delete(id); update(); },
  };
})();
