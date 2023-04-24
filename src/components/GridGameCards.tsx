import { SimpleGrid } from "@chakra-ui/react";
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

  return (
    <SimpleGrid minChildWidth={"300px"} spacing={4} px={"2rem"}>
      {cardsResult?.map((game) => (
        <>
          <GameCard
            gameCover={game.background_image}
            supportedServices={game.platforms}
            title={game.name}
            playTime={game.playtime}
          />
        </>
      ))}
    </SimpleGrid>
  );
}

export default GridGameCards;
