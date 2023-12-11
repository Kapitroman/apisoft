const fps = 12;
const fpsInterval = 1000 / fps;

const animateCount = (el, values) => {
  const frameValues = values;
  const count = frameValues.length;
  const countElement = el;

  let now;
  let then = Date.now();
  let elapsed;
  let i = 0;

  const draw = (frame) => {
    countElement.textContent = frame;
  };

  const tick = () => {
    if (i < count) {
      requestAnimationFrame(tick);
    }

    now = Date.now();
    elapsed = now - then;

    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval);
      draw(frameValues[i]);
      i++;
    }
  };
  requestAnimationFrame(tick);
};

export {animateCount};
