import { createProductCard } from './card.js';

export async function initCatalog() {
    const list = document.querySelector('.catalog__list');

    const response = await fetch('./data/data.json');
    const products = await response.json();
    const checkFields = document.querySelectorAll('.catalog-form .custom-checkbox__field');
    const checkForm = document.querySelector('.catalog-form');
    const sortEl = document.querySelector('.catalog__sort-select');

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

    const sortingStrategies = {
        'price-min': (a, b) => a.price.new - b.price.new,      
        'price-max': (a, b) => b.price.new - a.price.new,     
        'rating-max': (a, b) => b.rating - a.rating,           
    };

    function updateCatalog() {
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

        const status = checkForm.querySelector('input[name="status"]:checked');

        if (status.value === 'instock') {
            const inStock = [];

            for (const product of renderMassiv) {
                if (product.availability.moscow > 0 || product.availability.orenburg > 0 || product.availability.saintPetersburg > 0) {
                    inStock.push(product);
                 }
            }

            renderMassiv = inStock;
        }

        const currentSort = sortEl.value;
        const sortFunction = sortingStrategies[currentSort];

        if (sortFunction) {
            renderMassiv.sort(sortFunction);
        }

        renderCatalog(list, renderMassiv);      
    };

    checkForm.addEventListener("change", function() {
        updateCatalog();
    });

    sortEl.addEventListener("change", function() {
        updateCatalog();
    });

    updateCatalog();

    
}

export function renderCatalog(list, products) {
    list.innerHTML = '';

    for (const product of products) {
        const card = createProductCard(product);
        list.append(card);
    }
}