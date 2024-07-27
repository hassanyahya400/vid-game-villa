import axios from "axios";

export interface FetchDataResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

export default axios.create({
  baseURL: "https://rawg-proxy.onrender.com",
  // params: {
  //   key: "7f76d57da35345929fdcfce91ad381ca",
  // },
});
