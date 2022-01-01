import styled from "styled-components";

export const Container = styled.div`
  height: 70px;
  display: flex;
  padding: 0 2rem;
  align-items: center;
  justify-content: space-between;
  background-color: var(--blue);
  box-shadow: 5px 5px 20px rgba(0, 0, 0, .5);
`
export const Logo = styled.h1`
  color: var(--white);
`
export const Search = styled.div`
  display: flex;

`
export const SearchTitle = styled.p`
  color: var(--white);
`
export const SearchGroup = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 0 .5rem;
`
export const SearchIcon = styled.i`
  position: absolute;
  font-size: 1.5rem;
  padding: .5rem;
  color: var(--second);
  opacity: .5;
`
export const SearchInput = styled.input`
  width : 15rem;
  height: 3rem;
  outline: none;
  border: none;
  border-radius: .3rem;
  padding-left: 2rem;
  font-size: 1.1rem;
  color: var(--second);
`