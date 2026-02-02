'use client';

import { useEffect, useState } from 'react';

function getDominantColor(img: HTMLImageElement) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) return 'rgb(0,0,0)';

  const w = 32,
    h = 32;
  canvas.width = w;
  canvas.height = h;

  ctx.drawImage(img, 0, 0, w, h);
  const { data } = ctx.getImageData(0, 0, w, h);

  let r = 0,
    g = 0,
    b = 0,
    count = 0;

  for (let i = 0; i < data.length; i += 4) {
    const alpha = data[i + 3];
    if (alpha < 128) continue;

    r += data[i];
    g += data[i + 1];
    b += data[i + 2];
    count++;
  }

  if (!count) return 'rgb(0,0,0)';
  r = Math.round(r / count);
  g = Math.round(g / count);
  b = Math.round(b / count);

  return `rgb(${r},${g},${b})`;
}

export function useDominantBg(imageUrl: string) {
  const [bg, setBg] = useState('rgb(17,17,17)');

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous'; // مهم لو الصورة من CDN
    img.src = imageUrl;

    img.onload = () => setBg(getDominantColor(img));
    img.onerror = () => setBg('rgb(17,17,17)');
  }, [imageUrl]);

  return bg;
}
