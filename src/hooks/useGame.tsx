import React, { useEffect, useState } from "react";
import { IFetchedGameList } from "../interfaces/IFetchedGameList";
import apiClient, { CanceledError } from "../services/api-client";

function useGame() {
  const [gamesReult, setGamesReult] = useState<IFetchedGameList[]>();
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get("/games", { signal: controller.signal })
      .then((response) => {
        setGamesReult(response.data.results);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });
    return () => controller.abort();
  }, []);

  return { gamesReult, error };
}

export default useGame;
