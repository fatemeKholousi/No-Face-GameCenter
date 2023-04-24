import React from "react";
import {
  Image,
  Text,
  Card,
  CardBody,
  Heading,
  Badge,
  HStack,
} from "@chakra-ui/react";

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
            <HStack wrap={"wrap"}>
              {supportedServices.slice(0, 3).map((item, index) => (
                <>
                  <Text>{item.platform.name}</Text>
                  {2 !== index && <Text>+</Text>}
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
