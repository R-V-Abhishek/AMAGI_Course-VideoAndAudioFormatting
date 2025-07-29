import numpy as np
from PIL import Image

# Image size
width, height = 1280, 720

# Define 7 VIBGYOR colors in RGB
colors = {
    "Violet":   (148, 0, 211),
    "Indigo":   (75, 0, 130),
    "Blue":     (0, 0, 255),
    "Green":    (0, 255, 0),
    "Yellow":   (255, 255, 0),
    "Orange":   (255, 127, 0),
    "Red":      (255, 0, 0)
}

# Calculate height for each stripe
stripe_height = height // 7

# Create an empty image array
img_array = np.zeros((height, width, 3), dtype=np.uint8)

# Fill each stripe
for i, color in enumerate(colors.values()):
    start_y = i * stripe_height
    end_y = (i + 1) * stripe_height if i < 6 else height  # ensure last stripe goes to end
    img_array[start_y:end_y, :] = color

# Convert to image and save
img = Image.fromarray(img_array, 'RGB')
img.save("vibgyor_1280x720.png")
img.show()
