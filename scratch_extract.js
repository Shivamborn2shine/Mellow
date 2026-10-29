const fs = require('fs');
const content = fs.readFileSync('D:/Business 2027/Wireless by devansh/wireless/index.html', 'utf8');

// Print CSS for golden-shine-bar and goldenPulse
const cssMatch = content.match(/\/\* Golden Shimmering Bar[\s\S]*?(?=\/\*|$)/);
if (cssMatch) {
  console.log('=== CSS ===\n', cssMatch[0].slice(0, 1500));
}

// Print HTML for gallery section
const galleryMatch = content.match(/<!-- 8\. STORE PHOTO GALLERY[\s\S]*?(?=<!-- 9\.)/);
if (galleryMatch) {
  console.log('=== GALLERY HTML ===\n', galleryMatch[0]);
}

// Print JS for STORE_GALLERY and gallery functions
const jsMatch = content.match(/const STORE_GALLERY =[\s\S]*?(?=function renderCategoriesTab)/);
if (jsMatch) {
  console.log('=== GALLERY JS ===\n', jsMatch[0]);
}
