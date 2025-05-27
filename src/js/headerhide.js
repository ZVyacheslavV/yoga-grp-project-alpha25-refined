let lastScrollY = window.scrollY;
const header = document.querySelector('.page-header');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 60) {
    header.classList.add('hide');
  } else {
    header.classList.remove('hide');
  }

  lastScrollY = currentScrollY;
});
