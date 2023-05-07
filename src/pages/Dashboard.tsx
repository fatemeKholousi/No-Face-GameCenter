import React, { useState } from "react";
import SearchInput from "../components/SearchInput";
import SwitchMode from "../components/SwitchMode";
import Icon from "../assets/images/icon.png";
import { Flex, HStack, Image } from "@chakra-ui/react";
import GridGameCards from "../components/GridGameCards";
import GenreList from "../components/GenreList";
import { IFetchedGenre } from "../interfaces/IFetchedGenreList";
function Dashboard() {
  const [selectedGenre, setSelectedGenre] = useState<IFetchedGenre | null>(
    null
  );

  return (
    <>
      <HStack>
        <Image src={Icon} width={50} />
        <SearchInput />
        <SwitchMode />
      </HStack>
      <Flex mt="1rem" flexDir={{ base: "column-reverse", sm: "row" }}>
        <GenreList
          onSelectedGenre={(
            selectedGenre: React.SetStateAction<IFetchedGenre | null>
          ) => setSelectedGenre(selectedGenre)}
        />
        <GridGameCards selectedGenre={selectedGenre} />
      </Flex>
    </>
  );
}

export default Dashboard;
