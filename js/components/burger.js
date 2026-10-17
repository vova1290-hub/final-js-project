export const initBurger = () => {
  const menu = document.querySelector('.main-menu');
  const openButton = document.querySelector('.header__catalog-btn');
  const closeButton = document.querySelector('.main-menu__close');

  openButton.addEventListener('click', () => {
    menu.classList.toggle('main-menu--active');
  });

  closeButton.addEventListener('click', () => {
    menu.classList.remove('main-menu--active');
  });
};