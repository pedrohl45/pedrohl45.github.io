/* Versão em inglês do portfólio.
   O português fica no próprio HTML (bom para SEO); aqui ficam só as traduções.
   Cada elemento traduzível tem data-i18n="chave". */
(function () {
    const en = {
        'nav.about': 'About',
        'nav.skills': 'Tech Stack',
        'nav.projects': 'Projects',
        'nav.experience': 'Experience',
        'nav.contact': 'Contact',

        'hero.title': 'Hey, I\'m<br><span class="highlight">Pedro Henrique</span>',
        'hero.role': 'Software Developer',
        'hero.text': 'I enjoy building complete systems, from the database and robust APIs to the interface. I use Ubuntu at work and Arch Linux at home (where I built my own visual workflow), and I spend most of my time in the terminal.',
        'hero.cta': 'View Projects',

        'about.title': 'About Me',
        'about.p1': 'I study <strong>Software Development</strong> at <strong>Fatec São José dos Campos</strong>.',
        'about.p2': 'I consider myself a versatile developer. My main focus is Backend and API integrations, but I can also design landing pages, build responsive frontends and customize operating system interfaces from scratch.',
        'about.p3': 'At work I use <strong>Ubuntu</strong>-based distros (Kubuntu) and run the heaviest workloads on <strong>NVIDIA</strong> machines over <strong>SSH</strong>. At home my system is <strong>Arch Linux</strong> (where I fully riced my environment), and I also have experience with <strong>Debian and Linux Mint</strong> and desktop environments like <strong>Cinnamon</strong>. I build complex Discord bots (with state isolation, OOP and databases) and heavy automation integrations.',
        'about.p4': 'Away from code, I\'m probably listening to Post-Punk or Darkwave and trying to learn some new technology late at night.',
        'about.p5': 'I\'m currently a <strong>software development intern at ITNEX</strong>, working on web apps with React and TypeScript, APIs in Node.js and Python, integration with the Protheus ERP and IoT with ESP32. I\'m open to talking about junior roles.',
        'about.stat.repos': 'Repositories',
        'about.stat.degree': 'Degree',

        'skills.title': 'Tech Stack',
        'skills.lang': 'Languages & Core',
        'skills.db': 'Databases',
        'skills.system': 'System & Environment',

        'projects.title': 'Projects',
        'projects.intern': 'Internship · ITNEX',
        'projects.personal': 'Personal & academic projects',
        'projects.private': 'Internship project · private code',
        'p.stock.t': 'Multi-warehouse inventory control',
        'p.stock.d': 'Web application to manage a client\'s inventory across multiple warehouses: stock movements, requests, approval and picking, with role-based access. Integrated with the client\'s Protheus ERP (TOTVS).',
        'p.panel.t': 'Visual management dashboard',
        'p.panel.d': 'TV dashboard that tracks the 8 stages of the product flow, with a search and filter screen and role-based access.',
        'p.iot.t': 'Internal IoT project',
        'p.iot.d': 'ESP32-S3 devices that communicate over Bluetooth LE and send data via MQTT to a Python backend.',
        'p.ble.t': 'BLE sensor monitoring',
        'p.ble.d': 'Reads temperature, humidity and battery from Bluetooth sensors on an ESP32-S3, sends them via MQTT to a SQLite collector and shows them on a web dashboard.',
        'p.auto.t': 'Fatec Automation: Teams → Google',
        'p.auto.d': 'Python command-line tool that syncs course materials and deadlines from Microsoft Teams to Google Drive and Google Calendar. It preserves the folder hierarchy, avoids re-uploading files, handles pagination and API errors, and updates the event when a deadline changes. OAuth2 authentication, tests with pytest and CI on GitHub Actions.',
        'p.credit.t': 'FATEC API: Inclusive Credit (BCB)',
        'p.credit.d': 'Integrated project from the 1st semester at FATEC. Application that analyzes data from the Central Bank of Brazil (BACEN), IBGE and Serasa to calculate an "Opportunity Score" per region, supporting credit inclusion. Built with agile methods (Scrum/Jira).',
        'p.tayama.d': 'Discord bot + SPA web dashboard built to organize college life. The bot tracks absences, grades and the risk of failing courses, and manages classes in isolation, storing everything in its own MySQL relational database.',
        'p.yamada.t': 'YamadaBot & Landing Page',
        'p.yamada.d': 'A complete music ecosystem for Discord. I built the audio bot with yt-dlp and FFmpeg (with state isolation across multiple servers) and coded the responsive landing page that presents the project.',
        'p.arch.d': 'My personal lab, where I configured my whole Arch Linux system from scratch. I built customized graphical interfaces (window managers) and Shell scripts to automate my daily workflow.',
        'tag.analysis': 'Data analysis',

        'exp.title': 'Experience & Education',
        'exp.intern.date': 'Oct 2026 – present',
        'exp.intern.role': 'Software Development Intern',
        'exp.intern.desc': 'Web applications with React and TypeScript, APIs in Node.js and Python, integration with the Protheus ERP (TOTVS) and IoT projects with ESP32 and MQTT, in Docker environments. Development on Ubuntu, with remote execution on NVIDIA machines over SSH.',
        'exp.course.date': 'In progress',
        'exp.course.title': 'Multiplatform Software Development',
        'exp.course.desc': 'Market-focused programming studies covering backend, frontend, databases and agile methods in a hands-on way.',
        'exp.api.date': 'Academic Projects',
        'exp.api.title': 'Integrated Project-Based Learning (API)',
        'exp.api.desc': 'Team projects every semester, solving real problems for the college\'s partner clients, using Scrum and Jira.',
        'exp.api.project': '<strong>1st semester (2026) · Denied by the Bank: Inclusive Credit with BCB Data.</strong> Website that identifies regions with high credit potential but no access to the traditional financial system. Using public data from the Central Bank of Brazil (BCB/BACEN), IBGE and Serasa, it calculates an "Opportunity Score" per region so credit analysts can compare territories with filters and indicators. Data analysis in Google Colab and website in Python (Flask), HTML and CSS.',

        'contact.title': 'Contact',
        'contact.text': 'If you want to chat about code or opportunities, reach out here:',
        'footer.made': 'Made by Pedro Henrique Cabral Leite'
    };

    const meta = {
        pt: {
            title: document.title,
            description: document.querySelector('meta[name="description"]').content,
            toDark: 'Mudar para o tema escuro',
            toLight: 'Mudar para o tema claro',
            otherLang: 'View in English',
            otherLangShort: 'EN',
            htmlLang: 'pt-BR'
        },
        en: {
            title: 'Pedro Henrique Cabral Leite | Software Developer',
            description: 'Portfolio of Pedro Henrique Cabral Leite: software developer focused on backend, automation and IoT. Multiplatform Software Development student at Fatec São José dos Campos and software development intern at ITNEX.',
            toDark: 'Switch to dark theme',
            toLight: 'Switch to light theme',
            otherLang: 'Ver em português',
            otherLangShort: 'PT',
            htmlLang: 'en'
        }
    };

    const nodes = document.querySelectorAll('[data-i18n]');
    const pt = new Map();
    nodes.forEach(el => pt.set(el, el.innerHTML));

    function storedLang() {
        try { return localStorage.getItem('lang'); } catch (e) { return null; }
    }

    function initialLang() {
        const fromUrl = new URLSearchParams(location.search).get('lang');
        if (fromUrl === 'en' || fromUrl === 'pt') return fromUrl;
        const saved = storedLang();
        return saved === 'en' || saved === 'pt' ? saved : 'pt';
    }

    let lang = initialLang();

    function apply() {
        nodes.forEach(el => {
            const key = el.dataset.i18n;
            el.innerHTML = lang === 'en' && en[key] ? en[key] : pt.get(el);
        });
        const m = meta[lang];
        document.documentElement.lang = m.htmlLang;
        document.title = m.title;
        document.querySelector('meta[name="description"]').content = m.description;
        const btn = document.getElementById('lang-toggle');
        if (btn) {
            btn.textContent = m.otherLangShort;
            btn.setAttribute('aria-label', m.otherLang);
            btn.title = m.otherLang;
            btn.lang = lang === 'en' ? 'pt-BR' : 'en';
        }
        document.dispatchEvent(new CustomEvent('langchange'));
    }

    window.siteI18n = {
        get lang() { return lang; },
        label(name) { return meta[lang][name]; }
    };

    apply();

    const btn = document.getElementById('lang-toggle');
    if (btn) {
        btn.addEventListener('click', () => {
            lang = lang === 'en' ? 'pt' : 'en';
            try { localStorage.setItem('lang', lang); } catch (e) {}
            const url = new URL(location.href);
            if (lang === 'en') url.searchParams.set('lang', 'en');
            else url.searchParams.delete('lang');
            history.replaceState(null, '', url);
            apply();
        });
    }
})();
