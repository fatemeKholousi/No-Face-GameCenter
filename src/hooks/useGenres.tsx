import { IFetchedGenre } from "../interfaces/IFetchedGenreList";
import useData from "./useData";

function useGenre() {
  return useData<IFetchedGenre>("/genres");
}

export default useGenre;
