export const initAccordion = () => {
  const buttons = document.querySelectorAll('.accordion__btn');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const isOpen = button.classList.contains('accordion__btn--active');

      buttons.forEach((item) => {
        item.classList.remove('accordion__btn--active');
      });

      if (!isOpen) {
        button.classList.add('accordion__btn--active');
      }
    });
  });
};