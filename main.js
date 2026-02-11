// ============================================
// FACILITY SOLUTIONS - MAIN JAVASCRIPT
// ============================================

// Populate Contact Info
function populateContactInfo() {
    if (typeof siteConfig === 'undefined') {
        console.error('Config not loaded');
        return;
    }

    // Logo
    const logoText = document.querySelector('.logo-text');
    if (logoText && siteConfig.company.name) {
        logoText.textContent = siteConfig.company.name;
    }

    // Contact Info
    const phoneEl = document.querySelector('[data-contact="phone"]');
    const emailEl = document.querySelector('[data-contact="email"]');
    const cityEl = document.querySelector('[data-contact="city"]');
    const noteEl = document.querySelector('[data-contact="note"]');
    const weekdaysEl = document.querySelector('[data-contact="weekdays"]');
    const weekendEl = document.querySelector('[data-contact="weekend"]');

    if (phoneEl && siteConfig.contact.phones[0]) {
        phoneEl.textContent = siteConfig.contact.phones[0];
    }
    if (emailEl && siteConfig.contact.emails[0]) {
        emailEl.textContent = siteConfig.contact.emails[0];
    }
    if (cityEl && siteConfig.contact.address) {
        cityEl.textContent = `${siteConfig.contact.address.city}, ${siteConfig.contact.address.country}`;
    }
    if (noteEl && siteConfig.contact.address) {
        noteEl.textContent = siteConfig.contact.address.note;
    }
    if (weekdaysEl && siteConfig.contact.workingHours) {
        weekdaysEl.textContent = siteConfig.contact.workingHours.weekdays;
    }
    if (weekendEl && siteConfig.contact.workingHours) {
        weekendEl.textContent = siteConfig.contact.workingHours.weekend;
    }

    // Copyright
    const copyrightEl = document.querySelector('[data-content="copyright"]');
    if (copyrightEl && siteConfig.copyright) {
        copyrightEl.textContent = '© ' + siteConfig.copyright;
    }

    // Form action
    const form = document.getElementById('contactForm');
    if (form && siteConfig.formspreeId && siteConfig.formspreeId !== 'YOUR_FORM_ID') {
        form.action = `https://formspree.io/f/${siteConfig.formspreeId}`;
        form.method = 'POST';
    }

    // Social links
    const socialLinks = document.querySelectorAll('.social-link');
    if (socialLinks.length >= 3 && siteConfig.social) {
        socialLinks[0].href = siteConfig.social.facebook || '#';
        socialLinks[1].href = siteConfig.social.instagram || '#';
        socialLinks[2].href = siteConfig.social.linkedin || '#';
    }
}

// Populate Services
function populateServices() {
    if (typeof siteConfig === 'undefined' || !siteConfig.services) return;

    const grid = document.querySelector('.services-grid');
    if (!grid) return;

    grid.innerHTML = '';

    siteConfig.services.forEach((service, index) => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.setAttribute('data-service', service.id);
        
        card.innerHTML = `
            <div class="service-number">0${index + 1}</div>
            <h3>${service.title}</h3>
            <p>${service.shortDescription}</p>
            <div class="service-arrow">→</div>
        `;
        
        grid.appendChild(card);
    });
}

// Populate Why Us
function populateWhyUs() {
    if (typeof siteConfig === 'undefined' || !siteConfig.whyChooseUs) return;

    const list = document.querySelector('.features-list');
    if (!list) return;

    list.innerHTML = '';

    siteConfig.whyChooseUs.forEach(item => {
        const feature = document.createElement('div');
        feature.className = 'feature-item';
        
        feature.innerHTML = `
            <div class="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </div>
            <div class="feature-content">
                <h4>${item.title}</h4>
                <p>${item.description}</p>
            </div>
        `;
        
        list.appendChild(feature);
    });
}

// Populate Gallery
function populateGallery() {
    if (typeof siteConfig === 'undefined' || !siteConfig.gallery) return;

    const grid = document.querySelector('.gallery-grid');
    if (!grid) return;

    grid.innerHTML = '';

    siteConfig.gallery.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        galleryItem.innerHTML = `
            <img src="${item.src}" alt="${item.alt}" loading="lazy">
            <div class="gallery-overlay">
                <p>${item.caption}</p>
            </div>
        `;
        
        grid.appendChild(galleryItem);
    });
}

// Mobile Menu
function initMobileMenu() {
    const toggle = document.getElementById('mobileToggle');
    const menu = document.getElementById('navMenu');

    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        menu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            menu.classList.remove('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !toggle.contains(e.target)) {
            toggle.classList.remove('active');
            menu.classList.remove('active');
        }
    });
}

