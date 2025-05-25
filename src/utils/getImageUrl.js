export function GetImageUrl(name, archiveType) {
  return new URL(`../assets/img/${name}.${archiveType}`, import.meta.url).href;
}
