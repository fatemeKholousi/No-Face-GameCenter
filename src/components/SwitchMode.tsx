import {
  Switch,
  FormControl,
  FormLabel,
  useColorMode,
  HStack,
} from "@chakra-ui/react";
import React from "react";

function SwitchMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  const labelStyle = {
    "&:first-letter": {
      textTransform: "uppercase",
    },
  };

  return (
    <HStack>
      <Switch
        colorScheme="gray"
        size="md"
        isChecked={colorMode === "light"}
        onChange={toggleColorMode}
      />
      <FormLabel htmlFor="isChecked" sx={labelStyle}>
        {colorMode}
      </FormLabel>
    </HStack>
  );
}

export default SwitchMode;
