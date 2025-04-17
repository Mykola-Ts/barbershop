const selectors = {
  body: document.querySelector("body"),
  mobileMenu: document.querySelector(".js-mobile-menu"),
  closeMobileMenuBtn: document.querySelector(".js-close-mobile-menu-btn"),
  mobileMenuNavList: document.querySelector(".js-mobile-menu-nav-list"),
  mobileMenuBookingBtn: document.querySelector(".js-mobile-menu-booking-btn"),
};

export function handlerOpenMobileMenu() {
  selectors.mobileMenu.classList.remove("is-hidden");
  selectors.body.classList.add("mobile-menu-open");

  selectors.closeMobileMenuBtn.addEventListener(
    "click",
    handlerCloseMobileMenu
  );
  selectors.mobileMenuNavList.addEventListener(
    "click",
    handlerClickMenuNavLink
  );
  selectors.mobileMenu.addEventListener(
    "click",
    handlerCloseMenuByClickBackdrop
  );
  selectors.mobileMenuBookingBtn.addEventListener(
    "click",
    handlerCloseMobileMenu
  );
}

function handlerCloseMobileMenu() {
  selectors.closeMobileMenuBtn.removeEventListener(
    "click",
    handlerCloseMobileMenu
  );
  selectors.mobileMenuNavList.removeEventListener(
    "click",
    handlerClickMenuNavLink
  );
  selectors.mobileMenu.removeEventListener(
    "click",
    handlerCloseMenuByClickBackdrop
  );
  selectors.mobileMenuBookingBtn.removeEventListener(
    "click",
    handlerCloseMobileMenu
  );

  selectors.mobileMenu.classList.add("is-hidden");
  selectors.body.classList.remove("mobile-menu-open");
}

function handlerCloseMenuByClickBackdrop(evt) {
  if (evt.currentTarget === evt.target) {
    handlerCloseMobileMenu();
  }
}

function handlerClickMenuNavLink(evt) {
  if (evt.target.closest(".mobile-menu-nav-item")) {
    handlerCloseMobileMenu();
  }
}
