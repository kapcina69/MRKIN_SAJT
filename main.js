// ============================================
// DINAMIČKO POPUNJAVANJE SAJTA
// ============================================

// Popunjavanje SVIH podataka iz config-a
function populateSiteData() {
    if (typeof siteConfig === 'undefined') {
        console.error('siteConfig nije učitan! Proverite da li je config.js fajl povezan.');
        return;
    }

    console.log('✅ siteConfig je učitan:', siteConfig);

    // ===== LOGO I NAZIV =====
    const logoElement = document.querySelector('.logo');
    if (logoElement) {
        logoElement.innerHTML = `✨ ${siteConfig.company.name}`;
    }

    // ===== HERO SEKCIJA =====
    const heroTitle = document.querySelector('.hero h1');
    const heroSubtitle = document.querySelector('.hero p');
    const heroButton = document.querySelector('.hero .cta-button');
    
    if (heroTitle) heroTitle.textContent = siteConfig.hero.title;
    if (heroSubtitle) heroSubtitle.textContent = siteConfig.hero.subtitle;
    if (heroButton) heroButton.textContent = siteConfig.hero.ctaText;

    // ===== O NAMA SEKCIJA =====
    const aboutTitle = document.querySelector('.about-text h3');
    const aboutParagraphs = document.querySelectorAll('.about-text p');
    
    if (aboutTitle) aboutTitle.textContent = siteConfig.about.title;
    if (aboutParagraphs.length >= 2) {
        aboutParagraphs[0].textContent = siteConfig.about.description[0];
        aboutParagraphs[1].textContent = siteConfig.about.description[1];
    }

    // About features
    const featureItems = document.querySelectorAll('.about-features .feature-item');
    featureItems.forEach((item, index) => {
        if (siteConfig.about.features[index]) {
            item.textContent = '✓ ' + siteConfig.about.features[index];
        }
    });

    // ===== ZAŠTO IZABRATI NAS =====
    const whyCards = document.querySelectorAll('.why-card');
    whyCards.forEach((card, index) => {
        if (siteConfig.whyChooseUs[index]) {
            const icon = card.querySelector('.why-icon');
            const title = card.querySelector('h3');
            const description = card.querySelector('p');
            
            if (icon) icon.textContent = siteConfig.whyChooseUs[index].icon;
            if (title) title.textContent = siteConfig.whyChooseUs[index].title;
            if (description) description.textContent = siteConfig.whyChooseUs[index].description;
        }
    });

    // ===== USLUGE =====
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        if (siteConfig.services[index]) {
            const service = siteConfig.services[index];
            card.setAttribute('data-service', service.id);
            
            const icon = card.querySelector('.service-icon');
            const title = card.querySelector('h3');
            const description = card.querySelector('p');
            
            if (icon) icon.textContent = service.icon;
            if (title) title.textContent = service.title;
            if (description) description.textContent = service.shortDescription;
        }
    });

    // ===== GALERIJA =====
    const galleryGrid = document.querySelector('.gallery-grid');
    if (galleryGrid && siteConfig.gallery) {
        galleryGrid.innerHTML = ''; // Očisti postojeće
        
        siteConfig.gallery.forEach(item => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.innerHTML = `
                <img src="${item.src}" alt="${item.alt}" loading="lazy">
                <div class="gallery-overlay">
                    <p>${item.caption}</p>
                </div>
            `;
            galleryGrid.appendChild(galleryItem);
        });
    }

    // ===== KONTAKT INFORMACIJE =====
    
    // Telefoni
    const phoneElements = document.querySelectorAll('[data-contact="phone"]');
    phoneElements.forEach((el, index) => {
        if (siteConfig.contact.phones[index]) {
            el.textContent = siteConfig.contact.phones[index];
        } else {
            el.style.display = 'none'; // Sakrij ako nema podatka
        }
    });

    // Email-ovi
    const emailElements = document.querySelectorAll('[data-contact="email"]');
    emailElements.forEach((el, index) => {
        if (siteConfig.contact.emails[index]) {
            el.textContent = siteConfig.contact.emails[index];
        } else {
            el.style.display = 'none';
        }
    });

    // Adresa
    const cityEl = document.querySelector('[data-contact="city"]');
    const noteEl = document.querySelector('[data-contact="note"]');
    if (cityEl) cityEl.textContent = `${siteConfig.contact.address.city}, ${siteConfig.contact.address.country}`;
    if (noteEl) noteEl.textContent = siteConfig.contact.address.note;

    // Radno vreme
    const weekdaysEl = document.querySelector('[data-contact="weekdays"]');
    const weekendEl = document.querySelector('[data-contact="weekend"]');
    if (weekdaysEl) weekdaysEl.textContent = siteConfig.contact.workingHours.weekdays;
    if (weekendEl) weekendEl.textContent = siteConfig.contact.workingHours.weekend;

    // ===== COPYRIGHT =====
    const copyrightEl = document.querySelector('[data-content="copyright"]');
    if (copyrightEl) copyrightEl.textContent = '© ' + siteConfig.copyright;

    // ===== FORMSPREE ACTION =====
    const form = document.getElementById('contactForm');
    if (form && siteConfig.formspreeId !== 'YOUR_FORM_ID') {
        form.action = `https://formspree.io/f/${siteConfig.formspreeId}`;
    }

    // ===== DRUŠTVENE MREŽE =====
    const socialLinks = document.querySelectorAll('.social-links a');
    if (socialLinks.length >= 3) {
        socialLinks[0].href = siteConfig.social.facebook;
        socialLinks[1].href = siteConfig.social.instagram;
        socialLinks[2].href = siteConfig.social.linkedin;
    }

    console.log('✅ Svi podaci su uspešno učitani na sajt!');
}

