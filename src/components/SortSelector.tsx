import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { AiOutlineDown } from "react-icons/ai";
import React, { useEffect, useState } from "react";

interface ISortOrder {
  onSelectedOrder: (order: { key: string; label: string }) => void;
  sortOrder: string;
}
const SortSelector: React.FC<ISortOrder> = ({ onSelectedOrder, sortOrder }) => {
  const sortOrders = [
    { key: "", label: "Relevance" },
    { key: "name", label: "Name" },
    { key: "released", label: "Release Date" },
    { key: "-added", label: "Added Date" },
    { key: "-rating", label: "Rate" },
    { key: "-metacritic", label: "Popularity" },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<AiOutlineDown />}>
        {sortOrder ?? "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders?.map((item) => (
          <MenuItem
            key={item.key}
            value={item.key}
            onClick={() => onSelectedOrder(item)}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
