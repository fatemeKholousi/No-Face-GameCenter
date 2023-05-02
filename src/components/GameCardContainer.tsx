import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

function GameCardContainer({ children }: { children: ReactNode }) {
  return (
    <Box
      height="300px"
      width="300px"
      maxW="sm"
      borderRadius="1rem"
      overflow="hidden"
    >
      {children}
    </Box>
  );
}

export default GameCardContainer;
