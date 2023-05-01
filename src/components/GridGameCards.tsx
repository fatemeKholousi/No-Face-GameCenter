import { HStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import GameService from "../services/game-service";
import { IFetchedGameList } from "../interfaces/IFetchedGameList";
import GameCard from "./GameCard";

function GridGameCards() {
  const [cardsResult, setCardsResult] = useState<IFetchedGameList[]>();

  useEffect(() => {
    const gameCardsFetchedResult = async () => {
      const { request: gameList } = GameService("/games").getGameList();
      const { data } = await gameList;
      setCardsResult(data.results);
    };
    gameCardsFetchedResult();
  }, []);

  const getCroppedImageUrl = (url: string): string => {
    const gameSplittedUrl = url.split("games");
    return `${gameSplittedUrl[0]}crop/600/400/games${gameSplittedUrl[1]}`;
  };

  return (
    <HStack wrap="wrap" alignItems="justify-start" gap={3}>
      {cardsResult?.map((game) => (
        <>
          <GameCard
            gameCover={getCroppedImageUrl(game.background_image)}
            supportedServices={game.platforms}
            title={game.name}
            score={game.metacritic}
          />
        </>
      ))}
    </HStack>
  );
}

export default GridGameCards;
