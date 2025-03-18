const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [16, 32, 48, 64, 192, 512];
const publicDir = path.join(__dirname, '../public');

async function generateIcons() {
  const svgBuffer = fs.readFileSync(path.join(publicDir, 'logo.svg'));

  // Generate PNG files
  for (const size of sizes) {
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(path.join(publicDir, `logo${size}.png`));
    
    console.log(`Generated ${size}x${size} PNG`);
  }

  // Generate favicon.ico (contains multiple sizes)
  const favicon = await sharp(svgBuffer)
    .resize(32, 32)
    .toFormat('ico')
    .toFile(path.join(publicDir, 'favicon.ico'));

  console.log('Generated favicon.ico');

  // Rename specific files to match manifest requirements
  fs.renameSync(
    path.join(publicDir, 'logo192.png'),
    path.join(publicDir, 'logo192.png')
  );
  fs.renameSync(
    path.join(publicDir, 'logo512.png'),
    path.join(publicDir, 'logo512.png')
  );
}

generateIcons().catch(console.error); 