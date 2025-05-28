let lastScrollY = window.scrollY;
const headerHide = document.querySelector('.page-header');
const mobileHide = document.querySelector('.mobile-menu');
const burgerBtnHide = document.querySelector('.burger-btn');
const closeBtnHide = document.querySelector('.close-btn');
const navScrollLinks = document.querySelectorAll('.header-nav-link');

//Hide-reveal header on vertical scroll more then 40
window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 40) {
    headerHide.classList.add('hide');
  } else {
    headerHide.classList.remove('hide');
  }

  //Hiding mobile menu on scroll, changing button X to burger button
  const deltaScroll = Math.abs(currentScrollY - lastScrollY);
  if (deltaScroll > 0) {
    mobileHide.classList.remove('is-open');
    burgerBtnHide.classList.remove('hide');
    closeBtnHide.classList.remove('visible');
    closeBtnHide.classList.add('hide');
  }

  lastScrollY = currentScrollY;
});

//Hiding burger button on click, X reveal
burgerBtnHide.addEventListener('click', () => {
  burgerBtnHide.classList.add('hide');
  closeBtnHide.classList.add('visible');
  closeBtnHide.classList.remove('hide');
});

//Hiding X button on click, burger button reveal
closeBtnHide.addEventListener('click', () => {
  burgerBtnHide.classList.remove('hide');
  closeBtnHide.classList.remove('visible');
  closeBtnHide.classList.add('hide');
});
