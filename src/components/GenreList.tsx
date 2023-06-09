import React from "react";
import useGenre from "../hooks/useGenres";
import { Text, HStack, List, ListItem, Image } from "@chakra-ui/react";
import { getCroppedImageUrl } from "../assets/getCroppedImageUrl";
import GenreListSkeleton from "./GenreListSkeleton";
import { IFetchedGenre } from "../interfaces/IFetchedGenreList";

export interface IGenreListProps {
  onSelectedGenre: (genre: IFetchedGenre) => void;
}

const GenreList: React.FC<IGenreListProps> = ({ onSelectedGenre }) => {
  const { data, error, isLoading } = useGenre();
  // if (error) return;
  if (isLoading) return <GenreListSkeleton />;
  return (
    <List>
      {data?.map((genre) => (
        <ListItem
          key={genre.id}
          py=".25rem"
          px=".5rem"
          onClick={() => {
            onSelectedGenre(genre);
          }}
        >
          <HStack cursor="pointer">
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              borderRadius=".5rem"
              boxSize="32px"
            />
            <Text> {genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
