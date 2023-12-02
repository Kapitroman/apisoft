const noneClickLinkTech = () => {
  const techLinks = document.querySelector('[data-tech-link]');

  if (!techLinks) {
    return;
  }

  const links = Array.from(techLinks.querySelectorAll('.partners-item'));

  links.forEach( (item) => item.addEventListener('click', (evt) => evt.preventDefault()) );
}

export {noneClickLinkTech};
