import React from "react";
import {
  Image,
  Card,
  CardBody,
  Heading,
  Badge,
  HStack,
  useColorMode,
} from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";

function GameCard({
  gameCover,
  supportedServices,
  title = "",
  score,
}: IGameCard) {
  const { colorMode } = useColorMode();

  return (
    <Card
      h="300px"
      border={colorMode === "dark" ? "" : "1px"}
      borderColor="gray.200"
      borderRadius="0.5rem"
    >
      <Image src={gameCover} borderTopRadius=".5rem" />
      <CardBody>
        <HStack mb={4} justifyContent={"space-between"}>
          <HStack wrap="wrap" alignItems="center">
            {supportedServices?.slice(0, 3).map((item, index) => (
              <PlatformIconsList platform={item.platform} key={index} />
            ))}
          </HStack>

          <Badge
            variant="outline"
            colorScheme={score > 60 ? "green" : score > 40 ? "blue" : "yellow"}
            borderRadius=".25rem"
            px=".5rem"
          >
            {score}
          </Badge>
        </HStack>

        <Heading size="sm">{title}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
