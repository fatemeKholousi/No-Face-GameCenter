import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import usePlatforms from "../hooks/usePlatforms";
import { AiOutlineDown } from "react-icons/ai";

interface IPlatformSelector {
  onSelectedPlatformId: (selectedPlatform: number) => void;
}

const PlatformSelector: React.FC<IPlatformSelector> = ({
  onSelectedPlatformId,
}) => {
  const { data } = usePlatforms();
  const [selectedPlatform, setSelectedPlatform] = useState<any>(null);

  useEffect(() => {
    onSelectedPlatformId(selectedPlatform?.id);
  }, [selectedPlatform]);

  return (
    <Menu size="40px">
      <MenuButton as={Button} rightIcon={<AiOutlineDown />}>
        {selectedPlatform?.name || " Select a platform"}
      </MenuButton>
      <MenuList>
        {data?.map((platform) => (
          <MenuItem onClick={() => setSelectedPlatform(platform)}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
