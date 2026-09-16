import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const publicDir = path.resolve('public');
const files = fs.readdirSync(publicDir);

for (const file of files) {
  if (file.endsWith('.png')) {
    const base = file.replace('.png', '');
    const inputPath = path.join(publicDir, file);
    const outputPath = path.join(publicDir, `${base}.webp`);
    console.log(`Converting ${file} -> ${base}.webp...`);
    try {
      execSync(`npx sharp-cli -i "${inputPath}" -o "${outputPath}" -f webp -q 85`);
      
      // Also compress the original PNG in-place with sharp-cli for fallback compatibility
      const compressedPngPath = path.join(publicDir, `${base}-opt.png`);
      execSync(`npx sharp-cli -i "${inputPath}" -o "${compressedPngPath}" -f png --effort 7`);
      if (fs.existsSync(compressedPngPath)) {
        fs.unlinkSync(inputPath);
        fs.renameSync(compressedPngPath, inputPath);
      }
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }
}

console.log('Optimization complete!');
