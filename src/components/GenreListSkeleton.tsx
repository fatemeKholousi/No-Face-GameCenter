import { Grid, Skeleton, SkeletonText, Stack } from "@chakra-ui/react";
import React from "react";

function GenreListSkeleton() {
  const skeletons = Array.from({ length: 15 }, (value, index) => index);

  return (
    <Stack mx="1rem" gap=".25rem">
      {skeletons.map((index) => (
        <Grid templateColumns="1fr 3.5fr" key={index}>
          <Skeleton borderRadius=".5rem" boxSize="32px" mr={4}></Skeleton>
          <SkeletonText noOfLines={1} skeletonHeight="6" mt="1" />
        </Grid>
      ))}
    </Stack>
  );
}

export default GenreListSkeleton;
