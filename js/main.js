// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   loop: true,
//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });


const swiperTop = new Swiper(".top__slider", {
  slidesPerView: 4.99,
  speed: 400,
  autoplay: {
        delay: 3000,            // інтервал між переходами (ms)
        disableOnInteraction: false,  // після свайпу не зупиняти
        pauseOnMouseEnter: true,      // пауза при наведенні миші
      },
  spaceBetween: 20,
  freeMode: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
   breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 2
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    1400: {
      slidesPerView: 4.5,
      spaceBetween: 20
    },
  }
});
swiperTop.start()

const burgerButton = document.querySelector('.menu__burger')
const menu = document.querySelector('.menu')
burgerButton.addEventListener('click', (e) => {
  document.body.classList.toggle('no-scroll')
  menu.classList.toggle('menu--active')
})