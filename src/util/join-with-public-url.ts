export function joinWithPublicUrl(url?: string) {
  return `${process.env.PUBLIC_URL}/${url || ''}`;
}
