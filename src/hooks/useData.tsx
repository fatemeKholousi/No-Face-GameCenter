import apiClient from "../services/api-client";
import { AxiosRequestConfig } from "axios";
import { useQuery } from "@tanstack/react-query";

function useData<T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  dependencies?: any
) {
  const { order, searchText, selectedGenre, selectedPlatformId } = dependencies;
  const { data, isLoading, error } = useQuery<T, Error>({
    queryKey: [
      { order, searchText, selectedGenreId: selectedGenre, selectedPlatformId },
    ],
    queryFn: () =>
      apiClient
        .get(endpoint, { ...requestConfig })
        .then((response) => response.data),
  });

  return { data, error, isLoading };
}

export default useData;
