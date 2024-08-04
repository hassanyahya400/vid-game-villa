import { AxiosRequestConfig } from "axios";
import apiClient, { FetchDataResponse } from "./apiClient";

class RestService<T> {
  endpoint: string;
  params = {};

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async (config?: AxiosRequestConfig) => {
    const res = await apiClient.get<FetchDataResponse<T>>(
      this.endpoint,
      config,
    );
    return res.data;
  };

  getOne = async (slug: string, config?: AxiosRequestConfig) => {
    const res = await apiClient.get<T>(
      `${this.endpoint}/${slug}`,
      config,
    );
    return res.data;
  };
}

const createService = <T>(endpoint: string) => new RestService<T>(endpoint);
export default createService;