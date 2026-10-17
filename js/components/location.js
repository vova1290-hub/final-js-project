export const initLocation = () => {
  const cityButton = document.querySelector('.location__city');
  const cityName = document.querySelector('.location__city-name');
  const cityLinks = document.querySelectorAll('.location__sublink');

  cityButton.addEventListener('click', () => {
    cityButton.classList.toggle('location__city--active');
  });

  cityLinks.forEach((link) => {
    link.addEventListener('click', () => {
      cityName.textContent = link.textContent;
      cityButton.classList.remove('location__city--active');
    });
  });
};