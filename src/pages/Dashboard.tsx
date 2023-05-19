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
      <HStack px={4}>
        <Image src={Icon} width={50} />
        <SearchInput
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
        <SwitchMode />
      </HStack>

      <Flex px={4} mt="1rem" flexDir={{ base: "column-reverse", sm: "row" }}>
        <GenreList
          onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
        />

        <Flex direction="column" pl={{ base: 0, sm: 32 }}>
          <Heading mb="1rem">
            {gameQuery.platform?.name ?? ""} {gameQuery.genre?.name ?? ""} Games
          </Heading>

          <Flex
            pb={4}
            flexDir={{ base: "column-reverse", sm: "row" }}
            gap={{ base: "1rem" }}
          >
            <Box>
              <PlatformSelector
                onSelectedPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />
            </Box>
            <Box>
              <SortSelector
                sortOrder={gameQuery?.order?.label}
                onSelectedOrder={(order) =>
                  setGameQuery({ ...gameQuery, order })
                }
              />
            </Box>
          </Flex>
          <GridGameCards gameQuery={gameQuery} />
        </Flex>
      </Flex>
    </>
  );
}

export default Dashboard;
