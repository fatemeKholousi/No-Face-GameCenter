import { IFetchedGenreList } from "../interfaces/IFetchedGenreList";
import useData from "./useData";

function useGenre() {
  return useData<IFetchedGenreList>("/genres");
}

export default useGenre;
