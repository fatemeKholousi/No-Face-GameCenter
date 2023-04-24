import React from "react";
import SearchInput from "../components/SearchInput";
import SwitchMode from "../components/SwitchMode";
import Icon from "../assets/images/icon.png";
import { HStack, Image } from "@chakra-ui/react";
import GridGameCards from "../components/GridGameCards";
function Dashboard() {
  return (
    <>
      <HStack>
        <Image src={Icon} width={50} />
        <SearchInput />
        <SwitchMode />
      </HStack>
      <GridGameCards />
    </>
  );
}

export default Dashboard;
