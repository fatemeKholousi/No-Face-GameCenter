import React, { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";

function useData<T>(endpoint: string) {
  const [data, setData] = useState<T[]>();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get(endpoint, { signal: controller.signal })
      .then((response) => {
        setData(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setIsLoading(false);
      });
    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
}

export default useData;
