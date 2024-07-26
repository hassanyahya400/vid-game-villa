import { genres } from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import { FetchDataResponse } from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () => {
  const fetchGenres = () =>
    apiClient.get<FetchDataResponse<Genre>>("/genres").then((res) => res.data);
  // return { data: genres, isLoading: false, error: null };

  return useQuery<FetchDataResponse<Genre>>({
    queryKey: ["genres"],
    queryFn: fetchGenres,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genres.length, results: genres },
  });
};

export default useGenre;
