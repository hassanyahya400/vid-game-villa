import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { data, isLoading, error } = useGenre();
  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
