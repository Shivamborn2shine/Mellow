#!/usr/bin/env node

/**
 * ===========================================================================
 * ONESCAN CLIENT SCAFFOLDER & REPLICATION CLI
 * ===========================================================================
 * Creates an independent project folder & new Git repository for any merchant.
 * 
 * Usage:
 *   node scripts/create-client.js --name "Scoop n Brew"
 *   node scripts/create-client.js --name "Cafe Hazel" --dir "../Cafe Hazel"
 * ===========================================================================
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Parse CLI flags
function parseArgs() {
    const args = process.argv.slice(2);
    const parsed = {
        name: 'New Merchant',
        dir: null,
        preset: null
    };

    for (let i = 0; i < args.length; i++) {
        if (args[i] === '--name' && args[i + 1]) {
            parsed.name = args[++i];
        } else if (args[i] === '--dir' && args[i + 1]) {
            parsed.dir = args[++i];
        } else if (args[i] === '--preset' && args[i + 1]) {
            parsed.preset = args[++i];
        } else if (!args[i].startsWith('--') && i === 0) {
            parsed.name = args[i];
        }
    }

    if (!parsed.dir) {
        // Default target directory in the same parent folder (e.g. D:\Business 2027\Scoop n Brew)
        parsed.dir = path.resolve('..', parsed.name);
    } else {
        parsed.dir = path.resolve(parsed.dir);
    }

    return parsed;
}

// Preset Profiles
const PRESETS = {
    'scoop-n-brew': {
        name: 'Scoop n brew',
        shortName: 'Scoop n Brew',
        slug: 'scoop-n-brew',
        initials: 'SB',
        tagline: 'Handcrafted gelato scoops, thick milkshakes, Belgian waffles & specialty coffee in Dehradun',
        categoryBadge: '🍨 Artisanal Gelato & Brews',
        statusBadge: 'Open Now • 11 AM - 11 PM',
        address: 'Jakhan, Rajpur Road, Dehradun, Uttarakhand 248001, India',
        shortAddress: 'Jakhan, Rajpur Road, Dehradun',
        phone: '+919876543210',
        phoneDisplay: '+91 98765 43210',
        whatsapp: '919876543210',
        instagramUrl: 'https://www.instagram.com/scoopnbrew',
        googlePlaceId: 'ChIJBVRVOgArCTkRi8U55iIBsHg',
        googleMapsCid: '8696452129855489419',
        googleMapsUrl: 'https://www.google.com/maps?cid=8696452129855489419',
        mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297.704247068065!2d77.9985567!3d30.272292299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092b003a555405%3A0x78b00122e639c58b!2sScoop%20n%20brew!5e1!3m2!1sen!2sin!4v1792495036661!5m2!1sen!2sin',
        googleReviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJBVRVOgArCTkRi8U55iIBsHg',
        theme: {
            primary: '#E11D48',
            primaryHover: '#BE123C',
            primaryLight: '#FFE4E6',
            primaryShadow: 'rgba(225, 29, 72, 0.3)',
            accent: '#E11D48',
            accentGlow: 'rgba(225, 29, 72, 0.25)',
            gradientBg: 'linear-gradient(135deg, #FFF1F2 0%, #FDF2F8 50%, #FEF3C7 100%)'
        },
        welcomeItems: [
            { key: 'GELATO', categoryKey: 'DESSERT', label: 'Gelato & Scoops', image: './assets/images/blue-door/biscoff-cheesecake.jpg' },
            { key: 'WAFFLES', categoryKey: 'DESSERT', label: 'Belgian Waffles', image: './assets/images/blue-door/fluffy-pancakes.jpg' },
            { key: 'SHAKES', categoryKey: 'BEVERAGE', label: 'Thick Shakes', image: './assets/images/blue-door/beverage-drink.jpg' },
            { key: 'COFFEE', categoryKey: 'COFFEE', label: 'Cold & Hot Coffee', image: './assets/images/blue-door/coffee-cup.jpg' },
            { key: 'SUNDAES', categoryKey: 'DESSERT', label: 'Signature Sundaes', image: './assets/images/blue-door/tiramisu-cup.jpg' },
            { key: 'BITES', categoryKey: 'FOOD', label: 'Savory Bites', image: './assets/images/blue-door/sandwich-wrap.jpg' },
            { key: 'DESSERTS', categoryKey: 'DESSERT', label: 'Cakes & Desserts', image: './assets/images/blue-door/cake-pastry.jpg' },
            { key: 'ALL', categoryKey: 'ALL', label: 'Not Sure', isNotSure: true }
        ]
    }
};

// Copy directory recursively excluding .git and node_modules
function copyDirRecursive(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }

    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        // Skip ignored directories
        if (entry.name === '.git' || entry.name === 'node_modules' || entry.name === '.knox') {
            continue;
        }

        if (entry.isDirectory()) {
            copyDirRecursive(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

function main() {
    console.log('🚀 ONESCAN Client Replication Engine\n');
    const args = parseArgs();
    const sourceDir = process.cwd();
    const targetDir = args.dir;

    console.log(`📁 Source Blueprint:  ${sourceDir}`);
    console.log(`🎯 New Target Folder: ${targetDir}`);
    console.log(`🏢 Merchant Name:    "${args.name}"\n`);

    // Detect preset if applicable
    const normalizedName = args.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const preset = PRESETS[normalizedName] || PRESETS[args.preset] || null;

    if (fs.existsSync(targetDir)) {
        console.log(`⚠️  Warning: Target folder already exists at: ${targetDir}`);
    } else {
        console.log(`📦 Copying master blueprint files...`);
        copyDirRecursive(sourceDir, targetDir);
    }

    // 1. Update package.json in target directory
    const pkgPath = path.join(targetDir, 'package.json');
    if (fs.existsSync(pkgPath)) {
        try {
            const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
            const slug = (preset ? preset.slug : normalizedName);
            pkg.name = `${slug}-review-experience`;
            pkg.description = `Standalone AI-Powered Google Reviews & Experience Landing Page for ${args.name}`;
            fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2), 'utf8');
            console.log(`✅ Updated package.json (${pkg.name})`);
        } catch (e) {
            console.warn(`Could not update package.json:`, e.message);
        }
    }

    // 2. Customize js/config.js
    const configPath = path.join(targetDir, 'js', 'config.js');
    if (fs.existsSync(configPath) && preset) {
        let configContent = fs.readFileSync(configPath, 'utf8');
        // Replace business details
        configContent = configContent
            .replace(/name:\s*['"][^'"]+['"]/g, `name: '${preset.name}'`)
            .replace(/id:\s*['"][^'"]+['"]/g, `id: '${preset.slug}'`)
            .replace(/phone:\s*['"][^'"]+['"]/g, `phone: '${preset.phone}'`)
            .replace(/whatsappNumber:\s*['"][^'"]+['"]/g, `whatsappNumber: '${preset.whatsapp}'`)
            .replace(/googleMapsUrl:\s*['"][^'"]+['"]/g, `googleMapsUrl: '${preset.googleMapsUrl}'`)
            .replace(/mapEmbedUrl:\s*['"][^'"]+['"]/g, `mapEmbedUrl: '${preset.mapsEmbedUrl}'`)
            .replace(/googleReviewUrl:\s*['"][^'"]+['"]/g, `googleReviewUrl: '${preset.googleReviewUrl}'`)
            .replace(/googlePlaceId:\s*['"][^'"]+['"]/g, `googlePlaceId: '${preset.googlePlaceId}'`)
            .replace(/instagramUrl:\s*['"][^'"]+['"]/g, `instagramUrl: '${preset.instagramUrl}'`);
        
        fs.writeFileSync(configPath, configContent, 'utf8');
        console.log(`✅ Customized js/config.js with merchant contact & Google links`);
    }

    // 3. Customize js/data.js
    const dataPath = path.join(targetDir, 'js', 'data.js');
    if (fs.existsSync(dataPath) && preset) {
        let dataContent = fs.readFileSync(dataPath, 'utf8');
        dataContent = dataContent
            .replace(/id:\s*['"]blue-door-cafe-and-bakes['"]/g, `id: '${preset.slug}'`)
            .replace(/name:\s*['"]Blue Door Café & Bakes['"]/g, `name: '${preset.name}'`)
            .replace(/shortName:\s*['"]Blue Door['"]/g, `shortName: '${preset.shortName}'`)
            .replace(/initials:\s*['"]BD['"]/g, `initials: '${preset.initials}'`)
            .replace(/tagline:\s*['"][^'"]+['"]/g, `tagline: '${preset.tagline}'`)
            .replace(/categoryBadge:\s*['"][^'"]+['"]/g, `categoryBadge: '${preset.categoryBadge}'`)
            .replace(/statusBadge:\s*['"][^'"]+['"]/g, `statusBadge: '${preset.statusBadge}'`)
            .replace(/address:\s*['"]Clement Town[^'"]+['"]/g, `address: '${preset.address}'`)
            .replace(/shortAddress:\s*['"]Clement Town, Dehradun['"]/g, `shortAddress: '${preset.shortAddress}'`)
            .replace(/googlePlaceId:\s*['"][^'"]+['"]/g, `googlePlaceId: '${preset.googlePlaceId}'`)
            .replace(/googleMapsUrl:\s*['"][^'"]+['"]/g, `googleMapsUrl: '${preset.googleMapsUrl}'`)
            .replace(/googleReviewUrl:\s*['"][^'"]+['"]/g, `googleReviewUrl: '${preset.googleReviewUrl}'`)
            .replace(/googleWriteReviewUrl:\s*['"][^'"]+['"]/g, `googleWriteReviewUrl: '${preset.googleReviewUrl}'`)
            .replace(/primary:\s*['"]#4F46E5['"]/g, `primary: '${preset.theme.primary}'`)
            .replace(/primaryHover:\s*['"]#4338CA['"]/g, `primaryHover: '${preset.theme.primaryHover}'`)
            .replace(/accent:\s*['"]#2563EB['"]/g, `accent: '${preset.theme.accent}'`)
            .replace(/gradientBg:\s*['"][^'"]+['"]/g, `gradientBg: '${preset.theme.gradientBg}'`);

        fs.writeFileSync(dataPath, dataContent, 'utf8');
        console.log(`✅ Customized js/data.js with brand theme colors & store data`);
    }

    // 4. Create custom README.md for the new repository
    const readmePath = path.join(targetDir, 'README.md');
    const clientReadme = `# ${args.name} — AI Experience & Review Engine

Powered by **ONESCAN** (https://www.instagram.com/onescan360 | onescan360@gmail.com)

## 📌 About This Client Project
Standalone, high-converting Google Reviews & QR Experience Landing Page built exclusively for **${args.name}**.

---

## 🚀 Quick Start (Local Development)

\`\`\`bash
# 1. Install serve (if not already installed)
npm install

# 2. Run local development server
npm start
\`\`\`
The website will run locally at: \`http://localhost:3000\`

---

## 🛠️ In-Browser Live Developer CMS
Press **\`Ctrl + Alt + E\`** (or open with \`?dev=true\`) on the live page to open the visual Control Center to edit any text, image, links, and review bank items live.

---

## 🌐 Connecting to Your Dedicated GitHub Repository

To connect this client folder to its own separate GitHub repo:

\`\`\`bash
# 1. Create a new repository on GitHub (e.g., "${normalizedName}")
# 2. Add remote origin:
git remote add origin https://github.com/Shivamborn2shine/${normalizedName}.git

# 3. Rename branch to main (if needed):
git branch -M main

# 4. Push code:
git push -u origin main
\`\`\`

---

## ⚡ 1-Click Deployment (Netlify / Vercel / Hostinger)
- **Netlify:** Connect the repo and select publish directory as root \`.\`
- **Vercel:** Run \`vercel\` in this directory
- **Hostinger:** Upload files directly to \`public_html\` via Hostinger File Manager or Git integration.
`;
    fs.writeFileSync(readmePath, clientReadme, 'utf8');
    console.log(`✅ Generated tailored README.md with Git setup instructions`);

    // 5. Initialize Fresh Git Repository in the new directory
    try {
        const gitDir = path.join(targetDir, '.git');
        if (!fs.existsSync(gitDir)) {
            execSync('git init', { cwd: targetDir, stdio: 'ignore' });
            execSync('git add .', { cwd: targetDir, stdio: 'ignore' });
            execSync(`git commit -m "Initial commit: ONESCAN Review Experience Engine for ${args.name}"`, { cwd: targetDir, stdio: 'ignore' });
            console.log(`✨ Initialized fresh Git repository with initial commit!`);
        } else {
            console.log(`ℹ️  Git repository already initialized in target folder.`);
        }
    } catch (gitErr) {
        console.warn(`Git initialization notice:`, gitErr.message);
    }

    console.log(`\n🎉 SUCCESS! Independent project created for "${args.name}".`);
    console.log(`📍 Path: ${targetDir}`);
    console.log(`\nTo view and run the project:`);
    console.log(`   cd "${targetDir}"`);
    console.log(`   npm start\n`);
}

main();
