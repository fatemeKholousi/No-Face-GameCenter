import React from "react";
import {
  BsNintendoSwitch,
  BsPlaystation,
  BsXbox,
  BsApple,
  BsAndroid,
  BsPCircle,
} from "react-icons/bs";
import { RiMacbookLine } from "react-icons/ri";
import { DiLinux } from "react-icons/di";
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
  console.log(supportedServices);
  const gamePlatformIcons = {
    mac: <RiMacbookLine />,
    playstation: <BsPlaystation />,
    xbox: <BsXbox />,
    pc: <BsPCircle />,
    android: <BsAndroid />,
    apple: <BsApple />,
    nintendo: <BsNintendoSwitch />,
    linux: <DiLinux />,
  };

  function gamePlatformIconRecognizer(name: string) {
    const simpleName = name
      .toLowerCase()
      .trim()
      .replace(" ", "")
      .replace("-", "");

    if (simpleName.startsWith("mac")) return gamePlatformIcons["mac"];
    else if (simpleName.startsWith("playstation"))
      return gamePlatformIcons["playstation"];
    else if (simpleName.startsWith("xbox")) return gamePlatformIcons["xbox"];
    else if (simpleName.startsWith("pc")) return gamePlatformIcons["pc"];
    else if (simpleName.startsWith("android"))
      return gamePlatformIcons["android"];
    else if (simpleName.startsWith("apple")) return gamePlatformIcons["apple"];
    else if (simpleName.startsWith("nintendo"))
      return gamePlatformIcons["nintendo"];
    else if (simpleName.startsWith("linux")) return gamePlatformIcons["linux"];
  }

  return (
    <>
      <Card maxW="sm" borderRadius="1rem" variant={"filled"} overflow="hidden">
        <Image src={gameCover} alt="game cover" />
        <CardBody>
          <HStack mb={4} justifyContent={"space-between"}>
            <HStack wrap="wrap">
              {supportedServices.slice(0, 3).map((item, index) => (
                <>{gamePlatformIconRecognizer(item.platform.slug)}</>
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
