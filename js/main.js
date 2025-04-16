import { handlerSubmitBookingForm } from "./eventHandlersBooking.js";
import { handlerOpenMobileMenu } from "./eventHandlersMobileMenu.js";
import {
  handlerScrollToTop,
  handlerShowBtnScrollToTop,
} from "./eventHandlersScrollToTop.js";
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
  scrollToTopBtn: document.querySelector(".js-scroll-to-top-btn"),
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

// Scroll to top
handlerShowBtnScrollToTop();

window.addEventListener("scroll", handlerShowBtnScrollToTop);
selectors.scrollToTopBtn.addEventListener("click", handlerScrollToTop);
