let products = [];

export function setBasketProducts(items) {
    products = items;
}

export function initBasket() {
    const basket = document.querySelector('.basket');
    const basketButton = basket.parentElement.querySelector('.header__user-btn');

    basketButton.addEventListener('click', () => {
        basket.classList.toggle('basket--active');
    });
}

export function addToBasket(id) {
    const productId = Number(id);
    let selectedProduct = null;

    for (const product of products) {
        if (product.id === productId) {
            selectedProduct = product;
        }
    }

    if (selectedProduct === null) {
        return;
    }

    const imageSrc = selectedProduct.image.replace('../', '');
    const name = selectedProduct.name;
    const price = selectedProduct.price.new;

    const itemEl = document.createElement('li');
    itemEl.classList.add('basket__item');

    const imageWrapEl = document.createElement('div');
    imageWrapEl.classList.add('basket__img');

    const imageEl = document.createElement('img');
    imageEl.src = imageSrc;
    imageEl.alt = 'Фотография товара';
    imageEl.width = 60;
    imageEl.height = 60;
    imageWrapEl.append(imageEl);

    const nameEl = document.createElement('span');
    nameEl.classList.add('basket__name');
    nameEl.textContent = name;

    const priceEl = document.createElement('span');
    priceEl.classList.add('basket__price');
    priceEl.textContent = `${price} руб`;

    const closeButtonEl = document.createElement('button');
    closeButtonEl.classList.add('basket__item-close');
    closeButtonEl.type = 'button';

    const iconEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    iconEl.classList.add('main-menu__icon');
    iconEl.setAttribute('width', '24');
    iconEl.setAttribute('height', '24');
    iconEl.setAttribute('aria-hidden', 'true');

    const useEl = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    useEl.setAttribute('href', 'images/sprite.svg#icon-close');
    iconEl.append(useEl);
    closeButtonEl.append(iconEl);

    itemEl.append(imageWrapEl, nameEl, priceEl, closeButtonEl);

    const basketList = document.querySelector('.basket__list');
    basketList.append(itemEl);
    
    const countEl = document.querySelector('.header__user-count')
    let count = 0;

    for (const item of basketList.children) {
        count++;
    }

    countEl.textContent = count;
    
    
}