// VIBGYOR Rainbow Generator in TypeScript

interface Color {
    name: string;
    rgb: [number, number, number];
}

// Image size
const width: number = 1280;
const height: number = 720;

// Define 7 VIBGYOR colors in RGB
const colors: Color[] = [
    { name: "Violet", rgb: [148, 0, 211] },
    { name: "Indigo", rgb: [75, 0, 130] },
    { name: "Blue", rgb: [0, 0, 255] },
    { name: "Green", rgb: [0, 255, 0] },
    { name: "Yellow", rgb: [255, 255, 0] },
    { name: "Orange", rgb: [255, 127, 0] },
    { name: "Red", rgb: [255, 0, 0] }
];

// Calculate height for each stripe
const stripeHeight: number = Math.floor(height / 7);

function createVIBGYORImage(): HTMLCanvasElement {
    // Create canvas element
    const canvas: HTMLCanvasElement = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    
    const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
    if (!ctx) {
        throw new Error('Could not get canvas context');
    }
    
    // Fill each stripe
    colors.forEach((color: Color, i: number) => {
        const startY: number = i * stripeHeight;
        const endY: number = (i < 6) ? (i + 1) * stripeHeight : height; // ensure last stripe goes to end
        
        // Set fill color
        ctx.fillStyle = `rgb(${color.rgb[0]}, ${color.rgb[1]}, ${color.rgb[2]})`;
        
        // Fill rectangle for this stripe
        ctx.fillRect(0, startY, width, endY - startY);
    });
    
    return canvas;
}

function downloadCanvas(canvas: HTMLCanvasElement, filename: string): void {
    // Convert canvas to blob and download
    canvas.toBlob((blob: Blob | null) => {
        if (!blob) {
            console.error('Failed to create blob from canvas');
            return;
        }
        
        const url: string = URL.createObjectURL(blob);
        const link: HTMLAnchorElement = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }, 'image/png');
}

// Main execution function
function generateVIBGYOR(): void {
    try {
        const canvas: HTMLCanvasElement = createVIBGYORImage();
        
        // Add canvas to document body for display
        document.body.appendChild(canvas);
        
        // Download the image
        downloadCanvas(canvas, 'vibgyor_1280x720.png');
        
        console.log('VIBGYOR rainbow image generated successfully!');
    } catch (error) {
        console.error('Error generating VIBGYOR image:', error);
    }
}

// Export for use in other modules
export { generateVIBGYOR, createVIBGYORImage, Color };

// Auto-run if in browser environment
if (typeof document !== 'undefined') {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', generateVIBGYOR);
    } else {
        generateVIBGYOR();
    }
}
