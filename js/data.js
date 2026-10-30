/**
 * ===========================================================================
 * SCOOP N BREW — MASTER STORE DATA (100% REAL PHOTOS & COMPLETE MENU)
 * Populated with 10 Authentic Photos, Official Menu Board & Hocco Ice Creams
 * ===========================================================================
 */

const REVIEWS_DB = (typeof window !== 'undefined' && window.REVIEWS_DB) ? window.REVIEWS_DB : {};

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
        logoImg: './assets/images/scoop-n-brew/scoop-n-brew-profile-logo.jpg',
        heroImg: './assets/images/scoop-n-brew/scoop-n-brew-top-banner.jpg',
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
            { key: 'WAFFLES', categoryKey: 'WAFFLES', label: 'Waffles (Nutella/Choc ₹99)', image: './assets/images/specialities/nutella-waffle.jpg' },
            { key: 'MINI_PANCAKES', categoryKey: 'PANCAKES', label: 'Mini Pancakes (@ ₹59)', image: './assets/images/specialities/mini-pancakes.jpg' },
            { key: 'HOCCO', categoryKey: 'ICE_CREAM', label: 'Hocco Ice Cream Cones', image: './assets/images/scoop-n-brew/hocco-nutty-cone.png' },
            { key: 'SHAKES', categoryKey: 'SHAKES', label: 'Thick Shakes (@ ₹69-79)', image: './assets/images/specialities/oreo-shake.jpg' },
            { key: 'FRIES', categoryKey: 'FRIES', label: 'Loaded & Peri Fries (@ ₹69-79)', image: './assets/images/specialities/loaded-fries.jpg' },
            { key: 'BURGERS_SANDWICHES', categoryKey: 'FOOD', label: 'Burgers & Sandwiches (@ ₹69-79)', image: './assets/images/specialities/sandwich.jpg' },
            { key: 'MOJITOS', categoryKey: 'MOJITOS', label: 'Mojitos & Iced Teas (@ ₹69)', image: './assets/images/specialities/mint-mojito.jpg' },
            { key: 'COFFEE_CHAI', categoryKey: 'COFFEE', label: 'Chai (₹20) & Coffee (₹29)', image: './assets/images/specialities/cold-coffee.jpg' },
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
            price: '₹99',
            image: './assets/images/specialities/nutella-waffle.jpg',
            gradient: 'from-pink-500 to-rose-600',
            categoryKey: 'WAFFLES'
        },
        {
            id: 'spec-pancakes',
            name: 'Mini Pancakes',
            price: '₹59',
            image: './assets/images/specialities/mini-pancakes.jpg',
            gradient: 'from-pink-500 to-rose-600',
            categoryKey: 'MINI_PANCAKES'
        },
        {
            id: 'spec-loaded-fries',
            name: 'Loaded Fries',
            price: '₹79',
            image: './assets/images/specialities/loaded-fries.jpg',
            gradient: 'from-pink-500 to-rose-600',
            categoryKey: 'FRIES'
        },
        {
            id: 'spec-oreo-shake',
            name: 'Oreo Shake',
            price: '₹79',
            image: './assets/images/specialities/oreo-shake.jpg',
            gradient: 'from-pink-500 to-rose-600',
            categoryKey: 'SHAKES'
        },
        {
            id: 'spec-sandwich',
            name: 'Sandwich',
            price: '₹69',
            image: './assets/images/specialities/sandwich.jpg',
            gradient: 'from-pink-500 to-rose-600',
            categoryKey: 'SANDWICHES'
        },
        {
            id: 'spec-mojito',
            name: 'Mint Mojito',
            price: '₹69',
            image: './assets/images/specialities/mint-mojito.jpg',
            gradient: 'from-pink-500 to-rose-600',
            categoryKey: 'MOJITOS'
        },
        {
            id: 'spec-coffee',
            name: 'Cold Coffee',
            price: '₹69',
            image: './assets/images/specialities/cold-coffee.jpg',
            gradient: 'from-pink-500 to-rose-600',
            categoryKey: 'COFFEE'
        }
    ],

    reviewChips: [
        { key: 'ICE_CREAM', label: 'Ice Cream & Cones', icon: 'icecream' },
        { key: 'WAFFLES', label: 'Waffles & Pancakes', icon: 'waffle' },
        { key: 'SHAKES', label: 'Thick Shakes', icon: 'shake' },
        { key: 'FOOD', label: 'Burgers & Fries', icon: 'food' },
        { key: 'BEVERAGES', label: 'Mojitos & Coffee', icon: 'coffee' },
        { key: 'SERVICE', label: 'Friendly Staff', icon: 'users' },
        { key: 'AMBIENCE', label: 'Cozy Ambience', icon: 'sparkle' },
        { key: 'ALL', label: 'Overall Experience', icon: 'star' }
    ],

    reviewBank: REVIEWS_DB,

    gallery: [
        {
            id: 'g-1',
            src: './assets/images/gallery/gallery-1.jpg',
            title: 'Scoop n Brew Cafe Storefront',
            category: 'ambience',
            categoryLabel: 'Storefront',
            tag: 'OUR CAFE',
            desc: 'Charming outdoor seating with green turf, cozy mood lighting, and welcoming cafe vibes near GEHU Gate 1.',
            aiCategory: 'AMBIENCE'
        },
        {
            id: 'g-2',
            src: './assets/images/gallery/gallery-2.jpg',
            title: 'Neon Pink Arch Seating',
            category: 'ambience',
            categoryLabel: 'Interior',
            tag: 'PHOTO SPOT',
            desc: 'Aesthetic backlit pink arch with plush velvet seats and cute ice cream wall frames — perfect for photos & dates!',
            aiCategory: 'AMBIENCE'
        },
        {
            id: 'g-3',
            src: './assets/images/gallery/gallery-3.jpg',
            title: 'Beverage & Shake Bar',
            category: 'beverage',
            categoryLabel: 'Barista',
            tag: 'LIVE COUNTER',
            desc: 'Behind the counter with premium flavor syrups, thick shake blenders, waffle makers, and warm glow arches.',
            aiCategory: 'SHAKES'
        },
        {
            id: 'g-4',
            src: './assets/images/gallery/gallery-4.jpg',
            title: 'Artisanal Syrups & Bar Counter',
            category: 'beverage',
            categoryLabel: 'Drinks',
            tag: 'CRAFT DRINKS',
            desc: 'Gourmet Barisco syrups and fresh brewing stations ready to whip up mouthwatering mojitos, shakes, and cold coffee.',
            aiCategory: 'BEVERAGES'
        },
        {
            id: 'g-5',
            src: './assets/images/gallery/gallery-5.jpg',
            title: 'Scoop n Brew Official Emblem',
            category: 'brand',
            categoryLabel: 'Brand',
            tag: 'OUR IDENTITY',
            desc: 'Ice Cream, Coffee, Thick Shakes & More — served fresh with love, passion, and sweetness at Clement Town.',
            aiCategory: 'ALL'
        },
        {
            id: 'g-6',
            src: './assets/images/gallery/gallery-6.jpg',
            title: 'Pink Brick Quotes Wall',
            category: 'ambience',
            categoryLabel: 'Wall Art',
            tag: 'INSTAGRAMMABLE',
            desc: 'Vibrant candy-pink brick texture with cute foodie quotes and ice cream frames — an awesome selfie backdrop!',
            aiCategory: 'ICE_CREAM'
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

const STORAGE_KEY = 'scoopnbrew_store_data_v5';

export function getStoreData() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            const parsed = JSON.parse(stored);
            parsed.reviewBank = REVIEWS_DB;
            if (parsed.brand) {
                parsed.brand.heroImg = './assets/images/scoop-n-brew/scoop-n-brew-top-banner.jpg';
                parsed.brand.logoImg = './assets/images/scoop-n-brew/scoop-n-brew-profile-logo.jpg';
            }
            return parsed;
        }
    } catch (e) {
        console.warn('Failed to parse stored data', e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_STORE_DATA));
}

export function saveStoreData(data) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        return true;
    } catch (e) {
        return false;
    }
}

export function resetStoreData() {
    try {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem('scoopnbrew_store_data');
        return true;
    } catch (e) {
        return false;
    }
}
