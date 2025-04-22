const scrollToTopBtn = document.querySelector('.js-scroll-to-top-btn');

let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

/**
 * Controls the visibility of the scrollToTopBtn button (by adding or removing the 'is-hidden' class to the button) based on the user's scrolling behavior.
 * The button becomes visible when the user scrolls up or reaches near the bottom of the page.
 * It is hidden at the top of the page and when scrolling down and not near the page end.
 */

export function handlerShowBtnScrollToTop() {
  const { scrollTop, offsetHeight, clientHeight } = document.documentElement;
  const currentScroll = window.pageYOffset || scrollTop;
  const isEndPage = offsetHeight - (scrollTop + clientHeight) < 100;

  if (isEndPage || (currentScroll < lastScrollTop && currentScroll > 100)) {
    scrollToTopBtn.classList.remove('is-hidden');
  } else {
    scrollToTopBtn.classList.add('is-hidden');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}

/**
 * Smoothly scrolls the page to the top. Uses the window.scrollTo method with smooth behavior to create a smooth scrolling effect.
 */

export function handlerScrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}
