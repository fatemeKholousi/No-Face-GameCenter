import React, { useState } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearchHeart } from "react-icons/bs";

function SearchInput() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" children={<BsSearchHeart />} />
      <Input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
        borderRadius="2rem"
      />
    </InputGroup>
  );
}

export default SearchInput;
