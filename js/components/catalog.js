import { createProductCard } from './card.js';

export async function initCatalog() {
  const list = document.querySelector('.catalog__list');

  const response = await fetch('./data/data.json');
  const products = await response.json();
  const checkFields = document.querySelectorAll('.catalog-form .custom-checkbox__field');

  for (const checkField of checkFields) {
    const box = checkField.parentElement;
    const countEl = box.querySelector('.custom-checkbox__count');

    let count = 0;

    for (const product of products) {
        if (product.type.includes(checkField.value)) {
            count = count + 1;
        }
    }
    countEl.textContent = count;
  }
  renderCatalog(list, products);

}

export function renderCatalog(list, products) {
    list.innerHTML = '';

    for (const product of products) {
        const card = createProductCard(product);
        list.append(card);
    }
}