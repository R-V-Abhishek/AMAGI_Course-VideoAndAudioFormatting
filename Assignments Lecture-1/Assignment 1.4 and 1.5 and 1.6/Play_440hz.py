import numpy as np
import sounddevice as sd

# Parameters
frequency = 440       # Hz (A4)
duration = 2.0        # seconds
sampling_rate = 44100 # Hz (CD-quality audio)

# Generate time array
t = np.linspace(0, duration, int(sampling_rate * duration), endpoint=False)

# Generate sine wave
wave = 0.5 * np.sin(2 * np.pi * frequency * t)  # amplitude scaled to 0.5

# Play the sound
sd.play(wave, samplerate=sampling_rate)
sd.wait()
