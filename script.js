const mainBlock = document.documentElement;
const link = document.querySelector('.link3');
const sublinks = document.querySelector('.header__sub-links');
const menu = document.querySelector('.header_nav__links').cloneNode(1);

const burgerBtn = document.querySelector('.header__burger');
const popup = document.querySelector('.popup');

sublinks.style.display = 'none';

link.addEventListener('click', (event) => {
   if (sublinks.style.display == 'none') {
      sublinks.style.display = 'block'
   } else {
      sublinks.style.display = 'none';
   }
})


burgerBtn.addEventListener('click', (evet) => {
   popup.classList.toggle('open');
   renderPopup();
})


function renderPopup() {
   menu.style.display = "block";
   popup.appendChild(menu);
}