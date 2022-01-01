import styled from "styled-components"

export const Container = styled.div`
  height: calc(100vh - 70px);
  width: 70vw;
  float: right;
`
export const MapMarker = styled.div`
  width: 100px;
  overflow: hidden;
  color: var(--main);
  position: relative;
  background-color: var(--white);
  border-radius: .2rem;
  text-align: center;
  cursor: pointer;
  transition: all .5s linear;
  :hover {
    z-index: 9999;
  }
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`
export const MarkTitle = styled.div`
  
`
export const CardMedia = styled.div``
export const CardImage = styled.img`
  width: 100%;
`