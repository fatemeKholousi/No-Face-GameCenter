import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import usePlatforms from "../hooks/usePlatforms";
import { AiOutlineDown } from "react-icons/ai";
import { IPlatform } from "../interfaces/IPlatform";

interface IPlatformSelectorProps {
  onSelectedPlatformId: (selectedPlatform: number | null) => void;
}

const PlatformSelector: React.FC<IPlatformSelectorProps> = ({
  onSelectedPlatformId,
}) => {
  const { data } = usePlatforms();
  const [selectedPlatform, setSelectedPlatform] = useState<IPlatform>();

  useEffect(() => {
    if (selectedPlatform) onSelectedPlatformId(selectedPlatform?.id);
  }, [selectedPlatform]);

  return (
    <Menu size="40px">
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
