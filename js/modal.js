window.TourModal = (() => {
  const nf = new Intl.NumberFormat('ru-RU');
  const money = (n) => nf.format(n).replace(/\s/g, '\u202f') + '\u00a0€';
  const daysWord = (n) => (n % 10 === 1 && n % 100 !== 11 ? 'день' : [2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100) ? 'дня' : 'дней');
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const signed = (n) => (n === 0 ? 'включено' : (n > 0 ? '+' : '−') + money(Math.abs(n)));

  let root, dialog, tour, opener, closeTimer;
  const selection = {};

  function build() {
    root = document.createElement('div');
    root.className = 'modal';
    root.hidden = true;
    root.innerHTML = `
      <div class="modal__dialog glass" role="dialog" aria-modal="true" aria-labelledby="modal-title" tabindex="-1">
        <button class="modal__close icon-btn" type="button" aria-label="Закрыть окно">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
        <div class="modal__scroll"></div>
      </div>`;
    document.body.appendChild(root);
    dialog = root.querySelector('.modal__dialog');
    root.addEventListener('click', (e) => { if (e.target === root) close(); });
    root.querySelector('.modal__close').addEventListener('click', close);
    document.addEventListener('keydown', onKey);
  }

  function onKey(e) {
    if (root.hidden) return;
    if (e.key === 'Escape') { close(); return; }
    if (e.key !== 'Tab') return; 
    const items = [...dialog.querySelectorAll('button, a[href], input:not([disabled])')].filter((el) => el.offsetParent !== null);
    if (!items.length) return;
    const first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  function groupHtml(g) {
    const type = g.type === 'checkbox' ? 'checkbox' : 'radio';
    const items = g.choices.map((c, i) => {
      const meta = g.id === 'date' ? c.hint : c.hint;
      const price = g.id === 'date' ? (c.price === 0 ? '' : signed(c.price)) : (c.id === 'base' ? '' : signed(c.price));
      return `
        <label class="option">
          <input type="${type}" name="${g.id}" value="${c.id}" ${type === 'radio' && i === 0 ? 'checked' : ''}>
          <span class="option__body"><span class="option__label">${esc(c.label)}</span><span class="option__hint">${esc(meta)}</span></span>
          ${price ? `<span class="option__price">${price}</span>` : ''}
        </label>`;
    }).join('');
    return `<fieldset class="param" data-group="${g.id}"><legend class="param__legend">${esc(g.label)}</legend><div class="param__grid">${items}</div></fieldset>`;
  }

  function fill(t) {
    tour = t;
    t.options.forEach((g) => { selection[g.id] = g.type === 'checkbox' ? new Set() : g.choices[0].id; });
    dialog.querySelector('.modal__scroll').innerHTML = `
      <div class="modal__media"><img src="${t.image}" alt="${esc(t.imageAlt)}" width="720" height="900"></div>
      <div class="modal__body">
        <p class="modal__place">${esc(t.country)}, лучшее время: ${esc(t.bestSeason)}</p>
        <h2 class="modal__title" id="modal-title">${esc(t.title)}</h2>
        <p class="modal__text">${esc(t.details)}</p>
        <ul class="modal__facts">${t.highlights.map((h) => `<li>${esc(h)}</li>`).join('')}</ul>
        <p class="modal__weather" id="modal-weather">Погода на месте: загружаем…</p>
        <form class="params" id="params" onsubmit="return false">${t.options.map(groupHtml).join('')}</form>
        <div class="summary" aria-live="polite">
          <div class="summary__row"><span class="summary__label">Длительность</span><span class="summary__value" id="sum-days"></span></div>
          <div class="summary__row"><span class="summary__label">Отправление</span><span class="summary__value" id="sum-date"></span></div>
          <div class="summary__row"><span class="summary__label">Ваш выбор</span><span class="summary__value summary__value--small" id="sum-choice"></span></div>
          <div class="summary__total"><span>Итого на человека</span><strong id="sum-price"></strong></div>
          <a class="btn btn--primary" id="sum-cta" href="#">Оставить заявку</a>
        </div>
      </div>`;
    const form = dialog.querySelector('#params');
    form.addEventListener('change', (e) => {
      const input = e.target;
      if (input.type === 'checkbox') input.checked ? selection[input.name].add(input.value) : selection[input.name].delete(input.value);
      else selection[input.name] = input.value;
      recalc();
    });
    recalc();
    window.Weather.get(t.coords.lat, t.coords.lon)
      .then((w) => { const el = document.getElementById('modal-weather'); if (el && tour === t) el.textContent = `Погода на месте сейчас: ${window.Weather.fmt(w.temp)}, ${w.text.toLowerCase()}`; })
      .catch(() => { const el = document.getElementById('modal-weather'); if (el && tour === t) el.textContent = 'Погода на месте: данные недоступны'; });
  }

  function recalc() {
    let price = tour.price, days = tour.days;
    const names = [];
    let date = null;
    tour.options.forEach((g) => {
      const sel = selection[g.id];
      const chosen = g.type === 'checkbox' ? g.choices.filter((c) => sel.has(c.id)) : g.choices.filter((c) => c.id === sel);
      chosen.forEach((c) => {
        price += c.price; days += c.days || 0;
        if (g.id === 'date') date = c;
        else if (c.id !== 'base') names.push(c.label);
      });
    });
    const spots = date.spots;
    const $ = (id) => dialog.querySelector(id);
    $('#sum-days').textContent = `${days} ${daysWord(days)}`;
    $('#sum-date').textContent = `${date.label}, ${spots <= 3 ? `осталось ${spots} ${spots === 1 ? 'место' : 'места'}` : `свободно ${spots} мест`}`;
    $('#sum-date').classList.toggle('is-low', spots <= 3);
    $('#sum-choice').textContent = names.join(', ') || 'Базовая программа';
    $('#sum-price').textContent = money(price);
    const subject = encodeURIComponent(`Заявка: ${tour.title}, ${date.label}`);
    const body = encodeURIComponent(`Маршрут: ${tour.title} (${tour.country})\nОтправление: ${date.label}\nДлительность: ${days} ${daysWord(days)}\nВыбор: ${names.join(', ') || 'базовая программа'}\nИтого на человека: ${money(price)}`);
    $('#sum-cta').href = `mailto:example@example.com?subject=${subject}&body=${body}`;
  }

  function open(t, from) {
    if (!root) build();
    clearTimeout(closeTimer);
    opener = from || document.activeElement;
    fill(t);
    root.hidden = false;
    window.scrollLock.lock('modal');
    dialog.querySelector('.modal__scroll').scrollTop = 0;
    requestAnimationFrame(() => { root.classList.add('is-open'); dialog.focus(); });
  }

  function close() {
    if (!root || root.hidden) return;
    root.classList.remove('is-open');
    window.scrollLock.unlock('modal');
    closeTimer = setTimeout(() => { root.hidden = true; }, 260);
    if (opener && opener.focus) opener.focus();
  }

  return { open, close };
})();
