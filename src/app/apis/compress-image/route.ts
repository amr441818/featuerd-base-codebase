import { NextRequest, NextResponse } from 'next/server';

import sharp from 'sharp';

/** Maximum dimension on the longest side (px). Portraits and landscapes both respect this cap. */
const MAX_DIMENSION = 1920;

/** WebP quality (1-100). 82 gives an excellent size/quality balance for photos. */
const WEBP_QUALITY = 82;

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('image');

    if (!file || !(file instanceof Blob)) {
      return NextResponse.json({ error: 'No image file provided' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    // Inspect the original image dimensions so we never upscale
    const meta = await sharp(buffer).metadata();

    console.log('[compress-image] ▶ START', {
      name: (file as File).name ?? 'unknown',
      format: meta.format,
      width: meta.width,
      height: meta.height,
      originalSizeKB: (buffer.length / 1024).toFixed(1) + ' KB',
    });
    const { width = 0, height = 0 } = meta;

    const needsResize = width > MAX_DIMENSION || height > MAX_DIMENSION;

    const compressed = await sharp(buffer)
      // Strip EXIF metadata to reduce file size and remove private data
      .withMetadata({ exif: {} })
      // Only downscale – never enlarge small images
      .resize(needsResize ? MAX_DIMENSION : undefined, needsResize ? MAX_DIMENSION : undefined, {
        fit: 'inside', // preserve aspect ratio, fit within the box
        withoutEnlargement: true,
      })
      .webp({
        quality: WEBP_QUALITY,
        effort: 4, // 0 (fastest) – 6 (smallest). 4 is a good middle ground.
        smartSubsample: true, // improves chroma quality at low bitrates
      })
      .toBuffer();

    const savedPct = (((buffer.length - compressed.length) / buffer.length) * 100).toFixed(1);
    console.log('[compress-image] ✅ DONE', {
      compressedSizeKB: (compressed.length / 1024).toFixed(1) + ' KB',
      originalSizeKB: (buffer.length / 1024).toFixed(1) + ' KB',
      savedPct: savedPct + '%',
    });

    return new NextResponse(new Uint8Array(compressed), {
      headers: {
        'Content-Type': 'image/webp',
        'Content-Length': compressed.length.toString(),
        'Cache-Control': 'no-store',
      },
    });
  } catch (error) {
    console.error('Image compression error:', error);
    return NextResponse.json({ error: 'Failed to compress image' }, { status: 500 });
  }
}
