import React from "react";
import {
  SearchContainer,
  SearchWrapper,
  SearchForm,
  SearchInput,
  Btn,
} from "./SearchElements";

const Search = () => {
  const handleSubmit = event => {
    event.preventDefault();
    console.log("Search Click");
  };

  return (
    <SearchContainer onSubmit={handleSubmit}>
      <SearchWrapper>
        <SearchForm>
          <SearchInput
            name="search"
            type="text"
            aria-label="searchbox"
            required={true}
            placeholder="Enter Zipcode..."
          />
          <Btn>Search</Btn>
        </SearchForm>
      </SearchWrapper>
    </SearchContainer>
  );
};

export default Search;
