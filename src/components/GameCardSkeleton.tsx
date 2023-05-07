import {
  Card,
  CardBody,
  CardHeader,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import React from "react";

function GameCardSkeleton() {
  return (
    <Card height="100%">
      <CardHeader>
        <Skeleton borderRadius=".5rem" h="11.25rem"></Skeleton>
      </CardHeader>
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}

export default GameCardSkeleton;
