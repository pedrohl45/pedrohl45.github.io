document.addEventListener('DOMContentLoaded', () => {
    // Tema: claro por padrão, escuro se o sistema pedir; a escolha no botão fica salva.
    const root = document.documentElement;
    const themeBtn = document.getElementById('theme-toggle');
    const darkQuery = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

    function savedTheme() {
        try { return localStorage.getItem('theme'); } catch (e) { return null; }
    }

    function updateThemeLabel() {
        if (!themeBtn) return;
        const isDark = root.getAttribute('data-theme') === 'dark';
        const label = window.siteI18n
            ? window.siteI18n.label(isDark ? 'toLight' : 'toDark')
            : (isDark ? 'Mudar para o tema claro' : 'Mudar para o tema escuro');
        themeBtn.setAttribute('aria-label', label);
        themeBtn.title = label;
    }

    function setTheme(theme, persist) {
        root.setAttribute('data-theme', theme);
        if (persist) {
            try { localStorage.setItem('theme', theme); } catch (e) {}
        }
        updateThemeLabel();
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark', true);
        });
    }

    if (darkQuery && darkQuery.addEventListener) {
        darkQuery.addEventListener('change', e => {
            const saved = savedTheme();
            if (saved !== 'light' && saved !== 'dark') setTheme(e.matches ? 'dark' : 'light', false);
        });
    }

    document.addEventListener('langchange', updateThemeLabel);
    updateThemeLabel();

    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    const navItems = navLinks.querySelectorAll('a');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        const icon = mobileMenuBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.setAttribute('data-lucide', 'x');
        } else {
            icon.setAttribute('data-lucide', 'menu');
        }
        lucide.createIcons();
    });

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.setAttribute('data-lucide', 'menu');
                lucide.createIcons();
            }
        });
    });

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { root: null, rootMargin: '0px', threshold: 0.15 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        let scrollY = window.pageYOffset;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            
            if(sectionId === 'home') return;
            
            const navLink = document.querySelector(`.nav-links a[href*=${sectionId}]`);
            if(!navLink) return;

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        });
    });
});
