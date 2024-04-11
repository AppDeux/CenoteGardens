let scrollPosition = 0;

document.addEventListener("astro:before-swap", (ev) => {
  // *Lista de paginas que mantendrán el scroll
  const exceptions = ["/", "/es/"];

  exceptions.includes(ev.to.pathname)
    ? (scrollPosition = window.scrollY)
    : (scrollPosition = 0);
});

document.addEventListener("astro:after-swap", () => {
  window.scrollTo(0, scrollPosition);
});
