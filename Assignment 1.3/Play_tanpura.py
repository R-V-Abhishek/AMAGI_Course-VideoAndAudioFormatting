import numpy as np
import sounddevice as sd
from scipy.signal import butter, lfilter

# Parameters
duration = 5.0
sampling_rate = 44100
volume = 0.3  # Reduced to prevent clipping

# Step 1: Generate white noise
t = np.linspace(0, duration, int(sampling_rate * duration), endpoint=False)
noise = np.random.normal(0, 1, len(t))

# Step 2: Define a band-pass filter
def bandpass_filter(data, lowcut, highcut, fs, order=4):
    nyquist = fs / 2
    low = lowcut / nyquist
    high = highcut / nyquist
    b, a = butter(order, [low, high], btype='band')
    return lfilter(b, a, data)

# Step 3: Filter the noise around 220 Hz and 440 Hz
filtered_220 = bandpass_filter(noise, 210, 230, sampling_rate)
filtered_440 = bandpass_filter(noise, 430, 450, sampling_rate)

# Step 4: Mix and apply a fade-out envelope
mix = (filtered_220 + filtered_440) / 2

# Normalize the signal to prevent clipping
max_amplitude = np.max(np.abs(mix))
if max_amplitude > 0:
    mix = mix / max_amplitude * 0.8  # Scale to 80% of max to leave headroom


output = volume * mix

# Ensure output is within valid range [-1, 1]
output = np.clip(output, -1.0, 1.0)

sd.play(output, samplerate=sampling_rate)
sd.wait()
