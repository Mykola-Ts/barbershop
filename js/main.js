import { handlerSubmitBookingForm } from "./eventHandlersBooking.js";
import { handlerOpenMobileMenu } from "./eventHandlersMobileMenu.js";

const selectors = {
  openMobileMenuBtn: document.querySelector(".js-open-mobile-menu-btn"),
  bookingForm: document.querySelector(".js-booking-form"),
};

selectors.openMobileMenuBtn.addEventListener("click", handlerOpenMobileMenu);
selectors.bookingForm.addEventListener("submit", handlerSubmitBookingForm);
