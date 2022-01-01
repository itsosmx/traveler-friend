import React from "react";
import {
  Container,
  Logo,
  Search,
  SearchInput,
  SearchIcon,
  SearchTitle,
  SearchGroup
} from "./styled";

function Header() {
  return (
    <Container>
      <Logo>Traveler Friend</Logo>
      <Search>
        <SearchTitle>Where you want to go?</SearchTitle>
        <SearchGroup>
          <SearchIcon className="fas fa-search"></SearchIcon>
          <SearchInput type="search"></SearchInput>
        </SearchGroup>
      </Search>
    </Container>
  );
}

export default Header;
