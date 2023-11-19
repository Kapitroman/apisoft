const blink = () => {
  const breakpoint = window.matchMedia(`(min-width: 768px)`);
  const blinkContainer = document.querySelector('.intro__ticker');

  if(!blinkContainer) {
    return;
  }

  const blinkItems = Array.from(blinkContainer.querySelectorAll('.intro-item:not(.intro-item--icon)'));

  let leftBorder;
  let rightBorder;

  const fillColorItems = () => {

    for (let i = 0; i < blinkItems.length; i++) {
      let coords = blinkItems[i].getBoundingClientRect();
      if (coords.left > leftBorder & coords.left < rightBorder) {
        let currentItem = blinkItems[i];
        currentItem.classList.add('fill-color');
        setTimeout( () => currentItem.classList.remove('fill-color'), 1450 );
        break;
      }
    }
  }

  const breakpointChecker = () => {
    if (breakpoint.matches) {
      leftBorder = document.documentElement.clientWidth / 4;
      rightBorder = leftBorder + leftBorder * 0.15;
    } else {
      leftBorder = document.documentElement.clientWidth / 4;
      rightBorder = leftBorder + leftBorder * 0.4;
    }
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();

  setInterval(fillColorItems, 500);
};

export {blink};
