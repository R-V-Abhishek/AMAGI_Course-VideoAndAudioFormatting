import numpy as np
from PIL import Image
from collections import Counter
import math


width, height = 256, 256
gray_buffer = np.random.randint(0, 256, size=(height, width), dtype=np.uint8)


#Image.fromarray(gray_buffer).save("gray_noise.png")

#image = Image.open(r"D:\Pictures\Wallpapers\Picsart_24-12-22_13-44-13-417.jpg").convert("L")
#gray_buffer = np.array(image)
flat_pixels = gray_buffer.flatten()
pixel_counts = Counter(flat_pixels)
total_pixels = gray_buffer.size


probabilities = [count / total_pixels for count in pixel_counts.values()]


entropy = -sum(p * math.log2(p) for p in probabilities)
print(f"Entropy of image: {entropy:.4f} bits")
