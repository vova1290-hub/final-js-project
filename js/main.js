import { initBurger } from './components/burger.js';
import { initLocation } from './components/location.js';
import { initAccordion } from './components/accordion.js';
import { initCatalog } from './components/catalog.js';

window.addEventListener('DOMContentLoaded', () => {
  initBurger();
  initLocation();
  initAccordion();
  initCatalog();
});
