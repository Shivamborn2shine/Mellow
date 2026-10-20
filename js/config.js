/**
 * ===========================================================================
 * SCOOP N BREW — MASTER SITE CONFIGURATION
 * ===========================================================================
 * Edit any link, phone, WhatsApp message, map, or review URL here.
 * Changes made in this file automatically update the ENTIRE website!
 * ===========================================================================
 */

const SITE_LINKS = {
    // --- PHONE NUMBER ------------------------------------------------------
    phone: '+919876543210',

    // --- WHATSAPP ----------------------------------------------------------
    whatsappNumber: '919876543210',
    whatsappMessage: 'Hi%20Scoop%20n%20brew,%20I%20would%20like%20to%20order%20or%20check%20today%27s%20gelato%20flavours!',

    // --- GOOGLE MAPS / DIRECTIONS ------------------------------------------
    googleMapsUrl: 'https://www.google.com/maps?cid=8696452129855489419',

    // --- GOOGLE MAP EMBED (iframe src) -------------------------------------
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297.704247068065!2d77.9985567!3d30.272292299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092b003a555405%3A0x78b00122e639c58b!2sScoop%20n%20brew!5e1!3m2!1sen!2sin!4v1792495036661!5m2!1sen!2sin',

    // --- GOOGLE REVIEW SUBMISSION PAGE -------------------------------------
    googleReviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJBVRVOgArCTkRi8U55iIBsHg',

    // --- INSTAGRAM PROFILE -------------------------------------------------
    instagramUrl: 'https://www.instagram.com/scoopnbrew',

    // --- GOOGLE PLACE ID ---------------------------------------------------
    googlePlaceId: 'ChIJBVRVOgArCTkRi8U55iIBsHg',

    // --- ONESCAN BRAND MARKETING --------------------------------------------
    onescanInstagram: 'https://www.instagram.com/onescan360',
    onescanEmail: 'onescan360@gmail.com',
};

const BUSINESS_CONFIG = {
    id: 'scoop-n-brew',
    name: 'Scoop n brew',
    tagline: 'Artisanal Gelato Scoops, Handcrafted Belgian Waffles & Specialty Brews in Dehradun',
    address: 'Jakhan, Rajpur Road, Dehradun, Uttarakhand 248001, India',
    fallbackQuery: 'Scoop n brew Dehradun',

    coordinates: {
        latitude: 30.2722923,
        longitude: 77.9985567
    },

    phone: SITE_LINKS.phone,
    whatsapp: SITE_LINKS.whatsappNumber,
    googlePlaceId: SITE_LINKS.googlePlaceId,
    googleReviewUrl: SITE_LINKS.googleReviewUrl,
    googleWriteReviewUrl: SITE_LINKS.googleReviewUrl,
    googleMapsUrl: SITE_LINKS.googleMapsUrl,
    mapsEmbedUrl: SITE_LINKS.mapEmbedUrl,
    dashboardSync: true
};

function applyLinks() {
    const map = {
        call: 'tel:' + SITE_LINKS.phone,
        whatsapp: 'https://wa.me/' + SITE_LINKS.whatsappNumber + '?text=' + SITE_LINKS.whatsappMessage,
        directions: SITE_LINKS.googleMapsUrl,
        instagram: SITE_LINKS.instagramUrl,
        review: SITE_LINKS.googleReviewUrl,
        mapEmbed: SITE_LINKS.mapEmbedUrl,
    };

    document.querySelectorAll('[data-link]').forEach(el => {
        const key = el.dataset.link;
        const url = map[key];
        if (!url) return;

        if (el.tagName === 'IFRAME') {
            el.src = url;
        } else {
            el.href = url;
        }
    });
}

if (typeof window !== 'undefined') {
    window.SITE_LINKS = SITE_LINKS;
    window.BUSINESS_CONFIG = BUSINESS_CONFIG;
    window.applyLinks = applyLinks;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyLinks);
    } else {
        applyLinks();
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SITE_LINKS, BUSINESS_CONFIG, applyLinks };
}
