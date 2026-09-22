(() => {
  const KEY = "drift-theme";
  const root = document.documentElement;
  const toggle = document.querySelector(".theme-toggle");

  const apply = (theme) => {
    root.setAttribute("data-theme", theme);
    if (toggle) toggle.setAttribute("aria-checked", String(theme === "dark"));
  };
  const save = (theme) => {
    try {
      localStorage.setItem(KEY, theme);
    } catch (e) {
      console.log("хранилище недоступно");
    }
  };

  apply(root.getAttribute("data-theme") === "dark" ? "dark" : "light");

  if (toggle) {
    toggle.addEventListener("click", () => {
      const next =
        root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      apply(next);
      save(next);
    });
  }

  window.addEventListener("storage", (e) => {
    if (e.key === KEY && (e.newValue === "dark" || e.newValue === "light"))
      apply(e.newValue);
  });
})();
