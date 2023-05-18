import { IPlatform } from "../interfaces/IPlatform";
import useData from "./useData";

function usePlatforms() {
  return useData<IPlatform>("/platforms/lists/parents");
}

export default usePlatforms;
