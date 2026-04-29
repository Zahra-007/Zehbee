export type ProcessOptions = {
    format: 'image/jpeg' | 'image/png' | 'image/webp';
    quality: number; // 0.0 to 1.0
    width?: number;
    height?: number;
    maintainAspectRatio?: boolean;
};

export type ProcessResult = {
    blob: Blob;
    objectUrl: string;
    width: number;
    height: number;
    sizeBytes: number;
};

export async function processImage(file: File, options: ProcessOptions): Promise<ProcessResult> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                let targetWidth = img.width;
                let targetHeight = img.height;

                // Handle resizing if width/height are provided
                if (options.width || options.height) {
                    if (options.maintainAspectRatio) {
                        const ratioW = options.width ? (options.width / img.width) : 1;
                        const ratioH = options.height ? (options.height / img.height) : 1;
                        // Use the smaller ratio to ensure it fits within the provided constraints
                        const ratio = Math.min(ratioW, ratioH);
                        targetWidth = Math.round(img.width * ratio);
                        targetHeight = Math.round(img.height * ratio);
                    } else {
                        if (options.width) targetWidth = options.width;
                        if (options.height) targetHeight = options.height;
                    }
                }

                const canvas = document.createElement('canvas');
                canvas.width = targetWidth;
                canvas.height = targetHeight;
                const ctx = canvas.getContext('2d');
                if (!ctx) return reject(new Error('Failed to get canvas context'));
                
                // For JPEG output, draw a white background first to avoid transparent pixels turning black
                if (options.format === 'image/jpeg') {
                    ctx.fillStyle = '#FFFFFF';
                    ctx.fillRect(0, 0, targetWidth, targetHeight);
                }
                
                ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

                canvas.toBlob((blob) => {
                    if (blob) {
                        resolve({
                            blob,
                            objectUrl: URL.createObjectURL(blob),
                            width: targetWidth,
                            height: targetHeight,
                            sizeBytes: blob.size
                        });
                    } else {
                        reject(new Error('Canvas toBlob failed'));
                    }
                }, options.format, options.quality);
            };
            img.onerror = () => reject(new Error('Failed to load image'));
            img.src = e.target?.result as string;
        };
        reader.onerror = () => reject(new Error('Failed to read file'));
        reader.readAsDataURL(file);
    });
}

export function generateSeoFilename(originalName: string, targetFormat: string, actionPrefix: string = ''): string {
    // Remove extension
    const nameWithoutExt = originalName.substring(0, originalName.lastIndexOf('.')) || originalName;
    // Kebab case
    const kebabName = nameWithoutExt
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
    
    let ext = targetFormat.split('/')[1] || 'jpg';
    if (ext === 'jpeg') ext = 'jpg';

    const prefix = actionPrefix ? `${actionPrefix}-` : '';
    
    return `${prefix}${kebabName || 'image'}.${ext}`;
}

export function generateAltTextSuggestion(filename: string): string {
    // Basic SEO Helper logic: converts a kebab-case or underscore name into Title Case words
    const nameWithoutExt = filename.substring(0, filename.lastIndexOf('.')) || filename;
    return nameWithoutExt
        .replace(/[^a-zA-Z0-9]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .replace(/\b\w/g, l => l.toUpperCase());
}

export function formatBytes(bytes: number, decimals = 2) {
    if (!+bytes) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}
