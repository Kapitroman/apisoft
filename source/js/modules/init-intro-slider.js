const sliderSwiper = document.querySelector('.intro__slider');
let swiper;

const initSwiper = (slider) => {
  //let swiperWidth = parseInt(getComputedStyle(slider).width, 10) / 48;
  //const parent = slider.closest('section');
  // eslint-disable-next-line no-undef
  swiper = new Swiper(slider, {
    slidesPerView: "auto",
    spaceBetween: 5,

    autoplay: {
      delay: 200,
      speed: 50,
      disableOnInteraction: false,
    },
    loop: true,

    /*
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: swiperWidth,
      },
    },
    */
    /*
    navigation: {
      nextEl: parent.querySelector('.reviews__button-next'),
      prevEl: parent.querySelector('.reviews__button-prev'),
    }
    */
  });
};

const initIntroSlider = () => {
  if (!sliderSwiper) {
    return;
  }

  initSwiper(sliderSwiper);
};

export {initIntroSlider};
