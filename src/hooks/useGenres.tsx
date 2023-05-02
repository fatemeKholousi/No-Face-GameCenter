import React, { useEffect, useState } from "react";
import { IFetchedGameList } from "../interfaces/IFetchedGameList";
import apiClient, { CanceledError } from "../services/api-client";

function useGenre() {
  const [genresReult, setGenreReult] = useState<any>();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get("/genres", { signal: controller.signal })
      .then((response) => {
        setGenreReult(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setIsLoading(false);
      });
    return () => controller.abort();
  }, []);

  return { genresReult, error, isLoading };
}

export default useGenre;
