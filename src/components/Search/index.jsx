import React, { useState } from "react";
import { getWeather } from "../../redux/weatherSlice";
import { useDispatch } from "react-redux";

import {
  SearchContainer,
  SearchWrapper,
  SearchForm,
  SearchInput,
  Btn,
} from "./SearchElements";

const Search = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    if (value) {
      dispatch(getWeather(value));
    }
    setValue("");
  };

  return (
    <SearchContainer onSubmit={handleSubmit}>
      <SearchWrapper>
        <SearchForm>
          <SearchInput
            name="search"
            value={value}
            type="text"
            aria-label="searchbox"
            required={true}
            placeholder="Enter Zipcode..."
            onChange={event => setValue(event.target.value)}
          />
          <Btn>Search</Btn>
        </SearchForm>
      </SearchWrapper>
    </SearchContainer>
  );
};

export default Search;
