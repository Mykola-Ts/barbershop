import Swiper from 'swiper';
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
  Keyboard,
} from 'swiper/modules';

export const swiperParameters = {
  modules: [Navigation, Pagination, Autoplay, EffectCoverflow, Keyboard],
  direction: 'horizontal',
  loop: true,
  effect: 'coverflow',

  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
};

/**
 * Initializes and returns a Swiper instance if it has not been initialized yet and the viewport width is at least 768px. If the Swiper is already initialized or the condition is not met, returns null.
 *
 * @param {Object | null} swiper An existing Swiper instance or null
 * @param {string | HTMLElement} swiperContainer A CSS selector string or HTMLElement representing the Swiper container
 * @param {Object} parameters Configuration options for initializing the Swiper instance
 *
 * @returns {Object | null} A new Swiper instance if initialized, otherwise null
 */

export function initSwiper(swiper, swiperContainer, parameters) {
  if (!swiper && window.innerWidth >= 768) {
    return (swiper = new Swiper(swiperContainer, parameters));
  } else return null;
}
