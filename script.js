document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const navLinks = Array.from(document.querySelectorAll('.nav-link'));
    const linkSections = navLinks
        .map((link) => {
            const hash = link.hash;
            if (!hash) return null;
            const section = document.querySelector(hash);
            return section ? { link, section } : null;
        })
        .filter(Boolean);

    const topbar = document.querySelector('.topbar');

    const onScroll = () => {
        const scrollPos = window.scrollY + 120;
        if (topbar) {
            topbar.classList.toggle('scrolled', window.scrollY > 10);
        }

        linkSections.forEach(({ section, link }) => {
            const offsetTop = section.offsetTop;
            const offsetBottom = offsetTop + section.offsetHeight;
            if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
                link.classList.add('is-active');
            } else {
                link.classList.remove('is-active');
            }
        });
    };

    onScroll();
    window.addEventListener('scroll', onScroll);
});
