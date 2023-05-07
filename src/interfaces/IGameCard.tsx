interface IGameCard {
  gameCover: string;
  supportedServices: {
    platform: {
      name: string;
      slug: string;
    };
  }[];
  title: string;
  score: number;
}
