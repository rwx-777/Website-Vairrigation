(() => {
  const nav = document.querySelector("nav");
  const menuButton = document.querySelector(".menu-toggle");
  const menu = document.getElementById("primary-navigation");
  if (!nav || !menuButton || !menu) return;

  const closeMenu = () => {
    nav.classList.remove("menu-open");
    menuButton.setAttribute("aria-expanded", "false");
  };

  const openMenu = () => {
    nav.classList.add("menu-open");
    menuButton.setAttribute("aria-expanded", "true");
  };

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    if (isOpen) {
      closeMenu();
      return;
    }
    openMenu();
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      menuButton.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target)) {
      closeMenu();
    }
  });
})();
