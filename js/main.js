import { handlerSubmitBookingForm } from "./eventHandlersBooking.js";
import { handlerOpenMobileMenu } from "./eventHandlersMobileMenu.js";
import {
  initSwiper,
  swiperParameters,
  validatorMessageRule,
  validatorNameRule,
  validatorPhoneRule,
} from "./helpers.js";

const selectors = {
  openMobileMenuBtn: document.querySelector(".js-open-mobile-menu-btn"),
  bookingForm: document.querySelector(".js-booking-form"),
};

// Form validator
const validator = new JustValidate(selectors.bookingForm);

validator
  .addField("#name", validatorNameRule)
  .addField("#phone", validatorPhoneRule)
  .addField("#message", validatorMessageRule)
  .onSuccess(handlerSubmitBookingForm);

// Mobile menu
selectors.openMobileMenuBtn.addEventListener("click", handlerOpenMobileMenu);

// Swiper
let swiper = null;

swiper = initSwiper(swiper, ".swiper", swiperParameters);

window.addEventListener("resize", handleResizeWindow);

function handleResizeWindow() {
  if (swiper) return window.removeEventListener("resize", handleResizeWindow);

  swiper = initSwiper(swiper, ".swiper", swiperParameters);
}
