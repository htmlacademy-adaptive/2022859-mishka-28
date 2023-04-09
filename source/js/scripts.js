let menuButtonToggle = document.querySelector(".menu__toggle");
let menuList = document.querySelector(".menu__list")

menuButtonToggle.addEventListener('click', () => {
  let expanded = menuButtonToggle.getAttribute('aria-expanded') === 'true' || 'false';
  menuButtonToggle.setAttribute('aria-expanded', !expanded);
  menuButtonToggle.classList.toggle('menu__button--open');
  menuList.classList.toggle('menu__list--open');
})
