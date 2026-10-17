import { createProductCard } from './card.js';

export async function initCatalog() {
    const list = document.querySelector('.catalog__list');

    const response = await fetch('./data/data.json');
    const products = await response.json();
    const checkFields = document.querySelectorAll('.catalog-form .custom-checkbox__field');
    const checkForm = document.querySelector('.catalog-form');

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

    checkForm.addEventListener("change", function() {
        let checkMassiv = []

        for (const checkField of checkFields) {
            if (checkField.checked) {
                checkMassiv.push(checkField.value);
            }
        }    

        let renderMassiv = []

        if (checkMassiv.length === 0) {
            renderMassiv = products
        } else {
            for (const product of products) {
                let matches = false;
                for (const type of checkMassiv) {
                    if (product.type.includes(type)) {
                        matches = true;
                    }
                }
                if (matches) {
                    renderMassiv.push(product);
                }
            }    
        }
        renderCatalog(list, renderMassiv);
    });

    renderCatalog(list, products)

}

export function renderCatalog(list, products) {
    list.innerHTML = '';

    for (const product of products) {
        const card = createProductCard(product);
        list.append(card);
    }
}