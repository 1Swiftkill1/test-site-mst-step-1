document.addEventListener('DOMContentLoaded', () => {

    // header-scroll

    const header = document.querySelector('.header');
    const scrollThreshold = 50;
    let lastKnownScroll = 0;
    let ticking = false;

    function updateHeader() {
        if (lastKnownScroll > scrollThreshold) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
        ticking = false;
    }

    window.addEventListener('scroll', function () {
        lastKnownScroll = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(updateHeader);
            ticking = true;
        }
    });


    window.addEventListener('load', function () {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('header--scrolled');
        }
    });

    // burger-menu

    const menu = document.querySelector('.header__menu');
    const burgerIcon = document.querySelector('.header__burger-icon');
    
    burgerIcon.addEventListener('click', function() {
        menu.classList.toggle('header__menu_active');
        burgerIcon.classList.toggle('header__burger-icon_active');
        
        if (menu.classList.contains('header__menu_active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    const menuLinks = document.querySelectorAll('.header__menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menu.classList.remove('header__menu_active');
            burgerIcon.classList.remove('header__burger-icon_active');
            document.body.style.overflow = '';
        });
    });
});