const scrollToTopBtn = document.querySelector(".js-scroll-to-top-btn");

export function handlerShowBtnScrollToTop() {
  window.scrollY > 100
    ? scrollToTopBtn.classList.remove("is-hidden")
    : scrollToTopBtn.classList.add("is-hidden");
}

export function handlerScrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
