"use strict";

const hamb = document.querySelector('.hamburger'),
      menuItem = document.querySelectorAll('.menu_item'),
      menu = document.querySelector('.menu');

hamb.addEventListener('click', () => {
    hamb.classList.toggle('hamburger_active');
    menu.classList.toggle('menu_active');
});

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        hamb.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });
});