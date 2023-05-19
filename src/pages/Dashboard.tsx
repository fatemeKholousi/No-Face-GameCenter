import React, { useState } from "react";
import SearchInput from "../components/SearchInput";
import SwitchMode from "../components/SwitchMode";
import Icon from "../assets/images/icon.png";
import { Box, Flex, HStack, Heading, Image } from "@chakra-ui/react";
import GridGameCards from "../components/GridGameCards";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import { IGameQuery } from "../interfaces/IGameQuery";
import SortSelector from "../components/SortSelector";

function Dashboard() {
  const [gameQuery, setGameQuery] = useState<IGameQuery>({} as IGameQuery);

  return (
    <>
      <HStack>
        <Image src={Icon} width={50} />
        <SearchInput
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
        <SwitchMode />
      </HStack>

      <Flex mt="1rem" flexDir={{ base: "column-reverse", sm: "row" }}>
        <GenreList
          onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
        />

        <Flex direction="column" pl={32}>
          <Heading mb="1rem">
            {gameQuery.platform?.name ?? ""} {gameQuery.genre?.name ?? ""} Games
          </Heading>

          <Flex pb={4}>
            <Box marginRight={2}>
              <PlatformSelector
                onSelectedPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />
            </Box>
            <SortSelector
              sortOrder={gameQuery?.order?.label}
              onSelectedOrder={(order) => setGameQuery({ ...gameQuery, order })}
            />
          </Flex>
          <GridGameCards gameQuery={gameQuery} />
        </Flex>
      </Flex>
    </>
  );
}

export default Dashboard;
