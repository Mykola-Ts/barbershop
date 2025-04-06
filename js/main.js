import {
  handlerClickBookingBtn,
  handlerOpenMobileMenu,
  handlerCloseMobileMenu,
} from "./eventHandlers.js";

const selectors = {
  bookingBtns: document.querySelectorAll(".js-booking-btn"),
  openMobileMenuBtn: document.querySelector(".js-open-mobile-menu-btn"),
  closeMobileMenuBtn: document.querySelector(".js-close-mobile-menu-btn"),
};

selectors.bookingBtns.forEach((btn) => {
  btn.addEventListener("click", handlerClickBookingBtn);
});

selectors.openMobileMenuBtn.addEventListener("click", handlerOpenMobileMenu);
selectors.closeMobileMenuBtn.addEventListener("click", handlerCloseMobileMenu);
