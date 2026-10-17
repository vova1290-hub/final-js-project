import { createProductCard } from './card.js';

export async function initCatalog() {
  const list = document.querySelector('.catalog__list');

  const response = await fetch('./data/data.json');
  const products = await response.json();

  list.innerHTML = '';

  for (const product of products) {
    const card = createProductCard(product);
    list.append(card);
  }
}