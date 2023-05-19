import React, { useRef } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearchHeart } from "react-icons/bs";
import classes from "../layout/SearchInput.module.css";
interface ISearchInput {
  onSearch: (searchTerm: string) => void;
}

const SearchInput: React.FC<ISearchInput> = ({ onSearch }) => {
  const searchTerm = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (searchTerm.current) onSearch(searchTerm?.current.value);
      }}
      className={classes.searchContainer}
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<BsSearchHeart />} />
        <Input
          ref={searchTerm}
          placeholder="Search..."
          borderRadius="2rem"
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
