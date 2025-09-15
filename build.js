import fs from 'node:fs';
import path from 'node:path';

const outDir = 'dist';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
const outFile = path.join(outDir, 'index.txt');
fs.writeFileSync(outFile, 'Build successful at ' + new Date().toISOString());
console.log('Built', outFile);
