const navLinks = document.querySelectorAll('.header-nav-link');
const sections = document.querySelectorAll('section');

/* export const resetHeaderLinksUnderlines = () =>
  navLinks.forEach(l => l.classList.remove('active-link'));

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    resetHeaderLinksUnderlines();
    link.classList.add('active-link');
  });
}); */

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Прибираємо active з усіх лінків
        navLinks.forEach(link => link.classList.remove('active-link'));

        // Додаємо active відповідному лінку
        const id = entry.target.getAttribute('id');
        console.log(id);

        document
          .querySelector(`.header-nav-link[href="#${id}"]`)
          .classList.add('active-link');
      }
    });
  },
  { threshold: 0.3 } // 30% секції повинно бути видно
);

sections.forEach(section => observer.observe(section));
