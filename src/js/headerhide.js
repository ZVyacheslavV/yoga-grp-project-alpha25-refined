let lastScrollY = window.scrollY;
const headerHide = document.querySelector('.page-header');
const mobileHide = document.querySelector('.mobile-menu');
const burgerBtnHide = document.querySelector('.burger-btn');
const closeBtnHide = document.querySelector('.close-btn');
const navScrollLinks = document.querySelectorAll('.header-nav-link');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 40) {
    headerHide.classList.add('hide');
  } else {
    headerHide.classList.remove('hide');
  }

  const deltaScroll = Math.abs(currentScrollY - lastScrollY);
  if (deltaScroll > 0) {
    mobileHide.classList.remove('is-open');
    burgerBtnHide.classList.remove('hide');
    closeBtnHide.classList.add('hide');
  }

  /*   const deltaScroll = Math.abs(currentScrollY - lastScrollY);
  if (deltaScroll > 70) {
    navScrollLinks.forEach(l => l.classList.remove('active-link'));
  } */

  lastScrollY = currentScrollY;
});

burgerBtnHide.addEventListener('click', () => {
  burgerBtnHide.classList.add('hide');
  closeBtnHide.classList.add('visible');
  closeBtnHide.classList.remove('hide');
});

closeBtnHide.addEventListener('click', () => {
  burgerBtnHide.classList.remove('hide');
  closeBtnHide.classList.remove('visible');
  closeBtnHide.classList.add('hide');
});
