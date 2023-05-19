import genresList from "../data/genresListData";

function useGenre() {
  return { data: genresList, isLoading: false, error: null };
}

export default useGenre;
