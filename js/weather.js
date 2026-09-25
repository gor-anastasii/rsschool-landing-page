window.Weather = (() => {
  const cache = new Map();
  const CODES = [
    [[0], 'Ясно'], [[1], 'Малооблачно'], [[2], 'Переменная облачность'], [[3], 'Пасмурно'],
    [[45, 48], 'Туман'], [[51, 53, 55, 56, 57], 'Морось'], [[61, 63, 65, 66, 67], 'Дождь'],
    [[71, 73, 75, 77], 'Снег'], [[80, 81, 82], 'Ливень'], [[85, 86], 'Снегопад'], [[95, 96, 99], 'Гроза'],
  ];
  const label = (code) => (CODES.find(([list]) => list.includes(code)) || [null, 'Без осадков'])[1];

  async function get(lat, lon) {
    const key = `${lat},${lon}`;
    if (cache.has(key)) return cache.get(key);
    const promise = (async () => {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 7000);
      try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&timezone=auto`;
        const res = await fetch(url, { signal: ctrl.signal });
        if (!res.ok) throw new Error(res.status);
        const { current } = await res.json();
        return { temp: Math.round(current.temperature_2m), text: label(current.weather_code) };
      } finally { clearTimeout(timer); }
    })();
    cache.set(key, promise);
    promise.catch(() => cache.delete(key));
    return promise;
  }

  const fmt = (t) => (t > 0 ? '+' : t < 0 ? '−' : '') + Math.abs(t) + ' °C';

  const list = document.getElementById('weather-list');
  if (list && window.DRIFT_DATA) {
    const ids = ['iceland', 'santorini', 'maldives', 'dolomites', 'sahara', 'lofoten'];
    const tours = ids.map((id) => window.DRIFT_DATA.tours.find((t) => t.id === id)).filter(Boolean);
    list.innerHTML = tours.map((t) => `
      <li class="weather__item" data-id="${t.id}">
        <span class="weather__place">${t.title}<small>${t.country}</small></span>
        <span class="weather__temp">…</span>
        <span class="weather__text">Загружаем</span>
      </li>`).join('');
    tours.forEach((t) => {
      const item = list.querySelector(`[data-id="${t.id}"]`);
      get(t.coords.lat, t.coords.lon).then((w) => {
        item.querySelector('.weather__temp').textContent = fmt(w.temp);
        item.querySelector('.weather__text').textContent = w.text;
      }).catch(() => {
        item.querySelector('.weather__temp').textContent = '—';
        item.querySelector('.weather__text').textContent = 'Нет данных';
      });
    });
  }
  return { get, fmt };
})();
