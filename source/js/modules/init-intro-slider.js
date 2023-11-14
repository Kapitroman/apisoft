const sliderSwiper = document.querySelector('.intro__slider');
let swiper;

const initSwiper = (slider) => {

  // eslint-disable-next-line no-undef

  swiper = new Swiper(slider, {
    slidesPerView: "auto",
    autoplay: {
      delay: 200,
      speed: 50,
      disableOnInteraction: false,
    },
    loop: true,
  });
};

const initIntroSlider = () => {
  if (!sliderSwiper) {
    return;
  }

  const slides = sliderSwiper.querySelectorAll('.swiper-slide');

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const shuffle = (someArray) => {
    const newSomeArray = someArray.slice();
    for (let i = newSomeArray.length - 1; i > 0; i--) {
      const randomPosition = Math.floor(Math.random() * i);
      [newSomeArray[i], newSomeArray[randomPosition]] = [newSomeArray[randomPosition], newSomeArray[i]];
    }

    return newSomeArray;
  };

  const getNewArray = (array, numberLength) => {
    return shuffle(array).slice(0, getRandomInt(1, numberLength));
  };

  const fillColorItems = () => {
    const items = getNewArray(Array.from(slides), 12);
    items.forEach((item) => item.classList.add('fill-color'));
    setTimeout( () => items.forEach((item) => item.classList.remove('fill-color')), 1450 );
  }

  setInterval(fillColorItems, 1500);
  initSwiper(sliderSwiper);
};

export {initIntroSlider};
