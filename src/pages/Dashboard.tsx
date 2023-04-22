import React from "react";
import SearchInput from "../components/SearchInput";
import SwitchMode from "../components/SwitchMode";
import Icon from "../assets/images/icon.png";
import { HStack } from "@chakra-ui/react";
function Dashboard() {
  return (
    <HStack>
      <img src={Icon} width={50} />
      <SearchInput />
      <SwitchMode />
    </HStack>
  );
}

export default Dashboard;
