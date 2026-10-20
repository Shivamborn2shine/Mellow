/**
 * ===========================================================================
 * SCOOP N BREW — MASTER DATA & CONFIGURATION STORE
 * ONESCAN Experience Engine
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
        tagline: 'Artisanal Gelato Scoops, Handcrafted Belgian Waffles, Gourmet Shakes & Specialty Coffee',
        statusBadge: 'Open Now • 11 AM - 11 PM',
        categoryBadge: '🍨 Artisanal Gelato & Specialty Brews',
        heroHandwriting: 'Sweet Scoops\nGood Vibes ✨',
        logoImg: './assets/images/blue-door/blue-door-sign.png',
        heroImg: './assets/images/blue-door/hero-food-collage.jpg',
        rating: 4.9,
        ratingStars: '★★★★★',
        ratingCountText: '850+ Google Reviews',
        badgeText: 'Top Rated Dessert Cafe'
    },

    // ═══════════════════════════════════════════════════════════════
    // 1b. BRAND THEME & COLOR PALETTE
    // ═══════════════════════════════════════════════════════════════
    theme: {
        primary: '#E11D48',             // Vibrant Berry / Strawberry Rose
        primaryHover: '#BE123C',
        primaryLight: '#FFE4E6',
        primaryShadow: 'rgba(225, 29, 72, 0.35)',
        accent: '#E11D48',              // Buttons, rings & checkmarks
        accentGlow: 'rgba(225, 29, 72, 0.25)',
        gradientBg: 'linear-gradient(135deg, #FFF1F2 0%, #FDF2F8 50%, #FEF3C7 100%)' // Strawberry cream to vanilla waffle
    },

    // ═══════════════════════════════════════════════════════════════
    // 1c. WELCOME POPUP EXPERIENCE (Menu item selection)
    // ═══════════════════════════════════════════════════════════════
    welcomeModal: {
        heading: 'What did you treat yourself to<br>at Scoop n brew?',
        subheading: 'Choose one or more items',
        items: [
            { key: 'GELATO', categoryKey: 'GELATO', label: 'Gelato & Scoops', image: './assets/images/blue-door/biscoff-cheesecake.jpg' },
            { key: 'WAFFLES', categoryKey: 'WAFFLES', label: 'Belgian Waffles', image: './assets/images/blue-door/fluffy-pancakes.jpg' },
            { key: 'SHAKES', categoryKey: 'SHAKES', label: 'Thick Shakes', image: './assets/images/blue-door/beverage-drink.jpg' },
            { key: 'COFFEE', categoryKey: 'COFFEE', label: 'Artisan Coffee', image: './assets/images/blue-door/coffee-cup.jpg' },
            { key: 'SUNDAES', categoryKey: 'SUNDAES', label: 'Signature Sundaes', image: './assets/images/blue-door/tiramisu-cup.jpg' },
            { key: 'BITES', categoryKey: 'FOOD', label: 'Savory Bites', image: './assets/images/blue-door/sandwich-wrap.jpg' },
            { key: 'DESSERTS', categoryKey: 'DESSERT', label: 'Pastries & Cakes', image: './assets/images/blue-door/cake-pastry.jpg' },
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
        address: 'Jakhan, Rajpur Road, Dehradun, Uttarakhand 248001, India',
        shortAddress: 'Jakhan, Rajpur Road, Dehradun',
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
    // 4. SPECIALITIES CAROUSEL
    // ═══════════════════════════════════════════════════════════════
    specialities: [
        {
            id: 'spec-gelato',
            name: 'Artisan Gelato',
            image: './assets/images/blue-door/biscoff-cheesecake.jpg',
            gradient: 'from-pink-500 to-rose-600',
            categoryKey: 'GELATO'
        },
        {
            id: 'spec-waffles',
            name: 'Belgian Waffle',
            image: './assets/images/blue-door/fluffy-pancakes.jpg',
            gradient: 'from-amber-400 to-orange-500',
            categoryKey: 'WAFFLES'
        },
        {
            id: 'spec-shakes',
            name: 'Thick Shakes',
            image: './assets/images/blue-door/beverage-drink.jpg',
            gradient: 'from-rose-400 to-pink-500',
            categoryKey: 'SHAKES'
        },
        {
            id: 'spec-coldbrew',
            name: 'Cold Brew Coffee',
            image: './assets/images/blue-door/coffee-cup.jpg',
            gradient: 'from-amber-700 to-stone-800',
            categoryKey: 'COFFEE'
        },
        {
            id: 'spec-sundae',
            name: 'Loaded Sundae',
            image: './assets/images/blue-door/tiramisu-cup.jpg',
            gradient: 'from-purple-500 to-indigo-600',
            categoryKey: 'SUNDAES'
        },
        {
            id: 'spec-bites',
            name: 'Savory Bites',
            image: './assets/images/blue-door/sandwich-wrap.jpg',
            gradient: 'from-emerald-500 to-teal-600',
            categoryKey: 'BITES'
        }
    ],

    // ═══════════════════════════════════════════════════════════════
    // 5. REVIEW CHIP SELECTORS
    // ═══════════════════════════════════════════════════════════════
    reviewChips: [
        { key: 'GELATO', label: 'Artisan Gelato', icon: 'cup' },
        { key: 'WAFFLES', label: 'Crispy Waffles', icon: 'bake' },
        { key: 'SHAKES', label: 'Thick Shakes', icon: 'food' },
        { key: 'COFFEE', label: 'Specialty Coffee', icon: 'coffee' },
        { key: 'SERVICE', label: 'Friendly Staff', icon: 'users' },
        { key: 'AMBIENCE', label: 'Vibrant Vibe', icon: 'sparkles' },
        { key: 'VALUE', label: 'Value for Money', icon: 'tag' },
        { key: 'ALL', label: 'Overall Experience', icon: 'star' }
    ],

    // ═══════════════════════════════════════════════════════════════
    // 6. AI REVIEW TEMPLATE BANK
    // ═══════════════════════════════════════════════════════════════
    reviewBank: REVIEWS_DB,

    // ═══════════════════════════════════════════════════════════════
    // 7. CULINARY GALLERY ITEMS
    // ═══════════════════════════════════════════════════════════════
    gallery: [
        {
            id: 'belgian-dark-gelato',
            src: './assets/images/blue-door/biscoff-cheesecake.jpg',
            title: 'Dark Chocolate Gelato',
            category: 'dessert',
            categoryLabel: 'Gelato',
            tag: 'Dark Chocolate',
            desc: '70% Belgian dark chocolate artisanal gelato, churned fresh daily for an intensely smooth taste.',
            aiCategory: 'GELATO'
        },
        {
            id: 'warm-nutella-waffle',
            src: './assets/images/blue-door/fluffy-pancakes.jpg',
            title: 'Warm Nutella Waffle',
            category: 'dessert',
            categoryLabel: 'Waffle',
            tag: 'Nutella Waffle',
            desc: 'Freshly pressed golden-crisp Belgian waffle smothered with warm Nutella and roasted almonds.',
            aiCategory: 'WAFFLES'
        },
        {
            id: 'biscoff-thick-shake',
            src: './assets/images/blue-door/beverage-drink.jpg',
            title: 'Biscoff Thick Shake',
            category: 'beverage',
            categoryLabel: 'Thick Shake',
            tag: 'Lotus Biscoff',
            desc: 'Decadently thick gourmet milkshake blended with real gelato scoops and crunchy spiced biscuit crumbs.',
            aiCategory: 'SHAKES'
        },
        {
            id: 'specialty-cold-brew',
            src: './assets/images/blue-door/coffee-cup.jpg',
            title: 'Signature Cold Brew',
            category: 'coffee',
            categoryLabel: 'Coffee',
            tag: 'Cold Brew',
            desc: '16-hour slow steeped single-origin Arabica cold brew served over crystal ice with smooth chocolate notes.',
            aiCategory: 'COFFEE'
        },
        {
            id: 'berry-sundae-bowl',
            src: './assets/images/blue-door/tiramisu-cup.jpg',
            title: 'Berry Blast Sundae',
            category: 'dessert',
            categoryLabel: 'Sundae',
            tag: 'Berry Sundae',
            desc: 'Double scoops of Madagascar vanilla and berry gelato topped with organic compote and white chocolate flakes.',
            aiCategory: 'SUNDAES'
        },
        {
            id: 'cheesy-garlic-bites',
            src: './assets/images/blue-door/sandwich-wrap.jpg',
            title: 'Cheesy Garlic Bites',
            category: 'savory',
            categoryLabel: 'Savory',
            tag: 'Garlic Bites',
            desc: 'Toasted buttery sourdough loaded with melted mozzarella, aromatic garlic herb butter, and chili flakes.',
            aiCategory: 'BITES'
        },
        {
            id: 'pistachio-gelato',
            src: './assets/images/blue-door/orange-cake.jpg',
            title: 'Sicilian Pistachio Scoop',
            category: 'dessert',
            categoryLabel: 'Gelato',
            tag: 'Pistachio Scoop',
            desc: 'Roasted Sicilian pistachio paste infused into rich dairy cream for an authentic Italian treat.',
            aiCategory: 'GELATO'
        },
        {
            id: 'affogato-special',
            src: './assets/images/blue-door/penne-pasta.jpg',
            title: 'Classic Italian Affogato',
            category: 'coffee',
            categoryLabel: 'Signature',
            tag: 'Affogato',
            desc: 'A bold, piping-hot double shot of espresso poured over a velvety scoop of artisanal gelato.',
            aiCategory: 'COFFEE'
        }
    ],

    // ═══════════════════════════════════════════════════════════════
    // 8. ABOUT US SECTION
    // ═══════════════════════════════════════════════════════════════
    about: {
        title: 'About Scoop n brew',
        description: 'Scoop n brew was born out of pure passion for authentic Italian gelato, warm golden waffles, and specialty coffee. Every batch of gelato is slow-churned daily with real dairy and natural fruits, while our beans are freshly roasted to perfection.',
        highlights: [
            { icon: '🍨', text: '100% Real Gelato Churned Daily' },
            { icon: '🧇', text: 'Fresh Belgian Waffles' },
            { icon: '☕', text: 'Grade-1 Arabica Roasts' },
            { icon: '✨', text: 'Cozy Chill Hangout Spot' }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // 9. CUSTOMER TESTIMONIALS
    // ═══════════════════════════════════════════════════════════════
    testimonials: [
        {
            id: 't-1',
            name: 'Aarav Malhotra',
            initial: 'A',
            avatarBg: 'bg-rose-600',
            rating: 5,
            timeAgo: '2 days ago',
            quote: 'Hands down the best gelato in Dehradun! The dark chocolate scoop with waffle cone is absolute perfection. Super vibrant cafe vibe!'
        },
        {
            id: 't-2',
            name: 'Divya Sharma',
            initial: 'D',
            avatarBg: 'bg-amber-600',
            rating: 5,
            timeAgo: '1 week ago',
            quote: 'The warm Nutella waffle paired with their iced cold brew made my whole weekend. Crispy on the outside and generous toppings!'
        },
        {
            id: 't-3',
            name: 'Rohan Verma',
            initial: 'R',
            avatarBg: 'bg-pink-600',
            rating: 5,
            timeAgo: '2 weeks ago',
            quote: 'Thickest milkshakes in town! The Lotus Biscoff shake was so decadent and smooth. Staff is very warm and letting you taste samples.'
        }
    ],

    // ═══════════════════════════════════════════════════════════════
    // 10. FOOTER & BRANDING
    // ═══════════════════════════════════════════════════════════════
    footer: {
        poweredBy: 'ONESCAN Reviews',
        poweredBySubtitle: 'AI Experience Engine',
        copyright: '© 2026 Scoop n brew. All rights reserved.'
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
