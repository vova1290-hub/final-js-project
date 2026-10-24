import { addToBasket } from './basket.js';

export function createProductCard(product) {
  const template = document.querySelector('#product-card-template');
  const itemEl = template.content.querySelector('.catalog__item').cloneNode(true);
  const buyLink = itemEl.querySelector('.btn--icon');
  buyLink.dataset.id = product.id;

  itemEl.querySelector('.product-card__img').src = product.image.replace('../', '');
  itemEl.querySelector('.product-card__title').textContent = product.name;
  itemEl.querySelector('.product-card__old-number').textContent = product.price.old.toLocaleString('ru-RU');
  itemEl.querySelector('.product-card__price-number').textContent = product.price.new.toLocaleString('ru-RU');
  itemEl.querySelector('.btn--icon').dataset.id = product.id;
  itemEl.querySelectorAll('.tooltip__count')[0].textContent = product.availability.moscow;
  itemEl.querySelectorAll('.tooltip__count')[1].textContent = product.availability.orenburg;
  itemEl.querySelectorAll('.tooltip__count')[2].textContent = product.availability.saintPetersburg;

  buyLink.addEventListener('click', (event) => {
    event.preventDefault();
    addToBasket(buyLink.dataset.id);
  });

  return itemEl;
}