import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperFeedback = new Swiper('.js-ticker .swiper', {
  modules: [Navigation, Pagination, Keyboard, Autoplay],
  slidesPerView: 3,
  spaceBetween: 16,
  navigation: {
    nextEl: '.js-ticker .swiper-button-next',
    prevEl: '.js-ticker .swiper-button-prev',
    disabledClass: 'disabled',
  },
  pagination: {
    el: '.js-ticker .swiper-pagination',
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
  watchSlidesProgress: true,
  watchOverflow: true,
  breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetween: 68,
    },
  },
});