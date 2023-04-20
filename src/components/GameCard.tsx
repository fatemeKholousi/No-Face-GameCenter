import React from "react";
import {
  Image,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Badge,
  Flex,
  Stack,
  Spacer,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
interface IGameCard {
  gameCover: string;
  supportedServices: string;
  title: string;
  score: string;
  views: string;
}

function GameCard({
  gameCover,
  supportedServices,
  title = "",
  score,
  views,
}: IGameCard) {
  return (
    <>
      <Card maxW="sm" borderRadius="1rem" variant={"filled"} overflow="hidden">
        <Image src={gameCover} alt="game cover" boxSize="100%" />
        <CardBody>
          <Flex alignItems="center">
            <Text>{supportedServices}</Text>
            <Spacer />

            <Badge variant="outline" colorScheme="blue">
              {score}
            </Badge>
          </Flex>
          <Heading size="md">{title}</Heading>
        </CardBody>
        <CardFooter>
          <Badge>
            <Flex alignItems="center" gap={1}>
              <FaPlus />
              <Spacer />
              <Text>{views}</Text>
            </Flex>
          </Badge>
        </CardFooter>
      </Card>
    </>
  );
}

export default GameCard;
