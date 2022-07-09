// import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'
const burger = document.querySelector('.burger')
const whiteBurger = document.querySelector('.burger__span')
const navbar = document.querySelector('.header__nav')
const navbarList = document.querySelector('.header__list')

burger.addEventListener('click', (e) => {
    navbar.classList.toggle('active')
    navbarList.classList.toggle('active')
    whiteBurger.classList.toggle('active')
})



