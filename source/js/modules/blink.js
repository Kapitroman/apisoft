const blink = () => {
  const blinkContainer = document.querySelector('.intro__ticker');

  if(!blinkContainer) {
    return;
  }

  const widthWindow = document.documentElement.clientWidth;
  const leftBorder = widthWindow / 4;
  let rightBorder;

  if (widthWindow > 767) {
    rightBorder = leftBorder + leftBorder * 0.15;
  } else {
    rightBorder = leftBorder + leftBorder * 0.4;
  }

  const blinkItems = Array.from(blinkContainer.querySelectorAll('.intro-item:not(.intro-item--icon)'));

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

  setInterval(fillColorItems, 500);
};

export {blink};
