import styled from "styled-components"

export const Container = styled.div`
  height: calc(100vh - 70px);
  background-color: var(--second);
  width: 30vw;
  float: left;
  padding: 1.5rem;
  /* display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, .5); */
`

export const Title = styled.div`
  color: var(--white);
  font-size: 1.3rem;
  font-weight: bold;
`
export const Filters = styled.div`
    display: flex;
    gap: 2rem;
    color: var(--white);
    height: 5%;
`
export const SelectGroup = styled.div`
`
export const SelectLable = styled.label`
  padding: .5rem;
`
export const Select = styled.select`
  border: none;
  padding: .3rem;
  outline : none;
  border-radius: .2rem;

`
export const Option = styled.option``

export const PlacesContainer = styled.div`
  padding: .5rem;
  height: 90%;
  margin-top: 1rem;
  border-top: 3px solid var(--main);
  scroll-behavior: smooth;
  overflow-y: scroll;
`
