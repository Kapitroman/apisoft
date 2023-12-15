import {scrollTrigger} from './scroll-trigger';
import {animateCount} from './animate-count';
import {countData} from './user-data';

const initAnimateCount = () => {
  const digitalAchievements = document.querySelector('[data-digital-achievements]');

  if (!digitalAchievements) {
    return;
  }

  const digitalItems = Array.from(digitalAchievements.querySelectorAll('[data-digital-item]'));

  digitalItems.forEach((item, index) => scrollTrigger(item, {rootMargin: '-8%', cb: (item) => animateCount(item, countData[index])}));
};

export {initAnimateCount};
