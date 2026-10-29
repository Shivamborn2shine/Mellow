const fs = require('fs');

const content = fs.readFileSync('D:/Business 2027/Wireless by devansh/wireless/index.html', 'utf8');
const lines = content.split('\n');

function findMatches(keyword, before = 5, after = 25) {
  console.log(`\n=================== Matches for "${keyword}" ===================`);
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(keyword)) {
      console.log(`--- Match at line ${i + 1} ---`);
      const start = Math.max(0, i - before);
      const end = Math.min(lines.length, i + after);
      for (let j = start; j < end; j++) {
        console.log(`${(j + 1).toString().padStart(4, ' ')}: ${lines[j]}`);
      }
      i += after; // skip ahead to avoid overlapping duplicates
    }
  }
}

findMatches('golden-shine-bar', 4, 30);
findMatches('STORE_GALLERY', 3, 30);
findMatches('galleryCarouselTrack', 3, 35);
findMatches('fullGalleryModal', 3, 35);
findMatches('galleryModal', 3, 35);
