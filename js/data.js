/**
 * ===========================================================================
 * SCOOP N BREW — MASTER STORE DATA (100% REAL PHOTOS & COMPLETE MENU)
 * Populated with 10 Authentic Photos, Official Menu Board & Hocco Ice Creams
 * ===========================================================================
 */

import { REVIEWS_DB } from './reviews-db.js';

export const DEFAULT_STORE_DATA = {
    brand: {
        id: 'scoop-n-brew',
        name: 'Scoop n brew',
        shortName: 'Scoop n Brew',
        initials: 'SB',
        tagline: 'Waffles, Mini Pancakes, Hocco Ice Cream, Thick Shakes, Burgers & Cool Vibes near GEHU Gate 1',
        statusBadge: 'Open Now • Near GEHU Gate 1',
        categoryBadge: '🍨 Waffles, Hocco Ice Cream & Shakes',
        heroHandwriting: 'Good Food Brings\nPeople Together ✨',
        logoImg: './assets/images/scoop-n-brew/pixel-cafe-menu-board.png',
        heroImg: './assets/images/scoop-n-brew/Scoop-n-Brew-Café-Badge.png',
        rating: 4.9,
        ratingStars: '★★★★★',
        ratingCountText: '850+ Google Reviews',
        badgeText: 'Top Student Cafe Near GEHU'
    },

    theme: {
        primary: '#E11D48',             // Vibrant Berry Pink
        primaryHover: '#BE123C',
        primaryLight: '#FFF1F2',
        primaryShadow: 'rgba(219, 39, 119, 0.35)',
        accent: '#E11D48',
        accentGlow: 'rgba(219, 39, 119, 0.25)',
        secondary: '#1E3A8A',           // Royal Blue
        gradientBg: 'linear-gradient(135deg, #FFF1F2 0%, #FCE7F3 40%, #EFF6FF 100%)'
    },

    welcomeModal: {
        heading: 'What did you treat yourself to<br>at Scoop n brew?',
        subheading: 'Choose one or more items',
        items: [
            { key: 'WAFFLES', categoryKey: 'WAFFLES', label: 'Waffles (Nutella/Choc ₹99)', image: './assets/images/scoop-n-brew/pixel-cafe-menu-board.png' },
            { key: 'MINI_PANCAKES', categoryKey: 'PANCAKES', label: 'Mini Pancakes (@ ₹59)', image: './assets/images/scoop-n-brew/pixel-cafe-menu-board.png' },
            { key: 'HOCCO', categoryKey: 'ICE_CREAM', label: 'Hocco Ice Cream Cones', image: './assets/images/scoop-n-brew/hocco-nutty-cone.png' },
            { key: 'SHAKES', categoryKey: 'SHAKES', label: 'Thick Shakes (@ ₹69-79)', image: './assets/images/scoop-n-brew/iced-mojito-cup.png' },
            { key: 'FRIES', categoryKey: 'FRIES', label: 'Loaded & Peri Fries (@ ₹69-79)', image: './assets/images/scoop-n-brew/scoop-n-brew-menu-poster.png' },
            { key: 'BURGERS_SANDWICHES', categoryKey: 'FOOD', label: 'Burgers & Sandwiches (@ ₹69-79)', image: './assets/images/scoop-n-brew/scoop-n-brew-pink-quotes-wall.png' },
            { key: 'MOJITOS', categoryKey: 'MOJITOS', label: 'Mojitos & Iced Teas (@ ₹69)', image: './assets/images/scoop-n-brew/iced-mojito-cup.png' },
            { key: 'COFFEE_CHAI', categoryKey: 'COFFEE', label: 'Chai (₹20) & Coffee (₹29)', image: './assets/images/scoop-n-brew/scoop-n-brew-counter-angle.png' },
            { key: 'ALL', categoryKey: 'ALL', label: 'Not Sure', isNotSure: true }
        ]
    },

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

    specialities: [
        {
            id: 'spec-waffles',
            name: 'Nutella Waffle',
            image: './assets/images/scoop-n-brew/pixel-cafe-menu-board.png',
            gradient: 'from-amber-400 to-orange-500',
            categoryKey: 'WAFFLES'
        },
        {
            id: 'spec-hocco-cone',
            name: 'Hocco Nutty Cone',
            image: './assets/images/scoop-n-brew/hocco-nutty-cone.png',
            gradient: 'from-orange-400 to-amber-500',
            categoryKey: 'HOCCO'
        },
        {
            id: 'spec-pancakes',
            name: 'Mini Pancakes',
            image: './assets/images/scoop-n-brew/pixel-cafe-menu-board.png',
            gradient: 'from-pink-500 to-rose-600',
            categoryKey: 'MINI_PANCAKES'
        },
        {
            id: 'spec-oreo-shake',
            name: 'Oreo Thick Shake',
            image: './assets/images/scoop-n-brew/iced-mojito-cup.png',
            gradient: 'from-purple-500 to-indigo-600',
            categoryKey: 'SHAKES'
        },
        {
            id: 'spec-loaded-fries',
            name: 'Loaded Fries',
            image: './assets/images/scoop-n-brew/scoop-n-brew-menu-poster.png',
            gradient: 'from-rose-400 to-red-500',
            categoryKey: 'FRIES'
        },
        {
            id: 'spec-mojito',
            name: 'Iced Mojito',
            image: './assets/images/scoop-n-brew/iced-mojito-cup.png',
            gradient: 'from-teal-400 to-emerald-500',
            categoryKey: 'MOJITOS'
        }
    ],

    reviewChips: [
        { key: 'WAFFLES', label: 'Crispy Waffles', icon: 'bake' },
        { key: 'MINI_PANCAKES', label: 'Mini Pancakes', icon: 'cup' },
        { key: 'HOCCO', label: 'Hocco Ice Cream', icon: 'cup' },
        { key: 'SHAKES', label: 'Thick Shakes', icon: 'food' },
        { key: 'FRIES', label: 'Loaded Fries', icon: 'food' },
        { key: 'BURGERS_SANDWICHES', label: 'Burgers & Buns', icon: 'food' },
        { key: 'MOJITOS', label: 'Cool Mojitos', icon: 'coffee' },
        { key: 'VALUE', label: 'Student Friendly', icon: 'tag' }
    ],

    reviewBank: REVIEWS_DB,

    gallery: [
        {
            id: 'g-1',
            src: './assets/images/scoop-n-brew/scoop-n-brew-dining-arch.png',
            title: 'Ambient Arch Dining Seating',
            category: 'ambience',
            categoryLabel: 'Ambience',
            tag: 'Backlit Arch Seating',
            desc: 'Plush velvet berry seating with warm illuminated arched backdrop and modern tables.',
            aiCategory: 'AMBIENCE'
        },
        {
            id: 'g-2',
            src: './assets/images/scoop-n-brew/pixel-cafe-menu-board.png',
            title: 'Official Cafe Menu Board',
            category: 'menu',
            categoryLabel: 'Full Menu',
            tag: 'Menu Board',
            desc: 'Waffles ₹99, Pancakes ₹59, Fries ₹69, Shakes ₹69-79, Chai ₹20-25, and Hot Coffee ₹29.',
            aiCategory: 'VALUE'
        },
        {
            id: 'g-3',
            src: './assets/images/scoop-n-brew/hocco-strawberry-cheesecake.png',
            title: 'Hocco Strawberry Cheesecake Cone',
            category: 'icecream',
            categoryLabel: 'Ice Cream',
            tag: 'Strawberry Cheesecake',
            desc: 'Authentic Hocco strawberry cheesecake ice cream filled in a crispy wafer cone.',
            aiCategory: 'HOCCO'
        },
        {
            id: 'g-4',
            src: './assets/images/scoop-n-brew/hocco-nutty-cone.png',
            title: 'Hocco Nutty Chocolate Cone',
            category: 'icecream',
            categoryLabel: 'Ice Cream',
            tag: 'Nutty Chocolate',
            desc: 'Crunchy roasted nuts over rich chocolate ice cream in a classic Hocco waffle cone.',
            aiCategory: 'HOCCO'
        },
        {
            id: 'g-5',
            src: './assets/images/scoop-n-brew/scoop-n-brew-counter-arches.png',
            title: 'Triple Neon Arches Counter',
            category: 'ambience',
            categoryLabel: 'Counter',
            tag: 'Illuminated Bar',
            desc: 'Triple glowing neon arches with waffle maker, blender station & Barisco syrups.',
            aiCategory: 'AMBIENCE'
        },
        {
            id: 'g-6',
            src: './assets/images/scoop-n-brew/hocco-boss-bar.png',
            title: 'Hocco BOSS Bar',
            category: 'icecream',
            categoryLabel: 'Ice Cream',
            tag: 'Hocco Boss Bar',
            desc: 'Decadent chocolate compound-coated premium Hocco ice cream bar.',
            aiCategory: 'HOCCO'
        },
        {
            id: 'g-7',
            src: './assets/images/scoop-n-brew/iced-mojito-cup.png',
            title: 'Refreshing Iced Mojito Cup',
            category: 'beverage',
            categoryLabel: 'Mojito',
            tag: 'Chilled Mojito',
            desc: 'Fizzy, ice-cold refreshing cooler served in custom cup with retro striped straw.',
            aiCategory: 'MOJITOS'
        },
        {
            id: 'g-8',
            src: './assets/images/scoop-n-brew/scoop-n-brew-pink-quotes-wall.png',
            title: 'Pink Wall & Dessert Quotes',
            category: 'ambience',
            categoryLabel: 'Interior',
            tag: 'Pink Brick Wall',
            desc: 'Cute framed ice cream quotes and vibrant pink brick wall aesthetic for selfies.',
            aiCategory: 'AMBIENCE'
        },
        {
            id: 'g-9',
            src: './assets/images/scoop-n-brew/scoop-n-brew-counter-angle.png',
            title: 'Cozy Cafe Corner View',
            category: 'ambience',
            categoryLabel: 'Vibes',
            tag: 'Cozy Hangout',
            desc: 'Warm amber lighting and relaxing cafe seating right opposite Pratap Cricket Turf.',
            aiCategory: 'AMBIENCE'
        },
        {
            id: 'g-10',
            src: './assets/images/scoop-n-brew/scoop-n-brew-menu-poster.png',
            title: 'Student Deals & Snacks Poster',
            category: 'menu',
            categoryLabel: 'Poster',
            tag: 'Student Deals',
            desc: 'Good Food Brings People Together — full flyer with combos and student specials.',
            aiCategory: 'VALUE'
        }
    ],

    about: {
        title: 'About Scoop n brew',
        description: 'Scoop n brew is Clement Town\'s favorite youth cafe right near GEHU Gate 1! We serve freshly pressed Belgian waffles (Nutella, White Chocolate, Chocolate), fluffy mini pancakes, official Hocco ice creams & cones, thick gourmet shakes, loaded peri peri fries, grilled burgers & sandwiches, cool mojitos, and piping hot kesar chai & coffee — all at unbeatable student prices with a vibrant pink-and-blue neon aesthetic.',
        highlights: [
            { icon: '🧇', text: 'Fresh Belgian Waffles ₹99' },
            { icon: '🥞', text: 'Mini Pancakes Stack ₹59' },
            { icon: '🍨', text: 'Official Hocco Ice Cream' },
            { icon: '📍', text: 'Opposite Pratap Cricket Turf' }
        ]
    },

    testimonials: [
        {
            id: 't-1',
            name: 'Aayush Sharma (GEHU Student)',
            initial: 'A',
            avatarBg: 'bg-rose-600',
            rating: 5,
            timeAgo: '1 day ago',
            quote: 'Nutella waffle with ice cream for just ₹119 is unbelievable! Fluffy mini pancakes for ₹59 are our daily after-college snack. The pink arches look super aesthetic!'
        },
        {
            id: 't-2',
            name: 'Priya Joshi',
            initial: 'P',
            avatarBg: 'bg-pink-600',
            rating: 5,
            timeAgo: '4 days ago',
            quote: 'Love that they keep Hocco strawberry cheesecake and nutty cones! Loaded fries are super cheesy and hot. Best cafe near GEHU Gate 1.'
        },
        {
            id: 't-3',
            name: 'Rohan Mehra',
            initial: 'R',
            avatarBg: 'bg-indigo-600',
            rating: 5,
            timeAgo: '1 week ago',
            quote: 'Veg burger at ₹79 and iced peach tea at ₹69 makes for the best hangout meal. Clean, cozy, and very polite service.'
        }
    ],

    footer: {
        poweredBy: 'ONESCAN Reviews',
        poweredBySubtitle: 'AI Experience Engine',
        copyright: '© 2026 Scoop n brew. Near GEHU Gate 1, Clement Town, Dehradun. All rights reserved.'
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
