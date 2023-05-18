import { IFetchedGameList } from "../interfaces/IFetchedGameList";
import { IFetchedGenre } from "../interfaces/IFetchedGenreList";
import useData from "./useData";

function useGame(
  selectedGenre: IFetchedGenre | null,
  selectedPlatformId: number | null,
  order: string | null
) {
  return useData<IFetchedGameList>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        parent_platforms: selectedPlatformId,
        ordering: order,
      },
    },
    [selectedGenre?.id, selectedPlatformId, order]
  );
}

export default useGame;
