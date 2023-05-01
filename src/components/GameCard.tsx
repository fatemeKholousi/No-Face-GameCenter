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
  playTime,
}: IGameCard) {
  return (
    <>
      <Card maxW="sm" borderRadius="1rem" variant={"filled"} overflow="hidden">
        <Image src={gameCover} alt="game cover" />
        <CardBody>
          <HStack mb={4} justifyContent={"space-between"}>
            <HStack wrap="wrap" alignItems="center">
              {supportedServices.slice(0, 3).map((item, index) => (
                <>
                  <PlatformIconsList platform={item.platform} />
                </>
              ))}
            </HStack>

            <Badge variant="outline" colorScheme="blue">
              {playTime}
            </Badge>
          </HStack>

          <Heading size="md">{title}</Heading>
        </CardBody>
      </Card>
    </>
  );
}

export default GameCard;