// ============================================
// THEME TOGGLE - DARK/LIGHT MODE
// ============================================

function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.querySelector('.theme-icon');
    const body = document.body;

    if (!themeToggle) return;

    // Učitaj sačuvanu temu ili podesi na 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        themeIcon.textContent = '☀️';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Ažuriraj ikonicu
        if (body.classList.contains('dark-mode')) {
            themeIcon.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });
}

// ============================================
// MOBILE MENU TOGGLE
// ============================================

function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.querySelector('.nav-links');

    if (!mobileMenuToggle || !navLinks) return;

    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });

    // Zatvori meni kada se klikne na link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });
}

// ============================================
// SERVICE MODAL FUNCTIONALITY
// ============================================

// Detalji usluga
const serviceDetails = {
    'redovno-ciscenje': {
        icon: '🏢',
        title: 'Redovno Čišćenje Objekata',
        content: `
            <p>Naša usluga redovnog čišćenja objekata obuhvata kompletan spektar aktivnosti neophodnih za održavanje visokog nivoa higijene u vašim poslovnim ili stambenim prostorima.</p>
            
            <h3>Šta obuhvata usluga:</h3>
            <ul>
                <li><strong>Dnevno čišćenje</strong> - Usisavanje, brisanje podova, pražnjenje korpi za otpatke</li>
                <li><strong>Nedeljno čišćenje</strong> - Dubinsko čišćenje sanitarnih čvorova, kuhinja i zajedničkih prostora</li>
                <li><strong>Mesečno održavanje</strong> - Čišćenje teško dostupnih površina, pranje prozora, poliranje površina</li>
                <li><strong>Dezinfekcija</strong> - Sterilizacija svih kontaktnih površina prema najvišim standardima</li>
            </ul>

            <h3>Idealno za:</h3>
            <ul>
                <li>Poslovne zgrade i kancelarije</li>
                <li>Stambene zgrade i zajedničke prostorije</li>
                <li>Medicinske ustanove</li>
                <li>Obrazovne institucije</li>
                <li>Prodajne objekte i shopping centre</li>
            </ul>

            <h3>Prednosti:</h3>
            <ul>
                <li>✓ Fleksibilni termini prilagođeni vašem radnom vremenu</li>
                <li>✓ Obučen i pouzdan personal</li>
                <li>✓ Korišćenje profesionalne opreme i ekoloških sredstava</li>
                <li>✓ Redovne kontrole kvaliteta</li>
                <li>✓ Mogućnost prilagođavanja paketa prema vašim potrebama</li>
            </ul>
        `
    },
    'masinsko-pranje': {
        icon: '🔧',
        title: 'Mašinsko Pranje Podova',
        content: `
            <p>Koristimo najsavremeniju opremu za mašinsko pranje i poliranje tvrdih podnih površina, obezbeđujući dugotrajan sjaj i dubinsku čistoću.</p>
            
            <h3>Vrste podova koje čistimo:</h3>
            <ul>
                <li><strong>Granitne i mermerne površine</strong> - Poliranje i zaštita prirodnog kamena</li>
                <li><strong>Keramičke pločice</strong> - Čišćenje i obnavljanje fugni</li>
                <li><strong>Vinil i linoleum</strong> - Nežno čišćenje koje produžava vek trajanja</li>
                <li><strong>Betonirane površine</strong> - Industrijsko čišćenje i zaštita</li>
                <li><strong>Parketi i laminati</strong> - Specijalizovano tretiranje drvenih površina</li>
            </ul>

            <h3>Naš proces:</h3>
            <ul>
                <li>1. Priprema i analiza stanja podne površine</li>
                <li>2. Primena odgovarajućih sredstava za čišćenje</li>
                <li>3. Mašinsko ribanje rotacionim mašinama</li>
                <li>4. Ispiranje i ekstrakcija prljavštine</li>
                <li>5. Poliranje i apliciranje zaštitnog sloja</li>
                <li>6. Finalna kontrola kvaliteta</li>
            </ul>

            <h3>Rezultati:</h3>
            <ul>
                <li>✓ Sjajne i savršeno čiste površine</li>
                <li>✓ Uklanjanje dubokih mrlja i naslaga</li>
                <li>✓ Produžen vek trajanja podnih obloga</li>
                <li>✓ Higijenski tretman koji eliminiše bakterije</li>
            </ul>
        `
    },
    'visoki-pritisak': {
        icon: '💦',
        title: 'Pranje pod Visokim Pritiskom',
        content: `
            <p>Profesionalno pranje pod visokim pritiskom je najefektivniji način za uklanjanje upornih mrlja, mahovina, algi i drugih nečistoća sa eksterijernih površina.</p>
            
            <h3>Šta čistimo:</h3>
            <ul>
                <li><strong>Fasade zgrada</strong> - Uklanjanje prljavštine, aerozagađenja i organskih naslaga</li>
                <li><strong>Parking prostori</strong> - Čišćenje asfalta, betona i uljanih mrlja</li>
                <li><strong>Terase i balkoni</strong> - Obnavljanje originalnog izgleda pločica</li>
                <li><strong>Pešačke staze i prilazi</strong> - Uklanjanje mahovine i klizavih površina</li>
                <li><strong>Ograde i zidovi</strong> - Čišćenje metala, betona i kamena</li>
                <li><strong>Baštenska oprema</strong> - Namještaj, fontane, dekoracije</li>
            </ul>

            <h3>Tehničke mogućnosti:</h3>
            <ul>
                <li>Prilagodljiv pritisak vode (50-250 bar)</li>
                <li>Kontrola temperature (hladno i toplo pranje)</li>
                <li>Specijalizovane mlaznice za različite površine</li>
                <li>Ekološka sredstva za efikasnije rezultate</li>
            </ul>

            <h3>Prednosti naše usluge:</h3>
            <ul>
                <li>✓ Brzo i efikasno čišćenje velikih površina</li>
                <li>✓ Bez oštećenja originalnih materijala</li>
                <li>✓ Ekološki pristup bez agresivnih hemikalija</li>
                <li>✓ Drammatično poboljšanje izgleda objekta</li>
                <li>✓ Preventiva protiv habanja i propadanja materijala</li>
            </ul>
        `
    },
    'dubinsko-ciscenje': {
        icon: '🛋️',
        title: 'Dubinsko Čišćenje Tepiha i Nameštaja',
        content: `
            <p>Specijalizovani tretman tepiha, itisona i tapaciranog nameštaja koji obezbeđuje potpuno uklanjanje nečistoća, alergena i neprijatnih mirisa.</p>
            
            <h3>Usluge dubinskog čišćenja:</h3>
            <ul>
                <li><strong>Pranje tepiha</strong> - Persijski, orijentalni, moderni tepisi svih dimenzija</li>
                <li><strong>Čišćenje itisona</strong> - Od teških industrijskih do delikatnih rezidencijalnih</li>
                <li><strong>Tapaciran nameštaj</strong> - Sofe, fotelje, stolice, madrace</li>
                <li><strong>Automobilske tapacerije</strong> - Sedišta, plafoni, tepisi u vozilima</li>
                <li><strong>Zavese i draperije</strong> - Nežan tretman osetljivih materijala</li>
            </ul>

            <h3>Naša tehnologija:</h3>
            <ul>
                <li><strong>Hot water extraction metoda</strong> - Najefektivnija tehnika prema IICRC standardima</li>
                <li><strong>Dry cleaning</strong> - Za materijale osetljive na vlagu</li>
                <li><strong>Rotary shampooing</strong> - Za teške prljavštine</li>
                <li><strong>Bonnet cleaning</strong> - Za brzo osvežavanje</li>
                <li><strong>Aplikacija zaštitnih preparata</strong> - Dugotrajna zaštita vlakana</li>
            </ul>

            <h3>Proces čišćenja:</h3>
            <ul>
                <li>1. Inspekcija i određivanje vrste materijala</li>
                <li>2. Aspiracija za uklanjanje suve prljavštine</li>
                <li>3. Tretman mrlja specijalnim preparatima</li>
                <li>4. Dubinsko pranje sa ekstrakcijom</li>
                <li>5. Neutralizacija i ispiranje</li>
                <li>6. Brzo sušenje profesionalnom opremom</li>
                <li>7. Aplikacija zaštite (opciono)</li>
            </ul>

            <h3>Zdravstvene prednosti:</h3>
            <ul>
                <li>✓ Eliminacija grinja i alergena</li>
                <li>✓ Uklanjanje bakterija i virusa</li>
                <li>✓ Bolje kvalitet vazduha u prostoru</li>
                <li>✓ Smanjenje problema sa respiratornim tegobama</li>
            </ul>
        `
    },
    'staklene-povrsine': {
        icon: '🪟',
        title: 'Čišćenje Staklenih Površina',
        content: `
            <p>Profesionalno čišćenje svih vrsta staklenih površina koje garantuje kristalno čist rezultat bez tragova, mrlja i pruga.</p>
            
            <h3>Vrste staklenih površina:</h3>
            <ul>
                <li><strong>Prozori</strong> - Stambeni, poslovni, visinske zgrade</li>
                <li><strong>Staklene fasade</strong> - Savremene poslovne građevine</li>
                <li><strong>Izlozi</strong> - Prodavnice, restorani, hoteli</li>
                <li><strong>Zimske bašte</strong> - Staklene konstrukcije i krovovi</li>
                <li><strong>Terase i balkoni</strong> - Staklene ograde i pregrade</li>
                <li><strong>Unutrašnje pregrade</strong> - Kancelarijski separei</li>
                <li><strong>Okvirni elementi</strong> - Aluminijum, PVC, drvo</li>
            </ul>

            <h3>Profesionalna oprema:</h3>
            <ul>
                <li>Water-fed pole system za visinske površine</li>
                <li>Profesionalne skvidži gumice bez tragova</li>
                <li>Dejonizovana voda za besprekoran sjaj</li>
                <li>Teleskopske šipke do 20m visine</li>
                <li>Sigurnosna oprema za rad na visini</li>
            </ul>

            <h3>Naš pristup:</h3>
            <ul>
                <li>1. Procena stanja i određivanje metoda</li>
                <li>2. Uklanjanje grubih nečistoća</li>
                <li>3. Aplikacija profesionalnih sredstava</li>
                <li>4. Čišćenje staklenih površina</li>
                <li>5. Čišćenje ramova i štokov</li>
                <li>6. Poliranje i završna kontrola</li>
            </ul>

            <h3>Rezultati:</h3>
            <ul>
                <li>✓ Kristalno čisto staklo bez pruga</li>
                <li>✓ Povećan prodor prirodne svetlosti</li>
                <li>✓ Poboljšan estetski izgled objekta</li>
                <li>✓ Produžen vek trajanja stakla i ramova</li>
            </ul>

            <h3>Periodičnost:</h3>
            <p>Preporučujemo čišćenje staklenih površina 2-4 puta godišnje za optimalne rezultate, sa mogućnošću prilagođavanja prema vašim potrebama i lokaciji objekta.</p>
        `
    },
    'zelene-povrsine': {
        icon: '🌳',
        title: 'Uređivanje Zelenih Površina',
        content: `
            <p>Kompletna briga o zelenim površinama koja obuhvata održavanje, uređenje i estetsko oblikovanje spoljašnjih prostora.</p>
            
            <h3>Naše usluge održavanja:</h3>
            <ul>
                <li><strong>Košenje travnjaka</strong> - Redovno ili po potrebi, različite visine</li>
                <li><strong>Triming ivica</strong> - Precizno oblikovanje uz staze i objekte</li>
                <li><strong>Prihrana i zalivanje</strong> - Sezonsko đubrenje i optimizacija navodnjavanja</li>
                <li><strong>Aeracija tla</strong> - Poboljšanje strukture i kvaliteta zemljišta</li>
                <li><strong>Uklanjanje korova</strong> - Manuelno ili ekološkim herbicidima</li>
                <li><strong>Orezivanje grmlja</strong> - Formativna i sanitarna rezidba</li>
                <li><strong>Oblikovanje živih ograda</strong> - Dekorativno i funkcionalno uređenje</li>
            </ul>

            <h3>Sezonske aktivnosti:</h3>
            <ul>
                <li><strong>Proleće</strong> - Čišćenje nakon zime, aeracija, setva, prihrana</li>
                <li><strong>Leto</strong> - Redovno košenje, zalivanje, kontrola štetočina</li>
                <li><strong>Jesen</strong> - Sakupljanje lišća, priprema za zimu, jesenja đubriva</li>
                <li><strong>Zima</strong> - Čišćenje snega, zaštita biljaka, planiranje prolećnih radova</li>
            </ul>

            <h3>Dodatne usluge:</h3>
            <ul>
                <li>Postavljanje nove travnate površine (setva ili busen)</li>
                <li>Sadnja ukrasnog drveća i grmlja</li>
                <li>Dizajniranje cvetnih aranžmana</li>
                <li>Instalacija sistema za navodnjavanje</li>
                <li>Postavljanje vrtnog osvetljenja</li>
                <li>Izgradnja staza i betonskih površina</li>
            </ul>

            <h3>Prednosti:</h3>
            <ul>
                <li>✓ Uredan i atraktivan spoljašnji prostor</li>
                <li>✓ Povećana vrednost nekretnine</li>
                <li>✓ Zdrave i vitalne biljke</li>
                <li>✓ Redovno praćenje i briga tokom cele godine</li>
                <li>✓ Profesionalna oprema i stručno znanje</li>
            </ul>
        `
    },
    'grafiti': {
        icon: '🎨',
        title: 'Uklanjanje Grafita',
        content: `
            <p>Specijalizovana usluga profesionalnog uklanjanja grafita sa svih vrsta površina primenom najsavremenijih tehnika i sredstava koja ne oštećuju materijal.</p>
            
            <h3>Površine sa kojih uklanjamo grafite:</h3>
            <ul>
                <li><strong>Betonske površine</strong> - Zidovi, stubovi, potporni zidovi</li>
                <li><strong>Ciglane fasade</strong> - Stare i nove cigle, malter</li>
                <li><strong>Kamen i mermer</strong> - Prirodni i veštački kamen</li>
                <li><strong>Metalne površine</strong> - Ograde, kapije, kontejneri</li>
                <li><strong>Plastika i PVC</strong> - Javni mobilijaru autobusima</li>
                <li><strong>Drvo</strong> - Ograde, klupe, građevinske strukture</li>
                <li><strong>Staklo</strong> - Prozori, izlozi, stajalista</li>
            </ul>

            <h3>Metode uklanjanja:</h3>
            <ul>
                <li><strong>Hemijsko tretiranje</strong> - Specijalni rastvarači prilagođeni vrsti boje i površine</li>
                <li><strong>Pranje pod pritiskom</strong> - Za otporne površine kao beton i kamen</li>
                <li><strong>Peskiranje (sandblasting)</strong> - Za duboko urezane grafite na tvrdim površinama</li>
                <li><strong>Soda blasting</strong> - Nežnija alternativa za osetljive materijale</li>
                <li><strong>Gel preparati</strong> - Za vertikalne i porozne površine</li>
                <li><strong>Lasersko uklanjanje</strong> - Za delikatne i istorijske objekte</li>
            </ul>

            <h3>Naš proces rada:</h3>
            <ul>
                <li>1. Procena stanja i testiranje materijala</li>
                <li>2. Izbor odgovarajuće metode i sredstava</li>
                <li>3. Zaštita okolnih površina</li>
                <li>4. Aplikacija sredstva i vreme delovanja</li>
                <li>5. Mehaničko ili hemijsko uklanjanje</li>
                <li>6. Ispiranje i neutralizacija</li>
                <li>7. Aplikacija zaštitnog premaza (opciono)</li>
            </ul>

            <h3>Preventivna zaštita:</h3>
            <ul>
                <li>Anti-graffiti premazi koji olakšavaju buduće čišćenje</li>
                <li>Trajni zaštitni slojevi za često targete površine</li>
                <li>Žrtveni premazi koji se uklanjaju zajedno sa grafitima</li>
            </ul>

            <h3>Prednosti:</h3>
            <ul>
                <li>✓ Potpuno uklanjanje bez tragova</li>
                <li>✓ Očuvanje originalne površine</li>
                <li>✓ Brza intervencija (u roku od 24-48h)</li>
                <li>✓ Ekološki prihvatljive metode</li>
                <li>✓ Mogućnost preventivne zaštite</li>
            </ul>
        `
    },
    'garaze': {
        icon: '🚗',
        title: 'Čišćenje Garaža',
        content: `
            <p>Profesionalno čišćenje garažnih prostora koje obuhvata sve aspekte održavanja - od podova do plafona, sa posebnim akcentom na uklanjanje uljanih mrlja i industrijskih nečistoća.</p>
            
            <h3>Vrste garaža koje čistimo:</h3>
            <ul>
                <li><strong>Podzemne garaže</strong> - Stambeni i poslovni objekti</li>
                <li><strong>Javni parking prostori</strong> - Shopping centri, bolnice, aerodromi</li>
                <li><strong>Privatne garaže</strong> - Porodične kuće</li>
                <li><strong>Servisne garaže</strong> - Auto servisi i radionice</li>
                <li><strong>Parking hale</strong> - Višespratne parking strukture</li>
            </ul>

            <h3>Što obuhvata usluga:</h3>
            <ul>
                <li><strong>Čišćenje podova</strong> - Uklanjanje ulja, gume, soli i drugih naslaga</li>
                <li><strong>Mašinsko ribanje</strong> - Betonske i epoksidne podne površine</li>
                <li><strong>Pranje rampi</strong> - Ulazne i izlazne rampe</li>
                <li><strong>Čišćenje zidova</strong> - Uklanjanje prljavštine i izduvnih gasova</li>
                <li><strong>Plafoni i instalacije</strong> - Cevi, kablovi, ventilacioni sistemi</li>
                <li><strong>Parking oznake</strong> - Osvežavanje linija i brojeva</li>
                <li><strong>Ventilacioni otvori</strong> - Čišćenje rešetki i kanala</li>
            </ul>

            <h3>Specijalizovano čišćenje:</h3>
            <ul>
                <li><strong>Degreasing</strong> - Uklanjanje uljanih i masnih mrlja industrijskim razmaščivačima</li>
                <li><strong>Odstranjivanje tragova gume</strong> - Sa rampi i podova</li>
                <li><strong>Neutralizacija mirisa</strong> - Profesionalni preparati protiv izduvnih gasova</li>
                <li><strong>Pranje slivnika</strong> - Čišćenje odvoda i separatora ulja</li>
            </ul>

            <h3>Dodatne usluge:</h3>
            <ul>
                <li>Primena epoksidnih premaza za zaštitu podova</li>
                <li>Antiprašinski tretmani betonskih površina</li>
                <li>Postavljanje sigurnosne signalizacije</li>
                <li>Čišćenje saobraćajnih ogledala</li>
                <li>Održavanje LED svetiljki</li>
            </ul>

            <h3>Raspored čišćenja:</h3>
            <ul>
                <li><strong>Dnevno</strong> - Osnovni održavanje, pražnjenje korpi</li>
                <li><strong>Nedeljno</strong> - Mašinsko pranje prometnih zona</li>
                <li><strong>Mesečno</strong> - Dubinsko čišćenje svih površina</li>
                <li><strong>Sezonsko</strong> - Generalno pranje, tretmani zaštite</li>
            </ul>

            <h3>Prednosti:</h3>
            <ul>
                <li>✓ Higijenski i bezbedan prostor</li>
                <li>✓ Produžen vek trajanja podnih obloga</li>
                <li>✓ Bolja ventilacija i kvalitet vazduha</li>
                <li>✓ Redukacija klizavosti podova</li>
                <li>✓ Profesionalan izgled objekta</li>
            </ul>
        `
    },
    'gradevinski-radovi': {
        icon: '🏗️',
        title: 'Čišćenje Nakon Građevinskih Radova',
        content: `
            <p>Kompleksna usluga finalnog čišćenja nakon završetka građevinskih, adaptacionih ili renoviranih radova koja prostor čini potpuno spremnim za useljenje ili korišćenje.</p>
            
            <h3>Vrste objekata:</h3>
            <ul>
                <li><strong>Novoizgrađeni objekti</strong> - Stambene i poslovne zgrade</li>
                <li><strong>Rekonstruisani prostori</strong> - Potpune ili delimične adaptacije</li>
                <li><strong>Renovirani stanovi</strong> - Posle zamene podova, keramike, krečenja</li>
                <li><strong>Poslovni prostori</strong> - Kancelarije, prodavnice, restorani</li>
                <li><strong>Industrijski objekti</strong> - Proizvodne hale, magacini</li>
            </ul>

            <h3>Fazno čišćenje:</h3>
            <ul>
                <li><strong>Grubo čišćenje (1. faza)</strong>
                    <ul>
                        <li>Uklanjanje građevinskog šuta i krupnog otpada</li>
                        <li>Čišćenje prozora od folija i zaštitnih traka</li>
                        <li>Skidanje lepljiva sa podova i pločica</li>
                        <li>Prva faza usisavanja prašine</li>
                    </ul>
                </li>
                <li><strong>Detaljno čišćenje (2. faza)</strong>
                    <ul>
                        <li>Uklanjanje prašine sa svih površina</li>
                        <li>Čišćenje zidova od kečenja i gipsa</li>
                        <li>Pranje podova od cement i malterskih ostataka</li>
                        <li>Čišćenje sanitarija i keramike</li>
                    </ul>
                </li>
                <li><strong>Finalno čišćenje (3. faza)</strong>
                    <ul>
                        <li>Poliranje stakla i ogledala</li>
                        <li>Finalna obrada podova</li>
                        <li>Čišćenje svetiljki i prekidača</li>
                        <li>Završna inspekcija i korekcije</li>
                    </ul>
                </li>
            </ul>

            <h3>Specifična čišćenja:</h3>
            <ul>
                <li><strong>Cement i malter</strong> - Kiseline i specijalni rastvarači</li>
                <li><strong>Boja i gips</strong> - Nežno uklanjanje bez oštećenja površina</li>
                <li><strong>Silikon i lepkovi</strong> - Profcionalni razblažvači</li>
                <li><strong>Prašina od brušenja</strong> - Industrijski usisivači sa HEPA filterima</li>
                <li><strong>Grafitne mrlje</strong> - Sa pločica i keramike</li>
            </ul>

            <h3>Površine koje čistimo:</h3>
            <ul>
                <li>Svi tipovi podova (parket, laminat, pločice, kamen)</li>
                <li>Zidovi (krečeni, glet, tapete, pločice)</li>
                <li>Plafoni (rigips, paneli, kazete)</li>
                <li>Prozori i vrata (sa okvirima)</li>
                <li>Sanitarni čvorovi (potpuna dezinfekcija)</li>
                <li>Kuhinje (elementi, šporet, frižider)</li>
                <li>Garderobe i ostave</li>
                <li>Stepenice i hodnici</li>
                <li>Terase i balkoni</li>
            </ul>

            <h3>Specijalna oprema:</h3>
            <ul>
                <li>Industrijski usisivači za finu građevinsku prašinu</li>
                <li>Mašine za poliranje različitih podnih površina</li>
                <li>Teleskopski držači za visoke plafone</li>
                <li>Parne čistilice za dubinsko čišćenje</li>
                <li>Specijalizovana hemija za različite materijale</li>
            </ul>

            <h3>Vremenski okvir:</h3>
            <ul>
                <li>Stan 50-100m²: 1-2 radna dana</li>
                <li>Kuća 100-200m²: 2-3 radna dana</li>
                <li>Poslovni prostor: prema dogovoru</li>
                <li>Moguće i ekspresne usluge za hitne slučajeve</li>
            </ul>

            <h3>Rezultat:</h3>
            <ul>
                <li>✓ Potpuno čist i useljiv prostor</li>
                <li>✓ Bez ijednog tragova gradnje</li>
                <li>✓ Dezinfikovane sve površine</li>
                <li>✓ Sjajni podovi i prozori</li>
                <li>✓ Spremno za preuzimanje ili useljenje</li>
            </ul>

            <p><strong>Napomena:</strong> Uključujemo odvoz sitnog šuta i pakovanje građevinskog otpada u big-bag vreće (po dogovoru).</p>
        `
    }
};

