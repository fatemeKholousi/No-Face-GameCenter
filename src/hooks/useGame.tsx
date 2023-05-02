import { IFetchedGameList } from "../interfaces/IFetchedGameList";
import useData from "./useData";

function useGame() {
  return useData<IFetchedGameList>("/games");
}

export default useGame;
