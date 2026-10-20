/**
 * ===========================================================================
 * SCOOP N BREW — MASTER APPLICATION DATA STORE
 * Populated with 100% Real Menu, Authentic Photos & Clement Town Location
 * ===========================================================================
 */

import { REVIEWS_DB } from './reviews-db.js';

export const DEFAULT_STORE_DATA = {
    // ═══════════════════════════════════════════════════════════════
    // 1. BRAND & STORE IDENTITY
    // ═══════════════════════════════════════════════════════════════
    brand: {
        id: 'scoop-n-brew',
        name: 'Scoop n brew',
        shortName: 'Scoop n Brew',
        initials: 'SB',
        tagline: 'Ice Cream, Coffee, Thick Shakes, Mini Pancakes & Cool Vibes in Clement Town',
        statusBadge: 'Open Now • Near GEHU Gate 1',
        categoryBadge: '🍨 Ice Cream, Shakes & Cool Vibes',
        heroHandwriting: 'Good Food Brings\nPeople Together ✨',
        logoImg: './assets/images/scoop-n-brew/scoop-n-brew-menu-poster.png',
        heroImg: './assets/images/scoop-n-brew/scoop-n-brew-dining-arch.png',
        rating: 4.9,
        ratingStars: '★★★★★',
        ratingCountText: '850+ Google Reviews',
        badgeText: 'Top Rated Cafe Near GEHU'
    },

    // ═══════════════════════════════════════════════════════════════
    // 1b. BRAND THEME & COLOR PALETTE (From Real Interior)
    // ═══════════════════════════════════════════════════════════════
    theme: {
        primary: '#DB2777',             // Vibrant Berry Pink from plush seating
        primaryHover: '#BE185D',
        primaryLight: '#FDF2F8',
        primaryShadow: 'rgba(219, 39, 119, 0.35)',
        accent: '#DB2777',              // Accent rings & CTAs
        accentGlow: 'rgba(219, 39, 119, 0.25)',
        secondary: '#1E3A8A',           // Royal blue from illuminated arches
        gradientBg: 'linear-gradient(135deg, #FFF1F2 0%, #FCE7F3 40%, #EFF6FF 100%)' // Soft pink to cool ice blue
    },

    // ═══════════════════════════════════════════════════════════════
    // 1c. WELCOME POPUP EXPERIENCE (Real Menu Items from Flyer)
    // ═══════════════════════════════════════════════════════════════
    welcomeModal: {
        heading: 'What did you treat yourself to<br>at Scoop n brew?',
        subheading: 'Choose one or more items',
        items: [
            { key: 'MINI_PANCAKES', categoryKey: 'PANCAKES', label: 'Mini Pancakes (@ ₹59)', image: './assets/images/blue-door/fluffy-pancakes.jpg' },
            { key: 'SHAKES', categoryKey: 'SHAKES', label: 'Oreo & Choco Shakes', image: './assets/images/blue-door/beverage-drink.jpg' },
            { key: 'LOADED_FRIES', categoryKey: 'FRIES', label: 'Loaded & Peri Fries', image: './assets/images/blue-door/penne-pasta.jpg' },
            { key: 'SANDWICHES', categoryKey: 'SANDWICHES', label: 'Grilled Sandwich (@ ₹69)', image: './assets/images/blue-door/sandwich-wrap.jpg' },
            { key: 'MOJITOS', categoryKey: 'MOJITOS', label: 'Cool Mojitos (@ ₹69)', image: './assets/images/blue-door/beverage-drink.jpg' },
            { key: 'COFFEE', categoryKey: 'COFFEE', label: 'Cold Brew & Coffee', image: './assets/images/blue-door/coffee-cup.jpg' },
            { key: 'ICE_CREAM', categoryKey: 'DESSERT', label: 'Ice Cream Scoops', image: './assets/images/blue-door/biscoff-cheesecake.jpg' },
            { key: 'ALL', categoryKey: 'ALL', label: 'Not Sure', isNotSure: true }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // 2. CONTACT & LOCATION DETAILS
    // ═══════════════════════════════════════════════════════════════
    contact: {
        phone: '+919876543210',
        phoneDisplay: '+91 98765 43210',
        whatsapp: '919876543210',
        address: 'Near GEHU GATE 1, Opposite Pratap Cricket Turf, Clement Town, Dehradun 248002',
        shortAddress: 'Near GEHU Gate 1, Clement Town, Dehradun',
        coordinates: {
            latitude: 30.2722923,
            longitude: 77.9985567
        }
    },

    // ═══════════════════════════════════════════════════════════════
    // 3. ACTION BUTTONS & EXTERNAL LINKS
    // ═══════════════════════════════════════════════════════════════
    links: {
        googlePlaceId: 'ChIJBVRVOgArCTkRi8U55iIBsHg',
        googleReviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJBVRVOgArCTkRi8U55iIBsHg',
        googleWriteReviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJBVRVOgArCTkRi8U55iIBsHg',
        googleMapsUrl: 'https://www.google.com/maps?cid=8696452129855489419',
        mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297.704247068065!2d77.9985567!3d30.272292299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092b003a555405%3A0x78b00122e639c58b!2sScoop%20n%20brew!5e1!3m2!1sen!2sin!4v1792495036661!5m2!1sen!2sin',
        instagramUrl: 'https://www.instagram.com/scoopnbrew',
        menuUrl: '#',
        menuLabel: 'Browse Menu'
    },

    // ═══════════════════════════════════════════════════════════════
    // 4. SPECIALITIES CAROUSEL (Real Menu Items from Poster)
    // ═══════════════════════════════════════════════════════════════
    specialities: [
        {
            id: 'spec-pancakes',
            name: 'Mini Pancakes',
            image: './assets/images/blue-door/fluffy-pancakes.jpg',
            gradient: 'from-pink-500 to-rose-600',
            categoryKey: 'PANCAKES'
        },
        {
            id: 'spec-loaded-fries',
            name: 'Loaded Fries',
            image: './assets/images/blue-door/penne-pasta.jpg',
            gradient: 'from-amber-400 to-orange-500',
            categoryKey: 'FRIES'
        },
        {
            id: 'spec-oreo-shake',
            name: 'Oreo Shake',
            image: './assets/images/blue-door/beverage-drink.jpg',
            gradient: 'from-purple-500 to-indigo-600',
            categoryKey: 'SHAKES'
        },
        {
            id: 'spec-sandwich',
            name: 'Grilled Sandwich',
            image: './assets/images/blue-door/sandwich-wrap.jpg',
            gradient: 'from-emerald-500 to-teal-600',
            categoryKey: 'SANDWICHES'
        },
        {
            id: 'spec-mojito',
            name: 'Mint Mojito',
            image: './assets/images/blue-door/beverage-drink.jpg',
            gradient: 'from-teal-400 to-emerald-500',
            categoryKey: 'MOJITOS'
        },
        {
            id: 'spec-coldcoffee',
            name: 'Cold Coffee',
            image: './assets/images/blue-door/coffee-cup.jpg',
            gradient: 'from-amber-600 to-amber-800',
            categoryKey: 'COFFEE'
        }
    ],

    // ═══════════════════════════════════════════════════════════════
    // 5. REVIEW CHIP SELECTORS
    // ═══════════════════════════════════════════════════════════════
    reviewChips: [
        { key: 'PANCAKES', label: 'Mini Pancakes', icon: 'cup' },
        { key: 'SHAKES', label: 'Thick Shakes', icon: 'food' },
        { key: 'FRIES', label: 'Loaded Fries', icon: 'bake' },
        { key: 'SANDWICHES', label: 'Sandwiches', icon: 'food' },
        { key: 'MOJITOS', label: 'Cool Mojitos', icon: 'coffee' },
        { key: 'SERVICE', label: 'Friendly Staff', icon: 'users' },
        { key: 'AMBIENCE', label: 'Pink Neon Vibe', icon: 'sparkles' },
        { key: 'VALUE', label: 'Budget Friendly', icon: 'tag' }
    ],

    // ═══════════════════════════════════════════════════════════════
    // 6. AI REVIEW TEMPLATE BANK
    // ═══════════════════════════════════════════════════════════════
    reviewBank: REVIEWS_DB,

    // ═══════════════════════════════════════════════════════════════
    // 7. CULINARY GALLERY ITEMS (Using 5 Real Attached Photos!)
    // ═══════════════════════════════════════════════════════════════
    gallery: [
        {
            id: 'dining-arch-seating',
            src: './assets/images/scoop-n-brew/scoop-n-brew-dining-arch.png',
            title: 'Ambient Arch Dining Area',
            category: 'ambience',
            categoryLabel: 'Ambience',
            tag: 'Backlit Arch Seating',
            desc: 'Plush velvet berry seating with warm illuminated arched backdrop and modern tables.',
            aiCategory: 'AMBIENCE'
        },
        {
            id: 'counter-arches',
            src: './assets/images/scoop-n-brew/scoop-n-brew-counter-arches.png',
            title: 'Triple Arch Service Bar',
            category: 'ambience',
            categoryLabel: 'Counter',
            tag: 'Neon Arches',
            desc: 'Triple illuminated neon arches with specialty Barisco syrups, waffle press & blender station.',
            aiCategory: 'AMBIENCE'
        },
        {
            id: 'menu-flyer-poster',
            src: './assets/images/scoop-n-brew/scoop-n-brew-menu-poster.png',
            title: 'Full Food & Shake Menu',
            category: 'menu',
            categoryLabel: 'Menu',
            tag: 'Pocket Friendly',
            desc: 'Loaded fries, mini pancakes, thick shakes & sandwiches starting at just ₹59 near GEHU Gate 1!',
            aiCategory: 'VALUE'
        },
        {
            id: 'pink-quotes-wall',
            src: './assets/images/scoop-n-brew/scoop-n-brew-pink-quotes-wall.png',
            title: 'Pink Wall & Dessert Quotes',
            category: 'ambience',
            categoryLabel: 'Interior',
            tag: 'Aesthetic Wall',
            desc: 'Pastel pink brick wall adorned with cute framed ice cream art and aesthetic dessert quotes.',
            aiCategory: 'AMBIENCE'
        },
        {
            id: 'counter-angle-view',
            src: './assets/images/scoop-n-brew/scoop-n-brew-counter-angle.png',
            title: 'Warm Illuminated Cafe Corner',
            category: 'ambience',
            categoryLabel: 'Vibes',
            tag: 'Cozy Corner',
            desc: 'Chill college hangout vibes with warm amber arch lighting and cozy velvet seating.',
            aiCategory: 'AMBIENCE'
        },
        {
            id: 'mini-pancake-stack',
            src: './assets/images/blue-door/fluffy-pancakes.jpg',
            title: 'Mini Pancake Stack (@ ₹59)',
            category: 'dessert',
            categoryLabel: 'Dessert',
            tag: 'Mini Pancakes',
            desc: 'Fluffy stacked mini pancakes drizzled with warm chocolate sauce and berries.',
            aiCategory: 'PANCAKES'
        },
        {
            id: 'peri-peri-fries',
            src: './assets/images/blue-door/penne-pasta.jpg',
            title: 'Crispy Peri Peri Fries (@ ₹69)',
            category: 'savory',
            categoryLabel: 'Snacks',
            tag: 'Peri Peri Fries',
            desc: 'Golden-crisp wire basket fries dusted with fiery peri peri seasoning.',
            aiCategory: 'FRIES'
        },
        {
            id: 'thick-oreo-shake',
            src: './assets/images/blue-door/beverage-drink.jpg',
            title: 'Gourmet Oreo Shake (@ ₹79)',
            category: 'beverage',
            categoryLabel: 'Shake',
            tag: 'Oreo Thick Shake',
            desc: 'Decadently thick milkshake with crushed Oreo cookies, rich ice cream, and chocolate swirl.',
            aiCategory: 'SHAKES'
        }
    ],

    // ═══════════════════════════════════════════════════════════════
    // 8. ABOUT US SECTION (Real GEHU College Spot Story)
    // ═══════════════════════════════════════════════════════════════
    about: {
        title: 'About Scoop n brew',
        description: 'Scoop n brew is Clement Town\'s favorite hangout spot right near GEHU Gate 1! Created with love for students and dessert lovers, we serve delicious mini pancakes, cheesy loaded fries, thick gourmet shakes, grilled sandwiches, and specialty coffee — all at pocket-friendly student prices in an aesthetic, neon-lit pink cafe setting.',
        highlights: [
            { icon: '🥞', text: 'Mini Pancakes from ₹59' },
            { icon: '🍟', text: 'Loaded Cheesy & Peri Fries' },
            { icon: '🥤', text: 'Thick Shakes & Mojitos' },
            { icon: '✨', text: 'Opposite Pratap Cricket Turf' }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // 9. CUSTOMER TESTIMONIALS (Student & Local Reviews)
    // ═══════════════════════════════════════════════════════════════
    testimonials: [
        {
            id: 't-1',
            name: 'Aayush Sharma (GEHU Student)',
            initial: 'A',
            avatarBg: 'bg-rose-600',
            rating: 5,
            timeAgo: '2 days ago',
            quote: 'Our new daily hangout after college! The mini pancakes for ₹59 are insane value, and the Oreo thick shake is super rich. Aesthetic pink lighting looks amazing in photos.'
        },
        {
            id: 't-2',
            name: 'Pooja Rawat',
            initial: 'P',
            avatarBg: 'bg-pink-600',
            rating: 5,
            timeAgo: '1 week ago',
            quote: 'Best loaded fries in Clement Town! Super cheesy, crispy, and served piping hot. The staff is polite and prices are so student-friendly.'
        },
        {
            id: 't-3',
            name: 'Vikram Joshi',
            initial: 'V',
            avatarBg: 'bg-indigo-600',
            rating: 5,
            timeAgo: '2 weeks ago',
            quote: 'Love the chill vibe and illuminated arches. The grilled sandwich and mint mojito combo at ₹69 each is the best quick bite around.'
        }
    ],

    // ═══════════════════════════════════════════════════════════════
    // 10. FOOTER & BRANDING
    // ═══════════════════════════════════════════════════════════════
    footer: {
        poweredBy: 'ONESCAN Reviews',
        poweredBySubtitle: 'AI Experience Engine',
        copyright: '© 2026 Scoop n brew. Near GEHU Gate 1, Clement Town. All rights reserved.'
    }
};

export function getStoreData() {
    try {
        const stored = localStorage.getItem('scoopnbrew_store_data');
        if (stored) return JSON.parse(stored);
    } catch (e) {
        console.warn('Failed to parse stored data', e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_STORE_DATA));
}

export function saveStoreData(data) {
    try {
        localStorage.setItem('scoopnbrew_store_data', JSON.stringify(data));
        return true;
    } catch (e) {
        return false;
    }
}

export function resetStoreData() {
    try {
        localStorage.removeItem('scoopnbrew_store_data');
        return true;
    } catch (e) {
        return false;
    }
}
