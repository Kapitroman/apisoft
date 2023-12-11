import {scrollTrigger} from './scroll-trigger';
import {animateCount} from './animate-count';
import {countData} from './user-data';

const initAnimateCount = () => {
  const digitalAchievements = document.querySelector('[data-digital-achievements]');

  if (!digitalAchievements) {
    return;
  }

  const digitalItems = Array.from(digitalAchievements.querySelectorAll('[data-digital-item]'));
  digitalItems.forEach((item) => item.textContent = 0);
  const callbackAnimation = () => digitalItems.forEach((item, index) => animateCount(item, countData[index]));

  scrollTrigger(digitalAchievements, {
    rootMargin: '-30%',
    cb: callbackAnimation,
  });
};

export {initAnimateCount};
