import useGenre from "./useGenre";

const useFindGenre = (id: number | null) => {
  const { data: genres } = useGenre();
  return genres?.results.find((genre) => genre.id === id);
};

export default useFindGenre;
