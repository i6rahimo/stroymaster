import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },  
  });
  
const teamslider = new Swiper ('.team__slide', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  direction: 'horizontal',
  loop: true,
  slideClass: 'team__slider',
  wrapperClass: 'team__slider-wrapper',
  pagination: {
    el: '.team__swiper-pagination, .team__swiper-pagination2',
    type: 'fraction',
  },
  pagination: {
    el: '.team__swiper-pagination2',
    type: 'bullets',
    clickable: true
  },
  navigation: {
    nextEl: '.team-button-prev',
    prevEl: '.team-button-next',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    420: {
    slidesPerView: 'auto',
    }
  }
})
