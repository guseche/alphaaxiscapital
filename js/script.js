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
            nav_firm: "Nosotros",
            nav_contact: "Contacto",
            hero_title: "<div class=\"formula-line plus\"><span class=\"op\">+</span> <span class=\"text\">Eficiencia en cada transacción.</span></div><div class=\"formula-line minus\"><span class=\"op\">–</span> <span class=\"text\">Fricciones bancarias innecesarias.</span></div><div class=\"formula-line equals\"><span class=\"op\">=</span> <span class=\"text\">Crecimiento sostenible.</span></div>",
            hero_subtitle: "<strong>Potenciamos tu visión, aseguramos tus resultados.</strong> Somos el aliado financiero y empresarial que evoluciona al ritmo de tu negocio, transformando cada operación en una oportunidad de expansión.",
            hero_btn_solutions: "Nuestras Soluciones",
            hero_btn_philosophy: "Por qué escogernos",
            services_header: "Elevating Growth",
            services_p: "Diseñamos la ruta de servicios para que tu dinero se mueva sin fricciones. Desde la recepción de tus pagos hasta la dispersión a tu equipo, nuestra empresa optimiza cada paso para que tu única preocupación sea seguir creciendo. Menos trámites, más rentabilidad.",
            srv_1_title: "Pagos sin fronteras",
            srv_1_desc: "Eliminamos la fricción de operaciones complejas, para que tu motor financiero nunca se detenga. Tú lideras el equipo, nosotros aseguramos la liquidez de tu negocio en Colombia.",
            srv_2_title: "Dispersión de pagos",
            srv_2_desc: "Olvídate de las esperas de 24 horas. Te garantizamos que tus pagos a clientes, proveedores o aliados sean más eficientes, no sólo en tiempo, sino en costo financiero.",
            srv_3_title: "Consultoría financiera",
            srv_3_desc: "Transformamos tu operación en rentabilidad. Realizamos un diagnóstico de tu flujo financiero para eliminar fricciones y optimizar tu facturación. En AlphaAxis, tu eficiencia es nuestra métrica de éxito.",
            trust_title: "Solidez que Respalda su Futuro",
            trust_p: "En <strong>AlphaAxis Capital</strong> construimos relaciones a largo plazo. Nos basamos en resultados consistentes, transparencia absoluta y acompañamiento estratégico para que tu negocio esté a la altura de sus necesidades.",
            stat_1: "Activos Gestionados",
            stat_2: "Pagos en menos de 24 horas",
            stat_3: "Monitoreo Estratégico",
            stat_feat_1: "Tú mismo decides en qué momento convertir tus recursos",
            stat_feat_2: "Sin costos ocultos",
            stat_feat_3: "Sin comisiones desmedidas",
            stat_feat_4: "100% a la medida de tus necesidades",
            why_title: "¿Por qué escogernos?",
            why_1_title: "Eficiencia en costos",
            why_1_desc: "Eliminamos los sobrecostos ocultos y la burocracia que castiga tus ingresos. Con nuestra dinámica financiera, aseguramos que cada operación rinda al máximo. En AlphaAxis, la eficiencia no es una promesa, es la base de nuestra visión financiera.",
            why_2_title: "Agilidad operativa",
            why_2_desc: "Libérate de los ciclos bancarios del siglo pasado. Mientras los aliados tradicionales te piden días, nosotros te damos soluciones en horas. Nuestra metodología de pagos está optimizada para que cotices, valides y recibas en una sola jornada. Es agilidad real para quienes operan en la economía digital.",
            why_3_title: "Atención al cliente real",
            why_3_desc: "No eres un ticket de soporte, eres un aliado. Sabemos que detrás de cada transacción hay un proyecto, un equipo o una meta. Por eso, te brindamos un acompañamiento humano y experto de principio a fin. Resolvemos dudas, agilizamos procesos y aseguramos resultados. Tu tranquilidad no es opcional.",
            why_btn: "Contáctanos y llevemos tus resultados al siguiente nivel.",
            about_intro_title: "Nuestra Filosofía Corporativa",
            about_intro_p: "No somos un proveedor, somos tu aliado estratégico. Descubre el talento, la visión y el rigor estructural que nos permite impulsar líderes y trascender en la economía digital.",
            about_intro_btn: "Conoce más sobre AlphaAxis",
            about_page_title: "Acerca de Nosotros",
            about_page_subtitle: "Trascendemos las barreras financieras para acompañarte en la expansión de tus operaciones globales.",
            about_mission_title: "Misión",
            about_mission_desc: "Transformar la complejidad financiera en operaciones ágiles, rentables y extremadamente seguras. Nuestro objetivo es brindar a profesionales y empresas la liquidez y las vías corporativas necesarias para que escalen sus modelos de negocio en la economía internacional sin fricciones ni esperas.",
            about_vision_title: "Visión",
            about_vision_desc: "Convertirnos en el estándar de oro en estructuración, dispersión y consultoría financiera dentro de América Latina. Visualizamos un entorno empresarial donde los modelos innovadores cuenten permanentemente con el respaldo estratégico y el flujo de caja instantáneo que requieren para dominar el mercado.",
            about_values_title: "Pilares Estructurales",
            about_val_1_title: "Transparencia Radical",
            about_val_1_desc: "Aclaramos cada paso del flujo. Operamos bajo un sistema integral de autocontrol y gestión del riesgo (SAGRILAFT) que garantiza la transparencia y legalidad de cada operación.",
            about_val_2_title: "Innovación y Agilidad",
            about_val_2_desc: "Abandonamos los ciclos analógicos del ayer proporcionando arquitecturas financieras que se mueven en horas, no semanas.",
            about_val_3_title: "Acompañamiento Experto",
            about_val_3_desc: "Nuestra principal métrica es tu éxito, respaldándote integralmente como verdaderos guardianes de la operativa de tu negocio.",
            about_cta_title: "Únete a nosotros",
            about_cta_p: "Lleva tu operación al siguiente nivel. Contamos con la experiencia y arquitectura financiera que tu empresa exige para crecer sin límites.",
            about_cta_btn: "Agendar una Consulta",
            footer_slogan: "Elevating Growth. Alternativa de inversión moderna para profesionales e instituciones.",
            footer_rights: "&copy; 2026 AlphaAxis Capital. Marca registrada. Todos los derechos reservados."
        },
        en: {
            nav_services: "Services",
            nav_firm: "About Us",
            nav_contact: "Contact",
            hero_title: "<div class=\"formula-line plus\"><span class=\"op\">+</span> <span class=\"text\">Efficiency in every transaction.</span></div><div class=\"formula-line minus\"><span class=\"op\">–</span> <span class=\"text\">Unnecessary banking frictions.</span></div><div class=\"formula-line equals\"><span class=\"op\">=</span> <span class=\"text\">Sustainable growth.</span></div>",
            hero_subtitle: "<strong>We empower your vision, we secure your results.</strong> We are the financial and corporate ally that evolves at the pace of your business, transforming every operation into an opportunity for expansion.",
            hero_btn_solutions: "Our Solutions",
            hero_btn_philosophy: "Why Choose Us",
            services_header: "Elevating Growth",
            services_p: "We design the service route so your money moves without friction. From the receipt of your payments to the dispersion to your team, our company optimizes every step so your only concern is to keep growing. Fewer procedures, more profitability.",
            srv_1_title: "Borderless Payments",
            srv_1_desc: "We eliminate the friction of complex operations so your financial engine never stops. You lead the team, we ensure your business liquidity in Colombia.",
            srv_2_title: "Payment Dispersion",
            srv_2_desc: "Forget about 24-hour waits. We guarantee that your payments to clients, suppliers, or partners will be more efficient, not just in time, but in financial cost.",
            srv_3_title: "Financial Consulting",
            srv_3_desc: "We transform your operation into profitability. We diagnose your financial flow to eliminate friction and optimize your billing. At AlphaAxis, your efficiency is our metric of success.",
            trust_title: "Strength that Backs Your Future",
            trust_p: "At <strong>AlphaAxis Capital</strong> we build long-term relationships. We rely on consistent results, absolute transparency, and strategic support to ensure your business meets its needs.",
            stat_1: "Assets Under Management",
            stat_2: "Payments in under 24 hours",
            stat_3: "Strategic Monitoring",
            stat_feat_1: "You decide exactly when to convert your resources",
            stat_feat_2: "No hidden costs",
            stat_feat_3: "No excessive commissions",
            stat_feat_4: "100% tailored to your needs",
            why_title: "Why choose us?",
            why_1_title: "Cost Efficiency",
            why_1_desc: "We eliminate hidden surcharges and the bureaucracy that punishes your revenue. With our financial dynamics, we ensure that every operation yields its maximum potential. At AlphaAxis, efficiency is not just a promise, it's the foundation of our financial vision.",
            why_2_title: "Operational Agility",
            why_2_desc: "Free yourself from banking cycles of the past century. While traditional allies ask for days, we provide solutions in hours. Our payment methodology is optimized so you can quote, validate, and receive in a single workday. It is real agility for those who operate in the digital economy.",
            why_3_title: "Real Customer Service",
            why_3_desc: "You are not a support ticket, you are an ally. We know that behind every transaction there is a project, a team, or a goal. That is why we provide human and expert guidance from start to finish. We resolve doubts, streamline processes, and ensure results. Your peace of mind is not optional.",
            why_btn: "Contact us and take your results to the next level.",
            about_intro_title: "Our Corporate Philosophy",
            about_intro_p: "We are not a provider, we are your strategic ally. Discover the talent, the vision and the structural rigor that allows us to propel leaders and transcend in the digital economy.",
            about_intro_btn: "Learn more about AlphaAxis",
            about_page_title: "About Us",
            about_page_subtitle: "We transcend financial barriers to accompany you in the expansion of your global operations.",
            about_mission_title: "Mission",
            about_mission_desc: "To transform financial complexity into agile, profitable, and highly secure operations. Our goal is to provide professionals and businesses with the liquidity and corporate avenues needed to scale their business models in the international economy without friction.",
            about_vision_title: "Vision",
            about_vision_desc: "To become the gold standard in structuring, distribution, and financial consulting within Latin America. We envision a business environment where innovative models have the strategic backing and instant cash flow required to dominate the market.",
            about_values_title: "Structural Pillars",
            about_val_1_title: "Radical Transparency",
            about_val_1_desc: "We clarify every step of the flow. We operate under a comprehensive self-control and risk management system (SAGRILAFT) that guarantees transparency and legality in every operation.",
            about_val_2_title: "Innovation and Agility",
            about_val_2_desc: "We abandon the analog cycles of the past, delivering financial architectures that operate in hours, not weeks.",
            about_val_3_title: "Expert Guidance",
            about_val_3_desc: "Our main metric is your success, comprehensively supporting you as true guardians of your business operations.",
            about_cta_title: "Join us today",
            about_cta_p: "Take your operations to the next level. We have the experience and financial architecture your company demands to scale without limits.",
            about_cta_btn: "Schedule a Consultation",
            footer_slogan: "Elevating Growth. Modern alternative investment for forward-thinking professionals.",
            footer_rights: "&copy; 2026 AlphaAxis Capital. Registered trademark. All rights reserved."
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

    // Fetch Market Data
    async function fetchMarketData() {
        const tickerEl = document.getElementById('market-ticker');
        if (!tickerEl) return;

        try {
            // Using more CORS-friendly APIs for GitHub Pages
            const [btcRes, ethRes, usdRes, eurRes] = await Promise.all([
                fetch('https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT').catch(() => null),
                fetch('https://api.binance.com/api/v3/ticker/24hr?symbol=ETHUSDT').catch(() => null),
                fetch('https://open.er-api.com/v6/latest/USD').catch(() => null),
                fetch('https://open.er-api.com/v6/latest/EUR').catch(() => null)
            ]);

            let btcData = {}, ethData = {}, usdData = {}, eurData = {};
            if (btcRes && btcRes.ok) btcData = await btcRes.json();
            if (ethRes && ethRes.ok) ethData = await ethRes.json();
            if (usdRes && usdRes.ok) usdData = await usdRes.json();
            if (eurRes && eurRes.ok) eurData = await eurRes.json();

            const items = [];

            const formatCurrency = (val, currency = 'USD') => {
                return new Intl.NumberFormat('es-CO', { style: 'currency', currency: currency, maximumFractionDigits: currency === 'COP' ? 0 : 2 }).format(val);
            };

            const getChangeSpan = (change) => {
                if (change === undefined || change === null || isNaN(change)) return '';
                const numChange = parseFloat(change);
                const isPositive = numChange >= 0;
                const colorClass = isPositive ? 'ticker-up' : 'ticker-down';
                const arrow = isPositive ? '▲' : '▼';
                return `<span class="${colorClass}">${arrow} ${Math.abs(numChange).toFixed(2)}%</span>`;
            };

            let copRate = 0;
            if (usdData.rates && usdData.rates.COP) {
                copRate = usdData.rates.COP;
                items.push(`<span class="ticker-label">USD/COP</span> <span class="ticker-value">${formatCurrency(copRate, 'COP')}</span>`);
            }
            if (eurData.rates && eurData.rates.COP) {
                items.push(`<span class="ticker-label">EUR/COP</span> <span class="ticker-value">${formatCurrency(eurData.rates.COP, 'COP')}</span>`);
            }
            
            if (btcData.lastPrice) {
                const btcUsd = parseFloat(btcData.lastPrice);
                items.push(`<span class="ticker-label">BTC/USD</span> <span class="ticker-value">${formatCurrency(btcUsd, 'USD')}</span> ${getChangeSpan(btcData.priceChangePercent)}`);
                if (copRate > 0) {
                    items.push(`<span class="ticker-label">BTC/COP</span> <span class="ticker-value">${formatCurrency(btcUsd * copRate, 'COP')}</span>`);
                }
            }
            if (ethData.lastPrice) {
                const ethUsd = parseFloat(ethData.lastPrice);
                items.push(`<span class="ticker-label">ETH/USD</span> <span class="ticker-value">${formatCurrency(ethUsd, 'USD')}</span> ${getChangeSpan(ethData.priceChangePercent)}`);
                if (copRate > 0) {
                    items.push(`<span class="ticker-label">ETH/COP</span> <span class="ticker-value">${formatCurrency(ethUsd * copRate, 'COP')}</span>`);
                }
            }

            if (items.length > 0) {
                const tickerHTML = [...items, ...items, ...items, ...items].map(item => `<span class="ticker-item">${item}</span>`).join('');
                tickerEl.innerHTML = tickerHTML;
            } else {
                tickerEl.innerHTML = '<span class="ticker-item">Información de mercado no disponible en este momento</span>';
            }

        } catch (error) {
            console.error("Error fetching market data:", error);
            tickerEl.innerHTML = '<span class="ticker-item">Error al cargar datos del mercado</span>';
        }
    }

    fetchMarketData();
    setInterval(fetchMarketData, 60000);
});
