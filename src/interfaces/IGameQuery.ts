import { IFetchedGenre } from "./IFetchedGenreList"
import { IPlatform } from "./IPlatform"

export interface IGameQuery{
    genre:IFetchedGenre | null
    platform:IPlatform
    order:{label:string,key:string},
    searchText:string
}