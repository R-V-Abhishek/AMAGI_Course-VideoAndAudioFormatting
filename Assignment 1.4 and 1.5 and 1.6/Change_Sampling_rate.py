import scipy.io.wavfile as wav
import scipy.signal
import sounddevice as sd
import numpy as np

# Load original file
sr_original, data = wav.read(r"D:\Coding\AMAGI Course\tanpura_output.wav")  # supports only WAV

# Resample to 16kHz
target_sr = 16000
number_of_samples = round(len(data) * float(target_sr) / sr_original)
data_resampled = scipy.signal.resample(data, number_of_samples)

# Play resampled audio
sd.play(data_resampled.astype('float32'), samplerate=target_sr)
sd.wait()

wav.write("tanpura_output_resampled.wav", target_sr, data_resampled.astype(np.int16))  # Save resampled audio