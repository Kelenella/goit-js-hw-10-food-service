import './sass/main.scss';
import menuData from './menu.json'
import cardsGallery from './templates/cardsGallery.hbs'

const list = document.querySelector('.js-menu');
console.log(list);
const markupCards = cardsGallery(menuData);
console.log(markupCards);
