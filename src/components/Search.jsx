import React from "react";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import { FaSearch } from "react-icons/fa";

export default function Search({ handleSearchValue, searchValue }) {
  return (
    <InputGroup className="container custom-input-group">
      <FaSearch className="icon"/>
      <FormControl
        placeholder="Search"
        type="text"
        name="search"
        className="mr-sm-2"
        value={searchValue || ""}
        onChange={handleSearchValue}
      />
    </InputGroup>
  );
}
