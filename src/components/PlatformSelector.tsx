import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import usePlatforms from "../hooks/usePlatforms";
import { AiOutlineDown } from "react-icons/ai";
import { IPlatform } from "../interfaces/IPlatform";

interface IPlatformSelectorProps {
  onSelectedPlatform: (selectedPlatform: IPlatform) => void;
}

const PlatformSelector: React.FC<IPlatformSelectorProps> = ({
  onSelectedPlatform,
}) => {
  const { data } = usePlatforms();
  const [selectedPlatform, setSelectedPlatform] = useState<IPlatform>();

  useEffect(() => {
    if (selectedPlatform) onSelectedPlatform(selectedPlatform);
  }, [selectedPlatform]);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<AiOutlineDown />}>
        {selectedPlatform?.name || " Select a platform"}
      </MenuButton>
      <MenuList>
        {data?.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => setSelectedPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
