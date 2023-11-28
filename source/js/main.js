import {mobileVhFix} from './utils/mobile-vh-fix.js';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
// import {CustomSelect} from './modules/select/custom-select';
// import {uploadFile, uploadImageDrop, uploadFileDrop} from './modules/input-file/init-upload';
import {initUpload} from './modules/input-file/init-upload';
import {Burger} from './modules/burger';
import {checkThemeHeader} from './modules/check-theme-header';
import {blink} from './modules/blink';
import {initYM} from './modules/init-map';
import {initTabs} from './modules/init-tabs';

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
    initModals();
    // uploadFile();
    // uploadImageDrop();
    // uploadFileDrop();
    // const select = new CustomSelect();
    // select.init();
    initUpload();
    const form = new Form();
    window.form = form;
    form.init();

    const burger = new Burger();
    burger.init();

    checkThemeHeader();
    blink();
    initTabs();
    initYM();

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
