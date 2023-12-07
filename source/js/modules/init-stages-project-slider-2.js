const breakpoint = window.matchMedia('(max-width:479px)');
const sliderStagesProject = document.querySelector('.project-stages-mod__content');
let swiper;

const initSwiper = (slider) => {
  // eslint-disable-next-line no-undef

  swiper = new Swiper(slider, {

    direction: "vertical",
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,

    coverflowEffect: {
      rotate: -20,
      stretch: -5,
      depth: 100,
      modifier: 1, //3
      scale: 1,
    },
    slidesPerView: 1.5, //1.5
  });

  const controlsStages = Array.from(document.querySelectorAll('.project-stages-mod__control'));

  const onClickControlStage = (evt) => {
    const indexButton = evt.target.closest('button').getAttribute('data-stage');
    swiper.slideTo(indexButton, 800);
  };

  controlsStages.forEach((item) => {
    item.addEventListener('click', onClickControlStage);
  })

  const setActiveClass = () => {
    const index = swiper.activeIndex;
    controlsStages.forEach((item) => item.classList.remove('is-active'));
    controlsStages[index].classList.add('is-active');
  }

  swiper.on('realIndexChange', setActiveClass);
};

const initStagesProjectSliderMod = () => {
  if (!sliderStagesProject ) {
    return;
  }

  const breakpointChecker = () => {
    if (breakpoint.matches) {
      if (swiper) {
        swiper.destroy(true, true);
      }
    } else {
      initSwiper(sliderStagesProject);
    }
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};

export {initStagesProjectSliderMod};
