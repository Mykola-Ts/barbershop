import { handlerSubmitBookingForm } from "./eventHandlersBooking.js";
import { handlerOpenMobileMenu } from "./eventHandlersMobileMenu.js";
import {
  validatorMessageRule,
  validatorNameRule,
  validatorPhoneRule,
} from "./validatorRules.js";

const selectors = {
  openMobileMenuBtn: document.querySelector(".js-open-mobile-menu-btn"),
  bookingForm: document.querySelector(".js-booking-form"),
};
const validator = new JustValidate(selectors.bookingForm);

validator
  .addField("#name", validatorNameRule)
  .addField("#phone", validatorPhoneRule)
  .addField("#message", validatorMessageRule)
  .onSuccess(handlerSubmitBookingForm);

selectors.openMobileMenuBtn.addEventListener("click", handlerOpenMobileMenu);

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
