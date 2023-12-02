const noneClickLinkProject = () => {
  const projectLinks = document.querySelectorAll('[data-projects-item]');

  if (!projectLinks.length) {
    return;
  }

  projectLinks.forEach( (item) => item.addEventListener('click', (evt) => evt.preventDefault()) );
}

export {noneClickLinkProject};
