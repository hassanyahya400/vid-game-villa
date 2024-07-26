import { AxiosRequestConfig } from "axios";
import apiClient, { FetchDataResponse } from "./apiClient";

class RestService<T> {
  endpoint: string;
  params = {};

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) => {
    return apiClient
      .get<FetchDataResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

const createService = <T>(endpoint: string) => new RestService<T>(endpoint);
export default createService;
