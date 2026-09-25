(() => {
  const { categories, tours } = window.DRIFT_DATA;
  const tabsEl = document.getElementById('tabs');
  const cardsEl = document.getElementById('cards');
  const moreBtn = document.getElementById('show-more');
  const statusEl = document.getElementById('catalog-status');
  const mq = window.matchMedia('(max-width: 768px)');
  const nf = new Intl.NumberFormat('ru-RU');
  const money = (n) => nf.format(n).replace(/\s/g, '\u202f') + '\u00a0€';
  const daysWord = (n) => (n % 10 === 1 && n % 100 !== 11 ? 'день' : [2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100) ? 'дня' : 'дней');
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const initialCount = () => (mq.matches ? 4 : 8);

  const ALL = 'all';
  const state = { category: ALL, expanded: false };

  const listFor = (id) => {
    if (id !== ALL) return tours.filter((t) => t.category === id);
    const groups = categories.map((c) => tours.filter((t) => t.category === c.id));
    const mixed = [];
    for (let i = 0; groups.some((g) => i < g.length); i++) groups.forEach((g) => g[i] && mixed.push(g[i]));
    return mixed;
  };
  const tabs = [ { id: ALL, title: 'Все' }, ...categories];
  tabsEl.innerHTML = tabs.map((c) => `<button class="tab" type="button" data-category="${c.id}" aria-pressed="false">${esc(c.title)} <span class="tab__count">${listFor(c.id).length}</span></button>`).join('');

  const cardHtml = (t) => `
    <li>
      <article class="card">
        <img class="card__img" src="${t.image}" alt="${esc(t.imageAlt)}" width="720" height="900" loading="lazy">
        <div class="card__panel">
          <p class="card__place">${esc(t.country)}</p>
          <h3 class="card__title">${esc(t.title)}</h3>
          <p class="card__text">${esc(t.description)}</p>
          <div class="card__meta"><span class="chip">${t.days} ${daysWord(t.days)}</span><span class="card__price">от ${money(t.price)}</span></div>
        </div>
        <button class="card__open" type="button" data-id="${t.id}" aria-label="Открыть маршрут: ${esc(t.title)}"></button>
      </article>
    </li>`;

  function render() {
    const list = listFor(state.category);
    const shown = state.expanded ? list.length : Math.min(initialCount(), list.length);
    cardsEl.innerHTML = list.slice(0, shown).map(cardHtml).join('');
    tabsEl.querySelectorAll('.tab').forEach((tab) => {
      const active = tab.dataset.category === state.category;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-pressed', String(active));
    });
    moreBtn.hidden = shown >= list.length;
    statusEl.textContent = `Показано ${shown} из ${list.length}`;
  }

  tabsEl.addEventListener('click', (e) => {
    const tab = e.target.closest('.tab');
    if (!tab || tab.dataset.category === state.category) return;
    state.category = tab.dataset.category;
    state.expanded = false; 
    render();
  });
  moreBtn.addEventListener('click', () => { state.expanded = true; render(); });
  cardsEl.addEventListener('click', (e) => {
    const btn = e.target.closest('.card__open');
    if (!btn) return;
    window.TourModal.open(tours.find((t) => t.id === btn.dataset.id), btn);
  });
  mq.addEventListener('change', render);

  render();
})();
