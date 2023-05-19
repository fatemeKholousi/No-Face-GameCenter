import platformsListData from "../data/platformsListData";

function usePlatforms() {
  return { data: platformsListData, isLoading: false, error: null };
}

export default usePlatforms;
