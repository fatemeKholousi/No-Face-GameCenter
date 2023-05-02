import React from "react";
import useGenre from "../hooks/useGenres";
import { Box } from "@chakra-ui/react";

function GenreList() {
  const { genresReult, error, isLoading } = useGenre();
  return (
    <Box>
      <ul>
        {genresReult?.map((genre: { name: string }) => (
          <li>{genre.name}</li>
        ))}
      </ul>
    </Box>
  );
}

export default GenreList;
