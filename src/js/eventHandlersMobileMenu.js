const selectors = {
  body: document.body,
  mobileMenu: document.querySelector('.js-mobile-menu'),
  closeMobileMenuBtn: document.querySelector('.js-close-mobile-menu-btn'),
  mobileMenuNavList: document.querySelector('.js-mobile-menu-nav-list'),
  mobileMenuBookingBtn: document.querySelector('.js-mobile-menu-booking-btn'),
};

/**
 * Opens the mobile menu by removing the 'is-hidden' class and adding event listeners for closing it.
 *
 * Adds click event listeners to:
 * - the close button ('closeMobileMenuBtn');
 * - the navigation list ('mobileMenuNavList');
 * - the menu backdrop ('mobileMenu');
 * - the online booking button ('mobileMenuBookingBtn').
 *
 * Also adds the 'mobile-menu-open' class to the <body> element to prevent background scrolling.
 */

export function handlerOpenMobileMenu() {
  selectors.mobileMenu.classList.remove('is-hidden');
  selectors.body.classList.add('mobile-menu-open');

  selectors.closeMobileMenuBtn.addEventListener(
    'click',
    handlerCloseMobileMenu
  );
  selectors.mobileMenuNavList.addEventListener(
    'click',
    handlerClickMenuNavLink
  );
  selectors.mobileMenu.addEventListener(
    'click',
    handlerCloseMenuByClickBackdrop
  );
  selectors.mobileMenuBookingBtn.addEventListener(
    'click',
    handlerCloseMobileMenu
  );
}

/**
 * Closes the mobile menu by adding the 'is-hidden' class and removing related event listeners.
 * Also removes the 'mobile-menu-open' class from the <body> to restore normal scrolling.
 */

function handlerCloseMobileMenu() {
  selectors.closeMobileMenuBtn.removeEventListener(
    'click',
    handlerCloseMobileMenu
  );
  selectors.mobileMenuNavList.removeEventListener(
    'click',
    handlerClickMenuNavLink
  );
  selectors.mobileMenu.removeEventListener(
    'click',
    handlerCloseMenuByClickBackdrop
  );
  selectors.mobileMenuBookingBtn.removeEventListener(
    'click',
    handlerCloseMobileMenu
  );

  selectors.mobileMenu.classList.add('is-hidden');
  selectors.body.classList.remove('mobile-menu-open');
}

/**
 * Handles a mouse click on the backdrop to close the mobile menu.
 * Calls the handlerCloseMobileMenu function only if the click originated from the currentTarget element itself, not its child elements.
 *
 * @param {MouseEvent} evt The mouse event object
 */

function handlerCloseMenuByClickBackdrop(evt) {
  if (evt.currentTarget === evt.target) {
    handlerCloseMobileMenu();
  }
}

/**
 * Handles a mouse click on a mobile menu nav-link to close the mobile menu.
 * If the clicked element or its ancestors have the class `.js-mobile-menu-nav-item`, it calls the handlerCloseMobileMenu function to close the mobile menu.
 *
 * @param {MouseEvent} evt The mouse event object
 */

function handlerClickMenuNavLink(evt) {
  if (evt.target.closest('.js-mobile-menu-nav-item')) {
    handlerCloseMobileMenu();
  }
}
