import React from "react";
import {
  Image,
  Card,
  CardBody,
  Heading,
  Badge,
  HStack,
} from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";

function GameCard({
  gameCover,
  supportedServices,
  title = "",
  score,
}: IGameCard) {
  return (
    <Card>
      <Image src={gameCover} alt="game cover" />
      <CardBody>
        <HStack mb={4} justifyContent={"space-between"}>
          <HStack wrap="wrap" alignItems="center">
            {supportedServices.slice(0, 3).map((item, index) => (
              <PlatformIconsList platform={item.platform} key={index} />
            ))}
          </HStack>

          <Badge
            variant="outline"
            colorScheme={score > 60 ? "green" : score > 40 ? "blue" : "yellow"}
            borderRadius=".25rem"
            px=".5rem"
            py=".1rem"
          >
            {score}
          </Badge>
        </HStack>

        <Heading size="md">{title}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
