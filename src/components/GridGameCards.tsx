import { HStack, Text, Flex } from "@chakra-ui/react";
import React from "react";
import GameCard from "./GameCard";
import useGame from "../hooks/useGame";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { getCroppedImageUrl } from "../assets/getCroppedImageUrl";
import { IGameQuery } from "../interfaces/IGameQuery";

interface IGridGameCardsProps {
  gameQuery: IGameQuery;
}

const GridGameCards: React.FC<IGridGameCardsProps> = ({ gameQuery }) => {
  const {
    data: cardsResult,
    error,
    isLoading,
  } = useGame(
    gameQuery?.genre,
    gameQuery?.platform?.id || null,
    gameQuery?.order?.key,
    gameQuery?.searchText
  );

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) {
    return (
      <Text w="100%" textAlign="center">
        {error?.message}
      </Text>
    );
  }

  return (
    <Flex direction="column" w="100%" marginBottom="2rem">
      <HStack
        justifyContent={{ base: "center", sm: "start" }}
        wrap="wrap"
        gap={3}
      >
        {isLoading &&
          skeletons.map((skeleton, index: number) => (
            <GameCardContainer key={index}>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {cardsResult?.results?.map((game) => (
          <GameCardContainer key={game?.id}>
            <GameCard
              gameCover={getCroppedImageUrl(game.background_image)}
              supportedServices={game.platforms}
              title={game.name}
              score={game.metacritic}
            />
          </GameCardContainer>
        ))}
      </HStack>
    </Flex>
  );
};

export default GridGameCards;
