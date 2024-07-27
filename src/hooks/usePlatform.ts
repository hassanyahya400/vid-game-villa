import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { platforms } from "../data/platforms";
import { FetchDataResponse } from "../services/apiClient";
import createService from "../services/restService";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () => {
  const platformService = createService<Platform>("/platforms/lists/parents");

  return useQuery<FetchDataResponse<Platform>>({
    queryKey: ["platforms"],
    queryFn: platformService.getAll,
    initialData: platforms,
    staleTime: ms("24h"),
  });
};

export default usePlatform;
