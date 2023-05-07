import { IFetchedGameList } from "../interfaces/IFetchedGameList";
import { IFetchedGenre } from "../interfaces/IFetchedGenreList";
import useData from "./useData";

function useGame(selectedGenre: IFetchedGenre | null) {
  return useData<IFetchedGameList>(
    "/games",
    {
      params: { genres: selectedGenre?.id },
    },
    [selectedGenre?.id]
  );
}

export default useGame;
