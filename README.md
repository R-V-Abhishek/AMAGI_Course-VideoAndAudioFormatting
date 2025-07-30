# AMAGI Course Projects

This repository contains various programming projects and assignments from the AMAGI course covering video and audio formatting, signal processing, and multimedia programming.

## Projects

### 1. VIBGYOR Rainbow Generator (Assignment 1.1)
Generate rainbow images with the 7 colors of VIBGYOR (Violet, Indigo, Blue, Green, Yellow, Orange, Red).

**Files:**
- `Assignment 1.1/Q1.py` - Python version using NumPy and PIL
- `Assignment 1.1/Q1.ts` - TypeScript version with type safety
- `Assignment 1.1/Q1_node_jimp.js` - Node.js version using Jimp library
- `package.json` - Node.js dependencies

**Features:**
- Generates 1280×720 pixel rainbow images
- Horizontal stripes with accurate VIBGYOR colors
- Multiple implementation approaches (Python, Javascript, TypeScript, Node.js)

### 2. Command Line Utilities (Assignment 1.2 & 1.3)
Basic command line operations and utilities.

**Files:**
- `Assignment 1.2 and 1.3/CommandLine.txt` - Command line reference and examples

### 3. Audio Signal Processing (Assignment 1.4, 1.5 & 1.6)
Digital audio processing, synthesis, and format conversion tools.

**Files:**
- `Assignment 1.4 and 1.5 and 1.6/Play_tanpura.py` - Tanpura sound synthesis using DSP
- `Assignment 1.4 and 1.5 and 1.6/Play_440hz.py` - 440Hz tone generator
- `Assignment 1.4 and 1.5 and 1.6/Change_Sampling_rate.py` - Audio resampling utility

**Features:**
- **Tanpura Synthesis:** White noise filtering at 220Hz and 440Hz frequencies
- **Tone Generation:** Pure sine wave generation at concert pitch
- **Audio Resampling:** Convert sample rates (e.g., 44.1kHz → 16kHz)
- **Real-time Playback:** Live audio output using sounddevice
- **File I/O:** WAV file reading, writing, and processing

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
python "Assignment 1.1/Q1.py"

# Node.js version
npm start
```

### Audio Processing Tools
```bash
# Generate tanpura sound
python "Assignment 1.4 and 1.5 and 1.6/Play_tanpura.py"

# Generate 440Hz tone
python "Assignment 1.4 and 1.5 and 1.6/Play_440hz.py"

# Resample audio file
python "Assignment 1.4 and 1.5 and 1.6/Change_Sampling_rate.py"
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

### Audio Processing Parameters
- **Sample Rate:** 44.1 kHz (CD quality)
- **Tanpura Frequencies:** 220Hz (A3) and 440Hz (A4) band-pass filtering
- **Resampling:** Supports conversion to various sample rates (e.g., 16kHz)
- **Signal Processing:** Normalization, clipping prevention, and envelope shaping
- **File Formats:** WAV input/output support
- **Duration:** Configurable (default 5 seconds)

### Signal Processing Techniques
- **White Noise Generation:** Gaussian random noise as frequency source
- **Band-Pass Filtering:** Butterworth filters for frequency isolation
- **Digital Resampling:** Scipy signal processing for sample rate conversion
- **Audio Normalization:** Amplitude scaling and clipping prevention

## License
MIT License
