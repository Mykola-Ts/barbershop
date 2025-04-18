const scrollToTopBtn = document.querySelector('.js-scroll-to-top-btn');

let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

export function handlerShowBtnScrollToTop() {
  const { scrollTop, offsetHeight, clientHeight } = document.documentElement;
  const currentScroll = window.pageYOffset || scrollTop;
  const isEndPage =
    Math.ceil(offsetHeight) - Math.ceil(currentScroll + clientHeight) < 2;

  if (isEndPage || (currentScroll < lastScrollTop && currentScroll > 100)) {
    scrollToTopBtn.classList.remove('is-hidden');
  } else {
    scrollToTopBtn.classList.add('is-hidden');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}

export function handlerScrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}
