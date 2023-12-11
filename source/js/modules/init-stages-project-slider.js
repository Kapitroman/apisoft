const breakpoint = window.matchMedia('(max-width:479px)');
const sliderStagesProject = document.querySelector('.project-stages__content');
let swiper;

const initSwiper = (slider) => {
  // eslint-disable-next-line no-undef

  swiper = new Swiper(slider, {

    direction: "vertical",
      slidesPerView: 1,
      spaceBetween: 14,
      // effect: "fade",
  });

  const controlsStages = Array.from(document.querySelectorAll('.project-stages__control'));

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

const initStagesProjectSlider = () => {
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

export {initStagesProjectSlider};
