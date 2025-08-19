# AMAGI Course Projects

This repository contains programming assignments and projects from the AMAGI course, covering:
- Video and audio formatting
- HLS streaming and segment handling
- Signal processing and compression
- Multimedia command-line utilities
- Key management and encryption
- Organized by lecture and assignment

## Projects

### HLS Streaming Output (`hls_out` folder)

This folder contains outputs and artifacts related to HTTP Live Streaming (HLS) experiments and assignments:

- **HLS Playlists:**
	- `main.m3u8`, `720p_index.m3u8` — Master and variant playlists for adaptive streaming
- **Video Segments:**
	- `.ts` files (e.g., `seg_0032479.ts`) — MPEG-TS video segments downloaded or generated for HLS playback
- **HTML Player:**
	- `player.html` — Simple web player for testing HLS streams locally
- **Console Logs:**
	- `console.txt` — Logs and command outputs related to HLS operations

You can use these files to test HLS playback in a browser, analyze segment structure, or experiment with adaptive streaming workflows.

### 1. VIBGYOR Rainbow Generator (Assignment 1.1)
Generate rainbow images with the 7 colors of VIBGYOR (Violet, Indigo, Blue, Green, Yellow, Orange, Red).

**Files:**
- `Assignments Lecture-1/Assignment 1.1/Q1.py` - Python version using NumPy and PIL
- `Assignments Lecture-1/Assignment 1.1/Q1.ts` - TypeScript version
- `Assignments Lecture-1/Assignment 1.1/Q1_node_jimp.js` - Node.js version

### 2. Command Line Utilities (Assignment 1.2 & 1.3)
Basic command line operations and multimedia utilities.

**Files:**
- `Assignments Lecture-1/Assignment 1.2 and 1.3/CommandLine.txt` - Command line reference and examples

### 3. Audio Signal Processing (Assignment 1.4, 1.5 & 1.6)
Digital audio processing, synthesis, and format conversion tools.

**Files:**
- `Assignments Lecture-1/Assignment 1.4 and 1.5 and 1.6/Play_tanpura.py` - Tanpura sound synthesis
- `Assignments Lecture-1/Assignment 1.4 and 1.5 and 1.6/Play_440hz.py` - 440Hz tone generator
- `Assignments Lecture-1/Assignment 1.4 and 1.5 and 1.6/Change_Sampling_rate.py` - Audio resampling utility

### 4. HLS Streaming & Video Segments
Work with HTTP Live Streaming (HLS), video segments, and playlists.

**Files & Outputs:**
- `hls_out/` - Contains HLS playlists (`main.m3u8`, `720p_index.m3u8`), video segments, and a simple HTML player (`player.html`)
- Downloaded `.ts` segments and conversion scripts

### 5. Compression & Entropy (Lecture 2)
Implement Huffman compression and entropy tests in Python.

**Files:**
- `Assignment Lecture 2/hoffman_compression.py` - Huffman coding
- `Assignment Lecture 2/Entropy_test.py` - Entropy calculation

### 6. Video Metadata with AI (AI Lecture)
Advanced video analysis using machine learning models for metadata extraction and scene detection.

**Files:**
- `Video Metadata with AI Lecture/segment2_cpu_only_lab.ipynb` - AI-powered text/image analysis lab
- `Video Metadata with AI Lecture/segment3_pyscenedetect_v3.ipynb` - Scene detection and video segmentation

**Features:**
- Text similarity analysis using sentence transformers
- Named Entity Recognition (NER) with Transformers
- Image classification with Vision Transformers (ViT)
- Text sentiment analysis
- Text classification with embeddings
- K-means clustering for text/image embeddings
- Scene detection using PySceneDetect
- Video frame extraction and analysis

### 7. Key Management & Encryption
Work with binary keys for encryption or DRM.

**Files:**
- `key.bin` - Example binary key file

### 8. Video & Audio File Handling
Work with various formats: `.mp4`, `.mov`, `.h264`, `.ts`, `.yuv`, `.rgb`, and more.

**Files:**
- Sample files: `big_buck_bunny.mp4`, `big_buck_bunny_720p_h264.mov`, etc.
- Output files: `output.rgb`, `output.yuv`, `tanpura_output.wav`, `tanpura_output_resampled.wav`

## Requirements

### Installation
Install all dependencies using the requirements file:
```bash
pip install -r requirements.txt
```

### Python Dependencies
The project uses the following main libraries:
- **NumPy** - Numerical computing and array operations
- **SoundDevice** - Audio I/O and playback
- **SciPy** - Signal processing and scientific computing
- **Pillow (PIL)** - Image processing and manipulation
- **PyTorch** - Deep learning framework
- **Transformers** - Hugging Face transformers for NLP/Vision AI
- **Sentence-Transformers** - Text embedding models
- **Scikit-learn** - Machine learning utilities
- **Matplotlib** - Data visualization and plotting
- **Requests** - HTTP requests for web APIs
- **OpenCV-Python** - Computer vision and video processing
- **PySceneDetect** - Video scene detection and analysis

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

### Video Metadata with AI
```bash
# Start Jupyter for AI labs
jupyter notebook "Video Metadata with AI Lecture/"

# Run individual notebooks for:
# - Text similarity and clustering
# - Named Entity Recognition  
# - Image classification with ViT
# - Scene detection and video analysis
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
