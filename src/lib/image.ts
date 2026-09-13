/** Maps a JPG/PNG path under public/ to its pre-generated WebP sibling. */
export function webpSrc(src: string) {
  return src.replace(/\.(jpe?g|png)$/i, ".webp");
}
