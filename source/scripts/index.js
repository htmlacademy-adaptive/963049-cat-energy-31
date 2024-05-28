/* в этот файл добавляет скрипты*/
const mobileNav = document.querySelector('.nav');
const buttonToggle = document.querySelector('.button-toggle');

mobileNav.classList.remove('nav--nojs');

buttonToggle.addEventListener('click', () => {
  if (mobileNav.classList.contains('nav--closed')) {
    mobileNav.classList.remove('nav--closed');
    mobileNav.classList.add('nav--opened');
  } else {
    mobileNav.classList.add('nav--closed');
    mobileNav.classList.remove('nav--opened');
  }
});

buttonToggle.classList.remove('button-toggle--nojs');

buttonToggle.addEventListener('click', () => {
  if (buttonToggle.classList.contains('button-toggle--closed')) {
    buttonToggle.classList.remove('button-toggle--closed');
    buttonToggle.classList.add('button-toggle--opened');
  } else {
    buttonToggle.classList.add('button-toggle--closed');
    buttonToggle.classList.remove('button-toggle--opened');
  }
});
