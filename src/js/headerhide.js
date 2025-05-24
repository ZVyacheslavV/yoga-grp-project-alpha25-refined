let lastScrollY = window.scrollY;
const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 50) {
    // Скролл вниз — прячем хедер
    header.classList.add('hide');
  } else {
    // Скролл вверх — показываем хедер
    header.classList.remove('hide');
  }

  lastScrollY = currentScrollY;
});
