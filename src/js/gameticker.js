import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperFeedback = new Swiper('.ticker .swiper', {
  modules: [Navigation, Pagination, Keyboard, Autoplay],
  slidesPerView: 3,
  spaceBetween: 16,
  navigation: {
    nextEl: '.ticker .swiper-button-next',
    prevEl: '.ticker .swiper-button-prev',
    disabledClass: 'disabled',
  },
  pagination: {
    el: '.ticker .swiper-pagination',
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
  breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetween: 68,
    },
  },
});