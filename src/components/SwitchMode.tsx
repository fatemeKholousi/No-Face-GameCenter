import { Switch, FormControl, FormLabel, SimpleGrid } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

function SwitchMode() {
  const initialisLightMode = Boolean(
    localStorage.getItem("isLightMode") === "false" ? false : true
  );

  const [isLightMode, setIsLightMode] = useState<boolean>(initialisLightMode);

  return (
    <FormControl as={SimpleGrid} columns={{ base: 2, lg: 4 }}>
      <FormLabel htmlFor="isChecked">{}</FormLabel>
      <Switch
        colorScheme="gray"
        size="md"
        isChecked={isLightMode}
        onChange={(e) => {
          setIsLightMode(e.target.checked);
          localStorage.setItem("isLightMode", e.target.checked.toString());
        }}
      />
    </FormControl>
  );
}

export default SwitchMode;
