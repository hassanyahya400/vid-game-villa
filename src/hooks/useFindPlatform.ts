import usePlatform from "./usePlatform";

const useFindPlatform = (id: number | undefined) => {
  const { data: platforms } = usePlatform();
  return platforms?.results.find((platform) => platform.id === id);
};

export default useFindPlatform;
