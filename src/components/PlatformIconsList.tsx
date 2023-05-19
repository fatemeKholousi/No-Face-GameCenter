import React from "react";
import {
  BsNintendoSwitch,
  BsXbox,
  BsApple,
  BsAndroid,
  BsPCircle,
} from "react-icons/bs";
import { RiMacbookLine, RiXboxFill } from "react-icons/ri";
import { DiLinux } from "react-icons/di";
import { SiPlaystation3, SiPlaystation4, SiPlaystation5 } from "react-icons/si";
import { IconType } from "react-icons";
import { Icon } from "@chakra-ui/react";

function PlatformIconsList({
  platform,
}: {
  platform: { slug: string; name: string };
}) {
  const gamePlatformIcons: { [key: string]: IconType } = {
    macos: RiMacbookLine,
    playstation4: SiPlaystation4,
    "xbox-one": BsXbox,
    pc: BsPCircle,
    android: BsAndroid,
    apple: BsApple,
    "nintendo-switch": BsNintendoSwitch,
    linux: DiLinux,
    "xbox-series-x": RiXboxFill,
    playstation5: SiPlaystation5,
    playstation3: SiPlaystation3,
  };

  return <Icon as={gamePlatformIcons[platform.slug]} color="pink" />;
}

export default PlatformIconsList;
