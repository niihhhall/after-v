import base64
import re
import os

svg_path = r'c:\Users\nihal\Desktop\Github\after-v\public\assets\crm-integrations.svg'
output_dir = r'c:\Users\nihal\Desktop\Github\after-v\temp_images'

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

with open(svg_path, 'r') as f:
    svg_content = f.read()

# Find all image tags with base64 content
matches = re.findall(r'id="(image\d+_[^"]+)"[^>]+xlink:href="data:image/png;base64,([^"]+)"', svg_content)

for img_id, b64_data in matches:
    img_path = os.path.join(output_dir, f'{img_id}.png')
    with open(img_path, 'wb') as f:
        f.write(base64.b64decode(b64_data))
    print(f'Saved {img_path}')
