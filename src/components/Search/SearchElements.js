import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin: 10px 0px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const SearchForm = styled.form``;

export const SearchInput = styled.input`
  border: none;
  padding: 7px;
  border-radius: 15px;
  margin-right: 15px;
  text-align: center;
`;

export const Btn = styled.button`
  border: none;
  padding: 7px;
  border-radius: 15px;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.secondary};

  &:hover {
    cursor: pointer;
    border: 2px solid ${props => props.theme.seconday};
  }
`;
