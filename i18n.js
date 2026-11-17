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
        'hero.text': 'I enjoy building complete systems, from the database to the interface. My focus is backend, API integration and pipeline security (CI/CD, automatic scans and non-root containers).',
        'hero.cta': 'View Projects',

        'about.title': 'About Me',
        'about.p1': 'I study <strong>Software Development</strong> at <strong>Fatec São José dos Campos</strong>.',
        'about.p2': 'My focus is <strong>backend and API integration</strong>, with security in the pipeline. I also build frontends (React) and landing pages when a project needs them.',
        'about.p3': 'At work I use <strong>Ubuntu</strong> (Kubuntu) and run the heaviest workloads on <strong>NVIDIA</strong> machines over <strong>SSH</strong>. At home I use <strong>Arch Linux</strong>, where I build my environment from scratch. I also build Discord bots, with per-server state isolation and a database.',
        'about.p4': 'Away from code, I\'m probably listening to Post-Punk or Darkwave and trying to learn some new technology late at night.',
        'about.p5': 'I\'m currently a <strong>software development intern at ITNEX</strong>, working on web apps with React and TypeScript, APIs in Node.js and Python, integration with the Datasul ERP, IoT with ESP32 and DevOps/DevSecOps, with CI/CD and security scans (Gitleaks, Trivy and Semgrep).',
        'about.stat.repos': 'Repositories with a DevSecOps pipeline',
        'about.stat.ci': 'CI time (240 s → 139 s)',
        'about.stat.cases': 'Published case studies',

        'skills.title': 'Tech Stack',
        'skills.daily': 'Day to day',
        'skills.sec': 'Security & CI',
        'skills.iot': 'Integration & IoT',
        'skills.also': 'Also used in projects',

        'projects.title': 'Projects',
        'projects.intro': 'The code for the internship projects is private. That is why I wrote case studies with the technical decisions, without client names.',
        'projects.intern': 'Internship · ITNEX',
        'projects.personal': 'Personal & academic projects',
        'projects.private': 'Internship project · private code',
        'projects.case': 'Case study',
        'projects.generic': 'Public version',
        'p.sec.t': 'Standard DevSecOps pipeline',
        'p.sec.d': 'Template repository with CI/CD and security ready so every company project starts right: secret, vulnerability and code scanning, non-root Docker images and automatic dependency updates. Applied to 9 repositories, and CI time dropped from 240 s to 139 s.',
        'p.stock.t': 'Multi-warehouse inventory control',
        'p.stock.d': 'Web application to manage a client\'s inventory across multiple warehouses: stock movements, requests, approval and picking, with role-based access. Integrated with the client\'s Datasul ERP (TOTVS).',
        'p.panel.t': 'Visual management dashboard',
        'p.panel.d': 'TV dashboard that tracks the 8 stages of the product flow, with a search and filter screen and role-based access.',
        'p.iot.t': 'Internal IoT project',
        'p.iot.d': 'ESP32-S3 devices that communicate over Bluetooth LE and send data via MQTT to a Python backend.',
        'p.ble.t': 'BLE sensor monitoring',
        'p.ble.d': 'Reads temperature, humidity and battery from Bluetooth sensors on an ESP32-S3, sends them via MQTT to a SQLite collector and shows them on a web dashboard.',
        'p.auto.t': 'Fatec Automation: Teams → Google',
        'p.auto.d': 'Python command-line tool that syncs course materials and deadlines from Microsoft Teams to Google Drive and Google Calendar. It preserves the folder hierarchy, avoids re-uploading files, handles pagination and API errors, and updates the event when a deadline changes. OAuth2 authentication, tests with pytest and CI on GitHub Actions.',
        'p.credit.t': 'AvoCredit: Credit Potential',
        'p.credit.d': '1st-semester integrated project at FATEC. Web system for credit analysts that calculates the credit potential of regions and states in Northern and Northeastern Brazil using public data from BCB/BACEN, IBGE, SPA and Data Senado. It combines four indicators, shows interactive charts and lets users save filters. Built with Scrum and Jira.',
        'p.tayama.d': 'Discord bot + SPA web dashboard built to organize college life. The bot tracks absences, grades and the risk of failing courses, and each student\'s data is kept separate from the others, stored in a MySQL database.',
        'projects.more': 'Also: <a href="https://github.com/pedrohl45/yamada-music-bot" target="_blank" rel="noopener">YamadaBot</a> (Discord music bot, with a <a href="https://yamada-music-bot-site.vercel.app" target="_blank" rel="noopener">landing page</a>) · <a href="https://github.com/pedrohl45/estudos-linux" target="_blank" rel="noopener">Arch Linux: ricing and Shell scripts</a>.',
        'tag.analysis': 'Data analysis',

        'exp.title': 'Experience & Education',
        'exp.intern.date': 'Oct 2026 – present',
        'exp.intern.role': 'Software Development Intern',
        'exp.intern.desc': 'Web applications with React and TypeScript, APIs in Node.js and Python, integration with the Datasul ERP (TOTVS) and IoT projects with ESP32 and MQTT, in Docker environments, and CI/CD pipelines (DevOps/DevSecOps) with Gitleaks, Trivy and Semgrep. Development on Ubuntu, with remote execution on NVIDIA machines over SSH.',
        'exp.course.date': 'In progress',
        'exp.course.title': 'Multiplatform Software Development',
        'exp.course.desc': 'Market-focused programming studies covering backend, frontend, databases and agile methods in a hands-on way.',
        'exp.api.date': 'Academic Projects',
        'exp.api.title': 'Integrated Project-Based Learning (API)',
        'exp.api.desc': 'Team projects every semester, solving real problems for the college\'s partner clients, using Scrum and Jira.',
        'exp.api.project': '<strong>1st semester (2026) · AvoCredit.</strong> Web system that combines public data (BCB, IBGE, SPA and Data Senado) into a credit potential indicator by region and state. Details are in the project card.',

        'contact.title': 'Contact',
        'contact.text': 'If you want to chat about code or projects, reach out here:',
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
            description: 'Portfolio of Pedro Henrique Cabral Leite: software developer focused on backend, API integration and DevSecOps. Multiplatform Software Development student at Fatec São José dos Campos and software development intern at ITNEX.',
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
        document.querySelectorAll('[data-case-href]').forEach(a => {
            a.href = lang === 'en' ? a.dataset.caseHrefEn : a.dataset.caseHref;
        });
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
