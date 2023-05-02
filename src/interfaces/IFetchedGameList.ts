export interface IFetchedGameList {
  platforms:{platform: { name: string; slug: string; }}[];
  background_image: string;
  id: number;
  name:string;
  rating:string;
  metacritic:number;
  }[]