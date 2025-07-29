// VIBGYOR Rainbow Generator for Node.js using Jimp
// Requires: npm install jimp

const Jimp = require('jimp');

// Image size
const width = 1280;
const height = 720;

// Define 7 VIBGYOR colors in RGB
const colors = [
    { name: "Violet", rgb: [148, 0, 211] },
    { name: "Indigo", rgb: [75, 0, 130] },
    { name: "Blue", rgb: [0, 0, 255] },
    { name: "Green", rgb: [0, 255, 0] },
    { name: "Yellow", rgb: [255, 255, 0] },
    { name: "Orange", rgb: [255, 127, 0] },
    { name: "Red", rgb: [255, 0, 0] }
];

// Calculate height for each stripe
const stripeHeight = Math.floor(height / 7);

/**
 * Convert RGB array to Jimp color format
 * @param {number[]} rgb - RGB array [r, g, b]
 * @returns {number} Jimp color number
 */
function rgbToJimpColor(rgb) {
    const [r, g, b] = rgb;
    return Jimp.rgbaToInt(r, g, b, 255);
}

/**
 * Creates a VIBGYOR rainbow image and saves it as PNG
 * @param {string} filename - Output filename (default: 'vibgyor_1280x720.png')
 */
async function createVIBGYORImage(filename = 'vibgyor_1280x720.png') {
    try {
        console.log('Creating VIBGYOR rainbow image...');
        
        // Create new image
        const image = new Jimp(width, height, 0x000000ff); // Start with black background
        
        // Fill each stripe
        colors.forEach((color, i) => {
            const startY = i * stripeHeight;
            const endY = (i < 6) ? (i + 1) * stripeHeight : height; // ensure last stripe goes to end
            
            console.log(`Drawing ${color.name} stripe: Y ${startY}-${endY} (height: ${endY - startY}px)`);
            
            const jimpColor = rgbToJimpColor(color.rgb);
            
            // Fill rectangle for this stripe
            for (let y = startY; y < endY; y++) {
                for (let x = 0; x < width; x++) {
                    image.setPixelColor(jimpColor, x, y);
                }
            }
        });
        
        // Save the image
        await image.writeAsync(filename);
        
        console.log(`✅ VIBGYOR rainbow image saved as: ${filename}`);
        console.log(`📏 Image dimensions: ${width}x${height} pixels`);
        console.log(`🌈 Colors used: ${colors.map(c => c.name).join(', ')}`);
        
        return filename;
        
    } catch (error) {
        console.error('❌ Error creating VIBGYOR image:', error.message);
        
        if (error.message.includes('Cannot find module')) {
            console.log('\n💡 To fix this, install the jimp package:');
            console.log('   npm install jimp');
        }
        
        throw error;
    }
}

/**
 * Display color information
 */
function displayColorInfo() {
    console.log('\n🎨 VIBGYOR Color Information:');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    colors.forEach((color, index) => {
        const [r, g, b] = color.rgb;
        console.log(`${index + 1}. ${color.name.padEnd(8)} - RGB(${r.toString().padStart(3)}, ${g.toString().padStart(3)}, ${b.toString().padStart(3)})`);
    });
    console.log(`\nStripe height: ${stripeHeight}px each (last stripe: ${height - 6 * stripeHeight}px to fill remaining space)`);
}

// Main execution
async function main() {
    console.log('🌈 VIBGYOR Rainbow Generator for Node.js (using Jimp)');
    console.log('=====================================================\n');
    
    displayColorInfo();
    
    try {
        // Create the image
        await createVIBGYORImage();
    } catch (error) {
        console.error('Failed to generate image:', error.message);
        process.exit(1);
    }
}

// Run if this file is executed directly
if (require.main === module) {
    main();
}

// Export for use as module
module.exports = {
    createVIBGYORImage,
    displayColorInfo,
    colors,
    width,
    height,
    stripeHeight
};