// Smooth Scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const position = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: position,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll to Top
function initScrollToTop() {
    const btn = document.getElementById('scrollTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Service Modals
const serviceDetails = {
    'redovno-ciscenje': {
        title: 'Redovno Čišćenje Objekata',
        content: `
            <p>Naša usluga redovnog čišćenja obuhvata kompletan spektar aktivnosti za održavanje visokog nivoa higijene.</p>
            <h3>Šta obuhvata:</h3>
            <ul>
                <li><strong>Dnevno čišćenje</strong> - Usisavanje, brisanje podova, pražnjenje korpi</li>
                <li><strong>Nedeljno čišćenje</strong> - Dubinsko čišćenje sanitarnih čvorova i kuhinja</li>
                <li><strong>Mesečno održavanje</strong> - Čišćenje teško dostupnih površina, pranje prozora</li>
                <li><strong>Dezinfekcija</strong> - Sterilizacija kontaktnih površina</li>
            </ul>
            <h3>Idealno za:</h3>
            <ul>
                <li>Poslovne zgrade i kancelarije</li>
                <li>Stambene zgrade</li>
                <li>Medicinske ustanove</li>
                <li>Obrazovne institucije</li>
            </ul>
        `
    },
    'masinsko-pranje': {
        title: 'Mašinsko Pranje Podova',
        content: `
            <p>Najsavremenija oprema za mašinsko pranje i poliranje tvrdih podnih površina.</p>
            <h3>Vrste podova:</h3>
            <ul>
                <li>Granitne i mermerne površine</li>
                <li>Keramičke pločice</li>
                <li>Vinil i linoleum</li>
                <li>Betonirane površine</li>
            </ul>
        `
    },
    'visoki-pritisak': {
        title: 'Pranje pod Visokim Pritiskom',
        content: `
            <p>Najefektivniji način za uklanjanje upornih mrlja sa eksterijernih površina.</p>
            <h3>Šta čistimo:</h3>
            <ul>
                <li>Fasade zgrada</li>
                <li>Parking prostori</li>
                <li>Terase i balkoni</li>
                <li>Pešačke staze</li>
            </ul>
        `
    },
    'dubinsko-ciscenje': {
        title: 'Dubinsko Čišćenje',
        content: `
            <p>Specijalizovani tretman tepiha, itisona i tapaciranog nameštaja.</p>
            <h3>Usluge:</h3>
            <ul>
                <li>Pranje tepiha</li>
                <li>Čišćenje itisona</li>
                <li>Tapaciran nameštaj</li>
                <li>Automobilske tapacerije</li>
            </ul>
        `
    },
    'staklene-povrsine': {
        title: 'Čišćenje Staklenih Površina',
        content: `
            <p>Profesionalno čišćenje svih vrsta staklenih površina.</p>
            <h3>Površine:</h3>
            <ul>
                <li>Prozori - stambeni i poslovni</li>
                <li>Staklene fasade</li>
                <li>Izlozi</li>
                <li>Zimske bašte</li>
            </ul>
        `
    },
    'zelene-povrsine': {
        title: 'Uređivanje Zelenih Površina',
        content: `
            <p>Kompletna briga o zelenim površinama.</p>
            <h3>Usluge:</h3>
            <ul>
                <li>Košenje travnjaka</li>
                <li>Orezivanje grmlja</li>
                <li>Sadnja i održavanje</li>
                <li>Sezonske aktivnosti</li>
            </ul>
        `
    },
    'grafiti': {
        title: 'Uklanjanje Grafita',
        content: `
            <p>Stručno uklanjanje grafita bez oštećenja površina.</p>
            <h3>Metode:</h3>
            <ul>
                <li>Hemijsko tretiranje</li>
                <li>Pranje pod pritiskom</li>
                <li>Peskiranje</li>
                <li>Gel preparati</li>
            </ul>
        `
    },
    'garaze': {
        title: 'Čišćenje Garaža',
        content: `
            <p>Profesionalno čišćenje garažnih prostora.</p>
            <h3>Obuhvata:</h3>
            <ul>
                <li>Čišćenje podova</li>
                <li>Pranje rampi</li>
                <li>Uklanjanje ulja i gume</li>
                <li>Čišćenje zidova i plafona</li>
            </ul>
        `
    },
    'gradevinski-radovi': {
        title: 'Čišćenje Nakon Građevinskih Radova',
        content: `
            <p>Kompletno čišćenje nakon renoviranja ili gradnje.</p>
            <h3>Fazno čišćenje:</h3>
            <ul>
                <li><strong>Grubo čišćenje</strong> - Uklanjanje šuta</li>
                <li><strong>Detaljno čišćenje</strong> - Prašina i malter</li>
                <li><strong>Finalno čišćenje</strong> - Poliranje i završna obrada</li>
            </ul>
        `
    }
};

function initServiceModals() {
    const modal = document.getElementById('serviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const closeBtn = document.querySelector('.close-modal');

    if (!modal) return;

    document.addEventListener('click', (e) => {
        const card = e.target.closest('.service-card');
        if (card) {
            const key = card.getAttribute('data-service');
            const service = serviceDetails[key];
            
            if (service) {
                modalTitle.textContent = service.title;
                modalBody.innerHTML = service.content;
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        }
    });

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Contact Form
function initContactForm() {
    const form = document.getElementById('contactForm');
    const status = document.getElementById('form-status');
    
    if (!form) return;

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const btn = form.querySelector('.submit-btn');
        const originalText = btn.textContent;
        btn.textContent = 'Šalje se...';
        btn.disabled = true;
        
        if (!form.action || form.action.includes('YOUR_FORM_ID')) {
            if (status) {
                status.style.display = 'block';
                status.style.color = '#0d9488';
                status.textContent = 'Demo režim - Konfiguriši Formspree ID u config.js';
            }
            form.reset();
            btn.textContent = originalText;
            btn.disabled = false;
            return;
        }

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });
            
            if (response.ok) {
                if (status) {
                    status.style.display = 'block';
                    status.style.color = '#0d9488';
                    status.textContent = 'Poruka uspešno poslata!';
                }
                form.reset();
            } else {
                throw new Error('Error');
            }
        } catch (error) {
            if (status) {
                status.style.display = 'block';
                status.style.color = '#ef4444';
                status.textContent = 'Greška. Pokušajte ponovo.';
            }
        } finally {
            btn.textContent = originalText;
            btn.disabled = false;
            
            if (status) {
                setTimeout(() => {
                    status.style.display = 'none';
                }, 5000);
            }
        }
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.service-card, .feature-item, .gallery-item, .stat-box').forEach(el => {
        observer.observe(el);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    populateContactInfo();
    populateServices();
    populateWhyUs();
    populateGallery();
    initMobileMenu();
    initSmoothScrolling();
    initScrollToTop();
    initServiceModals();
    initContactForm();
    initScrollAnimations();
});