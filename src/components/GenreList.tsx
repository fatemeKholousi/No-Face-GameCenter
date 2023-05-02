import React from "react";
import useGenre from "../hooks/useGenres";
import { Box } from "@chakra-ui/react";

function GenreList() {
  const { data, error, isLoading } = useGenre();
  return (
    <Box>
      <ul>
        {data?.map((genre: { name: string }) => (
          <li>{genre.name}</li>
        ))}
      </ul>
    </Box>
  );
}

export default GenreList;
