import base64
import re
import os

svg_path = r'c:\Users\nihal\Desktop\Github\after-v\public\assets\crm-integrations.svg'
out_dir = r'c:\Users\nihal\Desktop\Github\after-v\temp_ident'
os.makedirs(out_dir, exist_ok=True)

with open(svg_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Match image definitions with their base64 content
# Format: <image id="image0_680_1448" ... xlink:href="data:image/png;base64,..."
images = re.findall(r'id="image(\d+)_[^"]*"[^>]*xlink:href="data:image/png;base64,([^"]+)"', content)

for idx, data in images:
    with open(os.path.join(out_dir, f'image{idx}.png'), 'wb') as f:
        f.write(base64.b64decode(data))
    print(f'Saved image{idx}.png')
