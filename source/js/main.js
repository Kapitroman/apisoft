import {mobileVhFix} from './utils/mobile-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {initMoveTo} from './modules/init-move-to';
// import {CustomSelect} from './modules/select/custom-select';
import {initUpload} from './modules/input-file/init-upload';
import {Burger} from './modules/burger';
import {checkThemeHeader} from './modules/check-theme-header';
import {blink} from './modules/blink';
import {initYM} from './modules/init-map';
import {initStagesProjectSlider} from './modules/init-stages-project-slider';
import {initAccordions} from './modules/accordions/init-accordion';
import {initAnimateCount} from './modules/init-animate-count';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  mobileVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initMoveTo();
    initModals();
    // const select = new CustomSelect();
    // select.init();
    initUpload();
    // const form = new Form();
    // window.form = form;
    // form.init();

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

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
