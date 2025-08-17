const navLinks = document.querySelectorAll('.header-nav-link');
const sections = document.querySelectorAll('section, .footer');

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
  {
    threshold: [0, 0.25, 0.5],
    rootMargin: '-30% 0px -60% 0px',
    // threshold: [0, 0.25, 0.5],   //best option for now
    // rootMargin: '-30% 0px -60% 0px',
  }
);

sections.forEach(section => observer.observe(section));

/* const observer = new IntersectionObserver(
  entries => {
    let visible = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visible) {
      navLinks.forEach(link => link.classList.remove('active-link'));
      const id = visible.target.id;
      document
        .querySelector(`.header-nav-link[href="#${id}"]`)
        ?.classList.add('active-link');
    }
  },
  {
    threshold: Array.from({ length: 11 }, (_, i) => i / 10), // 0,0.1,0.2...1
  }
); */

/* export 

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    resetHeaderLinksUnderlines();
    link.classList.add('active-link');
  });
}); */
