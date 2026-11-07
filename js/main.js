import { initBurger } from './components/burger.js';
import { initLocation } from './components/location.js';
import { initAccordion } from './components/accordion.js';
import { initCatalog } from './components/catalog.js';
import { initBasket } from './components/basket.js';
import { initValidation } from './components/validation.js';

window.addEventListener('DOMContentLoaded', () => {
  initBurger();
  initLocation();
  initAccordion();
  initCatalog();
  initBasket();
  initValidation();
});
