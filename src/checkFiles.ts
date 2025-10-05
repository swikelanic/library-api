import fs from 'fs';
import path from 'path';

const srcDir = path.join(__dirname);

function listFiles(dir: string) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  items.forEach(item => {
    const fullPath = path.join(dir, item.name);
    console.log(fullPath);
    if (item.isDirectory()) {
      listFiles(fullPath);
    }
  });
}

listFiles(srcDir);
