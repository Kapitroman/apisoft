const checkThemeHeader  = () => {
  const header = document.querySelector('[data-header]');

  if (!header) {
    return;
  }

  let special;

  if (header.classList.contains('header--special')) {
    special = true;
  }

  const checkTheme = () => {
    if (document.documentElement.scrollTop > header.offsetHeight) {
      if (special) {
        header.classList.remove('header--special');
      }
      header.classList.add('header--shadow');
    } else {
      if (special) {
        header.classList.add('header--special');
      }
      header.classList.remove('header--shadow');
    }
  }

  window.addEventListener('scroll', checkTheme);
};

export {checkThemeHeader};
