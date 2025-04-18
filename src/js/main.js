import JustValidate from 'just-validate';
import throttle from 'lodash.throttle';
import { handlerSubmitBookingForm } from './eventHandlersBooking.js';
import { handlerOpenMobileMenu } from './eventHandlersMobileMenu.js';
import {
  handlerScrollToTop,
  handlerShowBtnScrollToTop,
} from './eventHandlersScrollToTop.js';
import {
  validatorMessageRule,
  validatorNameRule,
  validatorPhoneRule,
} from './helpers.js';
import { initSwiper, swiperParameters } from './swiper.js';

const selectors = {
  openMobileMenuBtn: document.querySelector('.js-open-mobile-menu-btn'),
  bookingForm: document.querySelector('.js-booking-form'),
  scrollToTopBtn: document.querySelector('.js-scroll-to-top-btn'),
};

// Booking form validator
const validator = new JustValidate(selectors.bookingForm);

validator
  .addField('#name', validatorNameRule)
  .addField('#phone', validatorPhoneRule)
  .addField('#message', validatorMessageRule)
  .onSuccess(handlerSubmitBookingForm);

// Mobile menu
selectors.openMobileMenuBtn.addEventListener('click', handlerOpenMobileMenu);

// Swiper
let swiper = null;

swiper = initSwiper(swiper, '.swiper', swiperParameters);

window.addEventListener('resize', handleResizeWindow);

function handleResizeWindow() {
  if (swiper) return window.removeEventListener('resize', handleResizeWindow);

  swiper = initSwiper(swiper, '.swiper', swiperParameters);
}

// Scroll to top
handlerShowBtnScrollToTop();

window.addEventListener('scroll', throttle(handlerShowBtnScrollToTop, 200));
selectors.scrollToTopBtn.addEventListener('click', handlerScrollToTop);
