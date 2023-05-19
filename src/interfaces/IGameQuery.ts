import { IFetchedGenre } from "./IFetchedGenreList"

export interface IGameQuery{
    genre:IFetchedGenre | null
    platform:null | number
    order:{label:string,key:string},
    searchText:string
}