const burgerBtn = document.querySelector('.js-burger-button');
const mobileMenu = document.querySelector('.js-mobile-menu');
const closeBtn = document.querySelector('.js-close-button');
const navList = document.querySelector('.js-mobile-menu-nav-list');


burgerBtn.addEventListener('click', () => {
  document.body.classList.add('js-no-scroll');
  mobileMenu.classList.add('js-is-open');
  burgerBtn.classList.add('js-rotate');
});
closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('js-is-open');
  document.body.classList.remove('js-no-scroll');
  burgerBtn.classList.remove('js-rotate');
});
navList.addEventListener('click', event => {
  if (event.target.classList.contains('js-mobile-menu-nav-item-link')) {
    document.body.classList.remove('js-no-scroll');
    mobileMenu.classList.remove('js-is-open');
    burgerBtn.classList.remove('js-rotate');
  }
  return;
});
