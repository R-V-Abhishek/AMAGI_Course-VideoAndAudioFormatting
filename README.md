# AMAGI Course Projects

This repository contains various programming projects and assignments from the AMAGI course.

## Projects

### 1. VIBGYOR Rainbow Generator
Generate rainbow images with the 7 colors of VIBGYOR (Violet, Indigo, Blue, Green, Yellow, Orange, Red).

**Files:**
- `Q1.py` - Python version using NumPy and PIL
- `Q1.js` - JavaScript version for web browsers
- `Q1.ts` - TypeScript version with type safety
- `Q1_node_jimp.js` - Node.js version using Jimp library
- `index.html` - Interactive web demo
- `package.json` - Node.js dependencies

**Features:**
- Generates 1280×720 pixel rainbow images
- Horizontal stripes with accurate VIBGYOR colors
- Multiple implementation approaches (Python, JavaScript, TypeScript, Node.js)

### 2. Tanpura Sound Generator
Synthesize tanpura-like drone sounds using digital signal processing.

**Files:**
- `Assignment 1.3/Play_tanpura.py` - Python audio synthesis script

**Features:**
- Generates white noise and filters specific frequencies (220Hz, 440Hz)
- Creates harmonic resonance typical of tanpura strings
- Real-time audio playback
- Digital signal processing with band-pass filters

## Requirements

### Python Projects
```bash
pip install numpy pillow sounddevice scipy
```

### Node.js Projects
```bash
npm install jimp
```

## Usage

### VIBGYOR Rainbow Generator
```bash
# Python version
python Q1.py

# Node.js version
npm start

# Web version
open index.html in browser
```

### Tanpura Sound Generator
```bash
python "Assignment 1.3/Play_tanpura.py"
```

## Technical Details

### VIBGYOR Colors (RGB)
- **Violet:** RGB(148, 0, 211)
- **Indigo:** RGB(75, 0, 130)
- **Blue:** RGB(0, 0, 255)
- **Green:** RGB(0, 255, 0)
- **Yellow:** RGB(255, 255, 0)
- **Orange:** RGB(255, 127, 0)
- **Red:** RGB(255, 0, 0)

### Audio Processing
- **Sample Rate:** 44.1 kHz (CD quality)
- **Frequency Filtering:** Band-pass filters around 220Hz and 440Hz
- **Signal Processing:** Normalization and clipping prevention
- **Duration:** 5 seconds default

## License
MIT License
