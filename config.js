// ============================================
// KONFIGURACIJA SAJTA - OVDE MENJAJTE PODATKE
// ============================================

const siteConfig = {
    // Osnovne informacije o firmi
    company: {
        name: 'Facility Solutions',
        tagline: 'Profesionalne Usluge Čišćenja i održavanja objekata',
        description: 'Vaš partner za čistoću i higijenu u domu i poslovnom prostoru'
    },

    // Kontakt informacije
    contact: {
        phones: [
            '+381 61 60 88890',
        ],
        emails: [
            'info@proclean.rs',
            'kontakt@proclean.rs'
        ],
        address: {
            city: 'Beograd',
            country: 'Srbija',
            note: 'Radimo na teritoriji cele Srbije'
        },
        workingHours: {
            weekdays: 'Ponedeljak - Petak: 08:00 - 20:00',
            weekend: 'Vikend: 09:00 - 17:00'
        }
    },

    // Društvene mreže
    social: {
        facebook: 'https://facebook.com/vasa-stranica',
        instagram: 'https://instagram.com/vasa-stranica',
        linkedin: 'https://linkedin.com/company/vasa-stranica'
    },

    // Hero sekcija
    hero: {
        title: 'Profesionalne Usluge Čišćenja i Održavanja Objekata',
        subtitle: 'Vaš partner za čistoću i higijenu u domu i poslovnom prostoru',
        ctaText: 'Zakažite Termin'
    },

    // O nama sekcija
    about: {
        title: 'Vaš Pouzdani Partner za Čišćenje i Održavanje Objekata',
        description: [
            'Smo profesionalna firma sa dugogodišnjim iskustvom u pružanju usluga čišćenja. Naš tim stručnjaka koristi najsavremeniju opremu i ekološki prihvatljiva sredstva kako bi Vam pružio uslugu najvišeg kvaliteta.',
            'Verujemo da čist prostor doprinosi boljem kvalitetu života i rada, zato pristupamo svakom projektu sa pažnjom i posvećenošću.'
        ],
        features: [
            'Licencirani i osigurani',
            'Dostupni 24/7',
            'Ekološka sredstva',
            'Povoljne cene'
        ]
    },

    // Razlozi zašto izabrati nas
    whyChooseUs: [
        {
            icon: '⭐',
            title: 'Kvalitet',
            description: 'Najviši standardi u svakom poslu'
        },
        {
            icon: '⚡',
            title: 'Brzina',
            description: 'Efikasno i pravovremeno izvršavanje'
        },
        {
            icon: '💰',
            title: 'Cena',
            description: 'Konkurentne i transparentne cene'
        },
        {
            icon: '🤝',
            title: 'Poverenje',
            description: 'Stotine zadovoljnih klijenata'
        }
    ],

    // Usluge sa detaljnim opisima
    services: [
        {
            id: 'redovno-ciscenje',
            icon: '🏢',
            title: 'Redovno Čišćenje Objekata',
            shortDescription: 'Profesionalno održavanje čistoće poslovnih i stambenih prostora na dnevnom, nedeljnom ili mesečnom nivou.'
        },
        {
            id: 'masinsko-pranje',
            icon: '🔧',
            title: 'Mašinsko Pranje Podova',
            shortDescription: 'Dubinsko čišćenje tvrdih podnih površina najsavremenijom opremom za dugotrajan sjaj i higijenu.'
        },
        {
            id: 'visoki-pritisak',
            icon: '💦',
            title: 'Pranje pod Visokim Pritiskom',
            shortDescription: 'Efikasno uklanjanje upornih mrlja i nečistoća sa eksterijernih površina.'
        },
        {
            id: 'dubinsko-ciscenje',
            icon: '🛋️',
            title: 'Dubinsko Čišćenje',
            shortDescription: 'Profesionalno pranje tepiha, itisona i nameštaja sa potpunim uklanjanjem alergena i nečistoća.'
        },
        {
            id: 'staklene-povrsine',
            icon: '🪟',
            title: 'Čišćenje Staklenih Površina',
            shortDescription: 'Besprekorno čiste staklene površine bez tragova za savršen izgled Vašeg prostora.'
        },
        {
            id: 'zelene-povrsine',
            icon: '🌳',
            title: 'Uređivanje Zelenih Površina',
            shortDescription: 'Održavanje i nega zelenih površina i okoline objekata za prijatan ambijent.'
        },
        {
            id: 'grafiti',
            icon: '🎨',
            title: 'Uklanjanje Grafita',
            shortDescription: 'Stručno i efikasno uklanjanje grafita bez oštećenja površina.'
        },
        {
            id: 'garaze',
            icon: '🚗',
            title: 'Čišćenje Garaža',
            shortDescription: 'Detaljno čišćenje garažnih prostora i parking površina.'
        },
        {
            id: 'gradevinski-radovi',
            icon: '🏗️',
            title: 'Čišćenje Nakon Građevinskih Radova',
            shortDescription: 'Kompletno čišćenje prostora nakon renoviranja ili gradnje za useljiv prostor.'
        }
    ],

    // Galerija slika
    gallery: [
        { src: './slika1.jpg', alt: 'Čišćenje prostora 1', caption: 'Profesionalno čišćenje' },
        { src: './slika2.jpg', alt: 'Čišćenje prostora 2', caption: 'Pranje pod visokim pritiskom' },
        { src: './slika3.jpg', alt: 'Čišćenje prostora 3', caption: 'Dubinsko čišćenje' },
        { src: './slika4.jpg', alt: 'Čišćenje prostora 4', caption: 'Mašinsko pranje podova' },
        { src: './slika5.jpg', alt: 'Čišćenje prostora 5', caption: 'Dubinsko pranje' },
        { src: './slika6.jpg', alt: 'Čišćenje prostora 6', caption: 'Pranje tepiha' },
        { src: './slika7.jpg', alt: 'Čišćenje prostora 7', caption: 'Pranje tepiha' },
        { src: './slika8.jpg', alt: 'Čišćenje prostora 8', caption: 'Pranje staklenih površina' }
    ],

    // Formspree forma ID
    // Dobijate ga kada napravite nalog na https://formspree.io/
    formspreeId: 'YOUR_FORM_ID',

    // Copyright
    copyright: '2025 ProClean. Sva prava zadržana.'
};

// Opciono: možete eksportovati ako koristite module
// export default siteConfig;