// import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'
const burger = document.querySelector('.burger')
const whiteBurger = document.querySelector('.burger__span')
const navbar = document.querySelector('.header__nav')
const navbarList = document.querySelector('.header__list')
const tabBtns = document.querySelectorAll('.project__item')
const accordionBtns = document.querySelectorAll('.accordion__item')

accordionBtns.forEach((e) => {
    e.addEventListener('click', () => {
        e.classList.toggle('open')
    })
})

burger.addEventListener('click', (e) => {
    navbar.classList.toggle('active')
    navbarList.classList.toggle('active')
    whiteBurger.classList.toggle('active')
})


tabBtns.forEach((e)=> {
    e.addEventListener('click', ()=> {
        if(e.classList.contains('active')) {
            e.classList.remove('active')
        }else {

            e.classList.add('active')
        }
    })

})

