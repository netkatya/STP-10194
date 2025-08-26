import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperFeedback = new Swiper('.js-gallery .swiper', {
  modules: [Navigation, Pagination, Keyboard, Autoplay, EffectCoverflow],
  spaceBetween: 24,
  navigation: {
    nextEl: '.js-gallery .swiper-button-next',
    prevEl: '.js-gallery .swiper-button-prev',
    disabledClass: 'disabled',
  },
  pagination: {
    el: '.js-gallery .swiper-pagination',
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    },
autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 3,
    coverflowEffect: {
        rotate: 25,
        stretch: 0,
        depth: 180,
        modifier: 2,
        slideShadows: false,
    },
  watchSlidesProgress: true,
  watchOverflow: true,
  breakpoints: {
    1200: {
      spaceBetween: 48,
    },
  },
});