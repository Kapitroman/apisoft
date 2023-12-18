import {mobileVhFix} from './utils/mobile-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {initMoveTo} from './modules/init-move-to';
import {initUpload} from './modules/input-file/init-upload';
import {Burger} from './modules/burger';
import {checkThemeHeader} from './modules/check-theme-header';
import {blink} from './modules/blink';
import {initYM} from './modules/init-map';
import {initStagesProjectSlider} from './modules/init-stages-project-slider';
import {initAccordions} from './modules/accordions/init-accordion';
import {initAnimateCount} from './modules/init-animate-count';

window.addEventListener('DOMContentLoaded', () => {

  mobileVhFix();

  window.addEventListener('load', () => {
    initMoveTo();
    initModals();
    initUpload();

    const burger = new Burger();
    burger.init();

    initAccordions()
    checkThemeHeader();
    blink();
    initYM();
    initStagesProjectSlider();
    initAnimateCount();
  });
});
