from PIL import Image
from collections import Counter, defaultdict
import heapq
import numpy as np


image = Image.open(r"D:\Pictures\Wallpapers\Picsart_24-12-22_13-44-13-417.jpg").convert("L")
pixels = np.array(image).flatten()


freq = Counter(pixels)

# 3. Build Huffman tree
heap = [[freq_val, [pixel_val, ""]] for pixel_val, freq_val in freq.items()]
heapq.heapify(heap)

while len(heap) > 1:
    lo = heapq.heappop(heap)
    hi = heapq.heappop(heap)
    for pair in lo[1:]: pair[1] = '0' + pair[1]
    for pair in hi[1:]: pair[1] = '1' + pair[1]
    heapq.heappush(heap, [lo[0] + hi[0]] + lo[1:] + hi[1:])

# 4. Extract final Huffman codes
huff_dict = {pixel: code for pixel, code in heap[0][1:]}

# 5. Encode image data
encoded_bits = ''.join(huff_dict[p] for p in pixels)

# 6. Evaluate compression
original_bits = len(pixels) * 8
compressed_bits = len(encoded_bits)
compression_ratio = original_bits / compressed_bits

print(f"Original bits:    {original_bits}")
print(f"Compressed bits:  {compressed_bits}")
print(f"Compression ratio: {compression_ratio:.2f}")
