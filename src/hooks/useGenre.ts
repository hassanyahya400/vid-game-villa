import useData from "./useData";

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}
export interface Genre {
  id: number;
  name: string;
}
const useGenre = () => useData<Genre>("/genres");

export default useGenre;