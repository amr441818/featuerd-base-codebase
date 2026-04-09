/**
 * Draws the Servicly logo as a watermark in the top-right corner of an image
 * and returns a new File with the watermark baked in.
 */

const LOGO_SVG_URL = '/logo-watermark.svg'; // served from /public
const PADDING = 12; // px from edge
const WATERMARK_WIDTH = 90; // px rendered width on the image

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

export async function addLogoWatermark(file: File): Promise<File> {
  try {
    // Load the original image
    const objectUrl = URL.createObjectURL(file);
    const img = await loadImage(objectUrl);
    URL.revokeObjectURL(objectUrl);

    // Load the logo SVG
    const logo = await loadImage(LOGO_SVG_URL);

    // Set up canvas
    const canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) return file;

    // Draw the original image
    ctx.drawImage(img, 0, 0);

    // Calculate watermark dimensions maintaining aspect ratio
    const logoAspect = logo.naturalWidth / logo.naturalHeight;
    const wX = Math.round(canvas.width * (WATERMARK_WIDTH / 800)); // scale relative to image width (base 800px)
    const scaledWidth = Math.max(60, Math.min(wX, WATERMARK_WIDTH * 2));
    const scaledHeight = scaledWidth / logoAspect;

    // Position: top-right with padding
    const x = canvas.width - scaledWidth - PADDING;
    const y = PADDING;

    // Draw a subtle white pill background for visibility
    const padH = 6;
    const padV = 4;
    ctx.save();
    ctx.globalAlpha = 0.65;
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.roundRect(x - padH, y - padV, scaledWidth + padH * 2, scaledHeight + padV * 2, 6);
    ctx.fill();
    ctx.restore();

    // Draw the logo
    ctx.save();
    ctx.globalAlpha = 0.9;
    ctx.drawImage(logo, x, y, scaledWidth, scaledHeight);
    ctx.restore();

    // Export as blob → File
    const blob = await new Promise<Blob>((resolve) =>
      canvas.toBlob((b) => resolve(b!), file.type || 'image/jpeg', 0.92),
    );

    return new File([blob], file.name, { type: blob.type });
  } catch (err) {
    console.error('Watermark error:', err);
    return file; // fall back to original if anything fails
  }
}

export async function addLogoWatermarkToAll(files: File[]): Promise<File[]> {
  return Promise.all(files.map(addLogoWatermark));
}
