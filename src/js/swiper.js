import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export const swiperParameters = {
  modules: [Navigation, Pagination, Autoplay],
  direction: 'horizontal',
  loop: true,

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
};

export function initSwiper(swiper, swiperContainer, parameters) {
  if (!swiper && window.innerWidth >= 768) {
    return (swiper = new Swiper(swiperContainer, parameters));
  } else return null;
}
