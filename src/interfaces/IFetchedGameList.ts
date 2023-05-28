export interface IFetchedGameList {
  results:{
      platforms:{platform: { name: string; slug: string; }}[];
      background_image: string;
      id: number;
      name:string;
      rating:string;
      metacritic:number;
      }[]
  }