function initServiceModals() {
    const modal = document.getElementById('serviceModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const closeBtn = document.querySelector('.close-modal');

    if (!modal) return;

    // Otvori modal kada se klikne na karticu usluge
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('click', function() {
            const serviceKey = this.getAttribute('data-service');
            const service = serviceDetails[serviceKey];
            
            if (service) {
                modalIcon.textContent = service.icon;
                modalTitle.textContent = service.title;
                modalBody.innerHTML = service.content;
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Zatvori modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Zatvori modal klikom van njega
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Zatvori modal sa ESC tasterom
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// ============================================
// SMOOTH SCROLLING
// ============================================

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// SCROLL TO TOP BUTTON
// ============================================

function initScrollToTop() {
    const scrollTopBtn = document.getElementById('scrollTop');
    if (!scrollTopBtn) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// CONTACT FORM SUBMISSION
// ============================================

function initContactForm() {
    const form = document.getElementById('contactForm');
    const formStatus = document.getElementById('form-status');
    
    if (!form) return;

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Šalje se...';
        submitBtn.disabled = true;
        
        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                if (formStatus) {
                    formStatus.style.display = 'block';
                    formStatus.style.color = '#4ade80';
                    formStatus.textContent = '✓ Hvala Vam na poruci! Kontaktiraćemo Vas uskoro.';
                }
                form.reset();
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            if (formStatus) {
                formStatus.style.display = 'block';
                formStatus.style.color = '#f87171';
                formStatus.textContent = '✗ Došlo je do greške. Molimo pokušajte ponovo ili nas kontaktirajte direktno.';
            }
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            if (formStatus) {
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 5000);
            }
        }
    });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s forwards';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card, .why-card, .gallery-item').forEach(el => {
        observer.observe(el);
    });
}

// ============================================
// INICIJALIZACIJA - POKREĆE SE KADA SE STRANICA UČITA
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Učitaj sve funkcionalnosti
    populateSiteData();  // PROMENJENA FUNKCIJA
    initThemeToggle();
    initMobileMenu();
    initServiceModals();
    initSmoothScrolling();
    initScrollToTop();
    initContactForm();
    initScrollAnimations();

    console.log('✅ Sajt je uspešno učitan!');
});