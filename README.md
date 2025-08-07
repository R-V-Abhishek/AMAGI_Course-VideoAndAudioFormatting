# AMAGI Course - Video and Audio Formatting

This repository contains comprehensive programming projects and assignments from the AMAGI course covering video and audio formatting, digital signal processing, compression algorithms, multimedia programming, and FFmpeg operations.

## Course Structure

### 📚 Lecture 1 - Fundamentals (Assignments Lecture-1/)
Basic multimedia programming, image generation, and audio synthesis foundations.

### 📚 Lecture 2 - Compression & Information Theory (Assignment Lecture 2/)
Data compression algorithms, entropy calculation, and Huffman coding implementations.

### 📚 Lecture 3 - Video Processing & Containers (Assignments - Lecture 3/)
Video format analysis, container formats, and advanced FFmpeg operations.

## Projects Overview

### 1. Image Generation & Processing (Assignments Lecture-1/Assignment 1.1/)
**VIBGYOR Rainbow Generator** - Create rainbow images with precise color specifications.

**Files:**
- `Q1.py` - Python implementation using NumPy and PIL
- `Q1.ts` - TypeScript version with type safety
- `Q1_node_jimp.js` - Node.js implementation using Jimp library

**Features:**
- Generates 1280×720 pixel rainbow images
- Horizontal stripes with accurate VIBGYOR color values
- Multiple language implementations
- Cross-platform compatibility

### 2. Command Line Utilities (Assignments Lecture-1/Assignment 1.2 and 1.3/)
**System Operations & Basic Media Processing**

**Files:**
- `CommandLine.txt` - Command reference and system utilities

### 3. Audio Signal Processing (Assignments Lecture-1/Assignment 1.4 and 1.5 and 1.6/)
**Digital Audio Synthesis and Processing Tools**

**Files:**
- `Play_tanpura.py` - Tanpura sound synthesis using DSP techniques
- `Play_440hz.py` - Pure tone generator at concert pitch
- `Change_Sampling_rate.py` - Audio resampling and format conversion

**Features:**
- **Tanpura Synthesis:** White noise filtering at 220Hz and 440Hz
- **Digital Signal Processing:** Band-pass filters and envelope shaping
- **Sample Rate Conversion:** Professional audio resampling
- **Real-time Audio:** Live playback with sounddevice integration

### 4. Information Theory & Compression (Assignment Lecture 2/)
**Data Compression and Entropy Analysis Tools**

**Files:**
- `Entropy_test.py` - Calculate information entropy of images
- `hoffman_compression.py` - Huffman coding implementation for image compression
- `Command_prompt.txt` - FFmpeg operations and video analysis

**Features:**
- **Entropy Calculation:** Information content analysis of pixel data
- **Huffman Coding:** Lossless compression algorithm implementation
- **Image Processing:** Grayscale conversion and pixel analysis
- **Compression Metrics:** Detailed compression ratio reporting
- **Motion Vector Analysis:** Video analysis with FFmpeg

### 5. Video Processing & Container Analysis (Assignments - Lecture 3/)
**Advanced Video Format Operations**

**Files:**
- `Command Prompt.txt` - Comprehensive FFmpeg operations and transport stream analysis

**Features:**
- **Transport Stream Processing:** MPEG-TS format analysis
- **Container Format Analysis:** Detailed stream information extraction
- **Video Codec Inspection:** H.264 stream analysis
- **Audio Stream Processing:** AC-3 audio format handling
- **Metadata Extraction:** Service information and program details

## Requirements

### Python Dependencies
```bash
pip install numpy pillow sounddevice scipy
```

### Node.js Dependencies
```bash
npm install jimp
```

### System Requirements
- **FFmpeg:** For video/audio processing and analysis
- **Python 3.7+:** For signal processing and compression algorithms
- **Node.js 14+:** For JavaScript/TypeScript implementations

## Usage

### Image Processing
```bash
# Generate VIBGYOR rainbow
python "Assignments Lecture-1/Assignment 1.1/Q1.py"

# Node.js version
npm start
```

### Audio Processing
```bash
# Generate tanpura sound
python "Assignments Lecture-1/Assignment 1.4 and 1.5 and 1.6/Play_tanpura.py"

# Generate 440Hz tone
python "Assignments Lecture-1/Assignment 1.4 and 1.5 and 1.6/Play_440hz.py"

# Resample audio file
python "Assignments Lecture-1/Assignment 1.4 and 1.5 and 1.6/Change_Sampling_rate.py"
```

### Compression Analysis
```bash
# Calculate image entropy
python "Assignment Lecture 2/Entropy_test.py"

# Huffman compression
python "Assignment Lecture 2/hoffman_compression.py"
```

### Video Analysis
```bash
# Motion vector analysis
ffmpeg -flags2 +export_mvs -i input.mp4 -vf codecview=mv=pf+bf+bb output_mv.mp4

# Transport stream information
ffmpeg -i stream.ts
```

## Technical Specifications

### VIBGYOR Colors (RGB Values)
- **Violet:** RGB(148, 0, 211)
- **Indigo:** RGB(75, 0, 130)
- **Blue:** RGB(0, 0, 255)
- **Green:** RGB(0, 255, 0)
- **Yellow:** RGB(255, 255, 0)
- **Orange:** RGB(255, 127, 0)
- **Red:** RGB(255, 0, 0)

### Audio Processing Parameters
- **Sample Rate:** 44.1 kHz (CD quality) / 16 kHz (compressed)
- **Tanpura Frequencies:** 220Hz (A3) and 440Hz (A4) band-pass filtering
- **Filter Design:** 4th-order Butterworth band-pass filters
- **Audio Formats:** WAV input/output support
- **Processing:** Real-time synthesis and playback

### Compression Algorithms
- **Entropy Calculation:** Shannon entropy for information content analysis
- **Huffman Coding:** Optimal prefix-free coding for lossless compression
- **Image Processing:** Grayscale conversion and pixel frequency analysis
- **Performance Metrics:** Compression ratio and bit reduction statistics

### Video Format Support
- **Containers:** MP4, MOV, MPEG-TS
- **Video Codecs:** H.264 (AVC), motion vector analysis
- **Audio Codecs:** AC-3, AAC, various PCM formats
- **Analysis Tools:** FFmpeg integration for comprehensive format inspection

## Project Structure
```
AMAGI Course/
├── Assignments Lecture-1/          # Fundamentals
│   ├── Assignment 1.1/              # Image generation
│   ├── Assignment 1.2 and 1.3/     # Command line utilities  
│   └── Assignment 1.4 and 1.5 and 1.6/  # Audio processing
├── Assignment Lecture 2/            # Compression & entropy
│   ├── Entropy_test.py
│   ├── hoffman_compression.py
│   └── Command_prompt.txt
├── Assignments - Lecture 3/        # Video processing
│   └── Command Prompt.txt
├── package.json                     # Node.js dependencies
└── README.md                        # This file
```

## Learning Outcomes

- **Multimedia Programming:** Cross-language implementations of image and audio processing
- **Signal Processing:** Digital audio synthesis, filtering, and resampling techniques
- **Information Theory:** Entropy calculation and data compression fundamentals
- **Video Technology:** Container formats, codecs, and stream analysis
- **FFmpeg Mastery:** Command-line video/audio processing and analysis
- **Algorithm Implementation:** Huffman coding and compression techniques

## License
MIT License - Educational use for AMAGI course assignments.
