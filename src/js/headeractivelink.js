const navLinks = document.querySelectorAll('.header-nav-link');
const sections = document.querySelectorAll('section');

const resetHeaderLinksUnderlines = () =>
  navLinks.forEach(link => link.classList.remove('active-link'));

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Прибираємо active з усіх лінків
        resetHeaderLinksUnderlines();

        // Додаємо active відповідному лінку
        const id = entry.target.getAttribute('id');
        if (!id) return;

        const activeLink = document.querySelector(
          `.header-nav-link[href="#${id}"]`
        );
        if (activeLink) {
          activeLink.classList.add('active-link');
        }
      }
    });
  },
  { threshold: 0.2 } // 20% секції повинно бути видно
);

sections.forEach(section => observer.observe(section));

/* export 

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    resetHeaderLinksUnderlines();
    link.classList.add('active-link');
  });
}); */
