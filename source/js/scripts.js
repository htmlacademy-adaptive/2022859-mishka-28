const menuButtonToggle = document.querySelector('.menu__toggle');
const menuList = document.querySelector('.menu__list');
const userList = document.querySelector('.user__list');
const navigation = document.querySelector('nav');

navigation.classList.remove('header__menu--nojs');

menuButtonToggle.addEventListener('click', () => {
  let expanded = menuButtonToggle.getAttribute('aria-expanded') === 'true';
  menuButtonToggle.setAttribute('aria-expanded', !expanded);
  menuButtonToggle.classList.toggle('menu__button--open');
  menuList.classList.toggle('menu__list--open');
  userList.classList.toggle('menu__list--open');
})
