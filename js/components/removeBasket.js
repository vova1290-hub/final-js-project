export function deleteBasket(itemEl) {
    itemEl.remove();

    const basketList = document.querySelector('.basket__list');
    const countEl = document.querySelector('.header__user-count');

    countEl.textContent = basketList.children.length;
}