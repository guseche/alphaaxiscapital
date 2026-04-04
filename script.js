document.addEventListener('DOMContentLoaded', () => {
    // Reveal Animations using Intersection Observer
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Sticky Navbar
    const navbar = document.getElementById('navbar');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    
    // Call once to check initial state
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    // Mobile Hamburger Menu
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent scrolling when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Language Dictionary
    const translations = {
        es: {
            nav_services: "Servicios",
            nav_trust: "Confianza",
            nav_firm: "La Firma",
            hero_title: "Innovación.<br>Liderazgo.<br>Confianza.",
            hero_subtitle: "Modern alternative investment for forward-thinking professionals. Descubra soluciones estratégicas y potencie su crecimiento con la firma referente del mercado.",
            hero_btn_solutions: "Nuestras Soluciones",
            hero_btn_philosophy: "Filosofía AlphaAxis",
            services_header: "Elevating Growth",
            services_p: "Nuestras soluciones financieras están diseñadas arquitectónicamente para maximizar el rendimiento manteniendo el control y la seguridad.",
            srv_1_title: "Inversión Alternativa",
            srv_1_desc: "Acceda a oportunidades exclusivas con modelos de análisis predictivo, diversificación avanzada y gestión dinámica de carteras.",
            srv_2_title: "Gestión Corporativa",
            srv_2_desc: "Asesoramiento integral, banca de inversión y estructuración de capital orientados a instituciones y empresas de alto nivel.",
            srv_3_title: "Seguridad y Confianza",
            srv_3_desc: "Protección patrimonial superior bajo los más estrictos estándares regulatorios y tecnología criptográfica de vanguardia.",
            trust_title: "Solidez que Respalda su Futuro",
            trust_p: "En <strong>AlphaAxis Capital</strong> construimos relaciones a largo plazo. Nos basamos en resultados consistentes, transparencia absoluta y una gestión rigurosamente disciplinada del riesgo financiero.",
            stat_1: "Activos Gestionados",
            stat_2: "Precisión Transaccional",
            stat_3: "Monitoreo Estratégico",
            stat_4: "Referente Regional",
            cta_title: "Transforme su Visión Financiera",
            cta_p: "Únase a los líderes de la industria. Adopte una perspectiva profesional y experta para maximizar la expansión de su capital exponencialmente.",
            cta_btn: "Agendar una Consulta Privada",
            footer_slogan: "Elevating Growth. Modern alternative investment for forward-thinking professionals.",
            ft_col_1: "Compañía",
            ft_link_1_1: "La Firma",
            ft_link_1_2: "Liderazgo y Directorio",
            ft_link_1_3: "Carreras",
            ft_col_2: "Soluciones",
            ft_link_2_1: "Inversión Alternativa",
            ft_link_2_2: "Fondos Estructurados",
            ft_link_2_3: "Finanzas Corporativas",
            ft_col_3: "Legal & Soporte",
            ft_link_3_1: "Términos Contractuales",
            ft_link_3_2: "Políticas de Privacidad",
            ft_link_3_3: "Portal de Cliente",
            footer_rights: "&copy; 2026 AlphaAxis Capital. Marca registrada. Todos los derechos reservados."
        },
        en: {
            nav_services: "Services",
            nav_trust: "Trust",
            nav_firm: "The Firm",
            hero_title: "Innovation.<br>Leadership.<br>Trust.",
            hero_subtitle: "Modern alternative investment for forward-thinking professionals. Discover strategic solutions and boost your growth with the market's leading firm.",
            hero_btn_solutions: "Our Solutions",
            hero_btn_philosophy: "AlphaAxis Philosophy",
            services_header: "Elevating Growth",
            services_p: "Our financial solutions are architecturally designed to maximize performance while maintaining control and security.",
            srv_1_title: "Alternative Investment",
            srv_1_desc: "Access exclusive opportunities with predictive analysis models, advanced diversification, and dynamic portfolio management.",
            srv_2_title: "Corporate Management",
            srv_2_desc: "Comprehensive advisory, investment banking, and capital structuring aimed at high-level institutions and companies.",
            srv_3_title: "Security and Trust",
            srv_3_desc: "Superior wealth protection under the strictest regulatory standards and cutting-edge cryptographic technology.",
            trust_title: "Strength that Backs Your Future",
            trust_p: "At <strong>AlphaAxis Capital</strong> we build long-term relationships. We rely on consistent results, absolute transparency, and rigorously disciplined management of financial risk.",
            stat_1: "Assets Under Management",
            stat_2: "Transactional Precision",
            stat_3: "Strategic Monitoring",
            stat_4: "Regional Leader",
            cta_title: "Transform Your Financial Vision",
            cta_p: "Join industry leaders. Adopt a professional and expert perspective to maximize the exponential expansion of your capital.",
            cta_btn: "Schedule a Private Consultation",
            footer_slogan: "Elevating Growth. Modern alternative investment for forward-thinking professionals.",
            ft_col_1: "Company",
            ft_link_1_1: "The Firm",
            ft_link_1_2: "Leadership & Board",
            ft_link_1_3: "Careers",
            ft_col_2: "Solutions",
            ft_link_2_1: "Alternative Investment",
            ft_link_2_2: "Structured Funds",
            ft_link_2_3: "Corporate Finance",
            ft_col_3: "Legal & Support",
            ft_link_3_1: "Terms of Service",
            ft_link_3_2: "Privacy Policy",
            ft_link_3_3: "Client Portal",
            footer_rights: "&copy; 2026 AlphaAxis Capital. Trademark. All rights reserved."
        }
    };

    const langBtnEs = document.getElementById('lang-es');
    const langBtnEn = document.getElementById('lang-en');
    
    const setLanguage = (lang) => {
        document.documentElement.lang = lang;
        if (lang === 'es') {
            langBtnEs.classList.add('active');
            langBtnEn.classList.remove('active');
        } else {
            langBtnEn.classList.add('active');
            langBtnEs.classList.remove('active');
        }
        
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if(translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
    };

    langBtnEs.addEventListener('click', (e) => {
        e.preventDefault();
        setLanguage('es');
    });

    langBtnEn.addEventListener('click', (e) => {
        e.preventDefault();
        setLanguage('en');
    });
});
