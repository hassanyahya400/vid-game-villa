import useGenre from "./useGenre";

const useFindGenre = (id: number | undefined) => {
  const { data: genres } = useGenre();
  return genres?.results.find((genre) => genre.id === id);
};

export default useFindGenre;
