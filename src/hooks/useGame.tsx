import { IFetchedGameList } from "../interfaces/IFetchedGameList";
import { IFetchedGenre } from "../interfaces/IFetchedGenreList";
import useData from "./useData";

function useGame(
  selectedGenre: IFetchedGenre | null,
  selectedPlatformId: Number | null
) {
  return useData<IFetchedGameList>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        parent_platforms: selectedPlatformId,
      },
    },
    [selectedGenre?.id, selectedPlatformId]
  );
}

export default useGame;
