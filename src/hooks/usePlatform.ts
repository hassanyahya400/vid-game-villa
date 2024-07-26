import { useQuery } from "@tanstack/react-query";
import { platforms } from "../data/platforms";
import { FetchDataResponse } from "../services/apiClient";
import apiClient from "../services/apiClient";
import createService from "../services/restService";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () => {
  const platformService = createService<Platform>("/platforms/lists/parents");

  // return { data: platforms, isLoading: false, error: null };

  return useQuery<FetchDataResponse<Platform>>({
    queryKey: ["platforms"],
    queryFn: platformService.getAll,
    initialData: { count: platforms.length, results: platforms },
    staleTime: 24 * 60 * 60 * 1000,  
  });
};

export default usePlatform;
