let lastScrollY = window.scrollY;
const headerHide = document.querySelector('.page-header');
const mobileHide = document.querySelector('.mobile-menu');
const navScrollLinks = document.querySelectorAll('.header-nav-link');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 30) {
    headerHide.classList.add('hide');
  } else {
    headerHide.classList.remove('hide');
  }

  const deltaScroll = Math.abs(currentScrollY - lastScrollY);
  if (deltaScroll > 0) {
    mobileHide.classList.remove('is-open');
  }

  /*   const deltaScroll = Math.abs(currentScrollY - lastScrollY);
  if (deltaScroll > 70) {
    navScrollLinks.forEach(l => l.classList.remove('active-link'));
  } */

  lastScrollY = currentScrollY;
});
