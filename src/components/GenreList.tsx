import React from "react";
import useGenre from "../hooks/useGenres";
import { Text, HStack, List, ListItem, Image } from "@chakra-ui/react";
import { getCroppedImageUrl } from "../assets/getCroppedImageUrl";

function GenreList() {
  const { data, error, isLoading } = useGenre();
  return (
    <List>
      {data?.map((genre) => (
        <ListItem key={genre.id} py=".25rem">
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              borderRadius=".5rem"
              boxSize="32px"
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
