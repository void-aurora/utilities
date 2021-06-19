import pth from 'path';
import fse from 'fs-extra';
import crypto from 'crypto';

async function generateDataForClampLoop01() {
  const length = 2000;
  const arrayInt = new Int16Array(length);
  crypto.webcrypto.getRandomValues(arrayInt);
  const arrayDecimal = new Int16Array(length);
  crypto.webcrypto.getRandomValues(arrayDecimal);
  const arrayFloat = Array.from({ length }, (_, i) =>
    parseFloat(`${arrayInt[i]}.${arrayDecimal[i]}`),
  );
  await fse.writeJSON(
    pth.resolve(__dirname, 'bench-clamp-loop-data.json'),
    arrayFloat,
    { spaces: '  ' },
  );
}

generateDataForClampLoop01().catch(console.error);
