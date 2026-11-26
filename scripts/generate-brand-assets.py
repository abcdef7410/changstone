"""Render the site's typographic brand assets. Requires Pillow and Noto Sans CJK."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public/images/brand"
OUT.mkdir(parents=True, exist_ok=True)
FONT = "/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc"
BOLD = "/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc"

def font(size, bold=False):
    return ImageFont.truetype(BOLD if bold else FONT, size, index=3)

mark = Image.new("RGB", (512, 512), "#003b98")
draw = ImageDraw.Draw(mark)
draw.text((256, 246), "常", font=font(360, True), fill="white", anchor="mm")
mark.save(OUT / "mark.png", optimize=True)
mark.resize((180, 180), Image.Resampling.LANCZOS).save(OUT / "apple-touch-icon.png", optimize=True)
mark.convert("RGBA").save(ROOT / "app/favicon.ico", sizes=[(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)])

cover = Image.new("RGB", (1200, 630), "#003b98")
draw = ImageDraw.Draw(cover)
draw.rectangle((0, 568, 1200, 630), fill="#0757c2")
draw.rounded_rectangle((70, 64, 150, 144), radius=15, fill="white")
draw.text((110, 101), "常", font=font(56, True), fill="#003b98", anchor="mm")
draw.text((174, 72), "CHANGSTONE", font=font(34, True), fill="white")
draw.text((70, 190), "常石工程科技", font=font(82, True), fill="white")
draw.text((74, 323), "土木工程・排水改善・防潮石膏磚", font=font(40), fill="white")
draw.text((74, 414), "土木技師背景，結合現場施工經驗。", font=font(30), fill="#dbeafe")
draw.text((74, 578), "changstone.vercel.app   |   0988-157-517", font=font(23), fill="white")
cover.save(OUT / "social-cover.png", optimize=True)
