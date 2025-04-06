const selectors = {
  body: document.querySelector("body"),
  bookingContainer: document.querySelector(".js-booking-container"),
  mobileMenu: document.querySelector(".mobile-menu"),
  mobileMenuNavList: document.querySelector(".mobile-menu-nav-list"),
};

export function handlerClickBookingBtn() {
  if (!selectors.mobileMenu?.classList.contains("is-hidden")) {
    handlerCloseMobileMenu();
  }

  selectors.bookingContainer.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export function handlerOpenMobileMenu() {
  selectors.mobileMenu.classList.remove("is-hidden");
  selectors.body.classList.add("mobile-menu-open");

  selectors.mobileMenuNavList.addEventListener(
    "click",
    handlerClickMobileMenuNavLink
  );
}

export function handlerCloseMobileMenu() {
  selectors.mobileMenu.classList.add("is-hidden");
  selectors.body.classList.remove("mobile-menu-open");

  selectors.mobileMenuNavList.removeEventListener(
    "click",
    handlerClickMobileMenuNavLink
  );
}

export function handlerClickMobileMenuNavLink(evt) {
  if (evt.target.closest(".mobile-menu-nav-item")) {
    handlerCloseMobileMenu();
  }
}
