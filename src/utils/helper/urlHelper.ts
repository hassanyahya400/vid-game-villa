import noImagePlaceholder from "../../../public/no-image-placeholder-image.webp";

export const getQueryParamValue = (
  paramName: string,
  url: string,
): string | null => {
  const searchParams = new URLSearchParams(new URL(url).search);
  return searchParams.get(paramName);
};

export const getCroppedImageUrl = (url: string) => {
  if (!url) return noImagePlaceholder;
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};
