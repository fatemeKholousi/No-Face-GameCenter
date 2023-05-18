import React, { useState } from "react";
import SearchInput from "../components/SearchInput";
import SwitchMode from "../components/SwitchMode";
import Icon from "../assets/images/icon.png";
import { Box, Flex, HStack, Image } from "@chakra-ui/react";
import GridGameCards from "../components/GridGameCards";
import GenreList from "../components/GenreList";
import { IFetchedGenre } from "../interfaces/IFetchedGenreList";
import PlatformSelector from "../components/PlatformSelector";
import { IGameQuery } from "../interfaces/IGameQuery";

function Dashboard() {
  const [gameQuery, setGameQuery] = useState<IGameQuery>({} as IGameQuery);

  return (
    <>
      <HStack>
        <Image src={Icon} width={50} />
        <SearchInput />
        <SwitchMode />
      </HStack>
      <Flex mt="1rem" flexDir={{ base: "column-reverse", sm: "row" }}>
        <GenreList
          onSelectedGenre={(selectedGenre) =>
            setGameQuery({ ...gameQuery, genre: selectedGenre })
          }
        />
        <Flex direction="column" pl={32}>
          <Box pb={4}>
            <PlatformSelector
              onSelectedPlatformId={(selectedPlatformId) =>
                setGameQuery({ ...gameQuery, platform: selectedPlatformId })
              }
            />
          </Box>
          <GridGameCards
            selectedGenre={gameQuery?.genre}
            selectedPlatform={gameQuery?.platform}
          />
        </Flex>
      </Flex>
    </>
  );
}

export default Dashboard;
