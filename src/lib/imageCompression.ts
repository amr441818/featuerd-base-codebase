/**
 * Compresses an image file by sending it to the server-side API
 * @param file - The image file to compress
 * @returns A promise that resolves to the compressed image as a File object
 */
export async function compressImage(file: File): Promise<File> {
  try {
    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch('/apis/compress-image', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to compress image');
    }

    const blob = await response.blob();

    // Create a new File from the compressed blob
    // Use .webp extension since the API converts to WebP format
    const compressedFileName = file.name.replace(/\.[^/.]+$/, '.webp');
    return new File([blob], compressedFileName, { type: 'image/webp' });
  } catch (error) {
    console.error('Error compressing image:', error);
    // If compression fails, return the original file
    return file;
  }
}

/**
 * Compresses multiple image files
 * @param files - Array of image files to compress
 * @returns A promise that resolves to an array of compressed images
 */
export async function compressImages(files: File[]): Promise<File[]> {
  return Promise.all(files.map((file) => compressImage(file)));
}
