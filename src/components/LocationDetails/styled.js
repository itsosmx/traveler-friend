import styled from "styled-components";


export const CardContanier = styled.div`
  /* height: 400px; */
  overflow: hidden;
  /* padding: 0 .5rem 0 .5rem; */
  padding-bottom: 1rem;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  margin-top: 1rem;
  border-radius: 1rem;
`
export const CardTitle = styled.div`
  padding-bottom: 1rem;
  padding-top: .5rem;
`
export const CardMedia = styled.div`
  height: 300px;
  overflow: hidden;
`
export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
`
export const CardContent = styled.div`

`
export const ListDetails = styled.div`
  padding: .5rem;
  border-top: 2px solid rgba(255, 255, 255, 0.1);
  margin-top: .5rem;
`
export const Details = styled.div`
  padding: 0 .5rem 0 .5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: .9rem;
  color: var(--gray);
`
export const Image = styled.img`
  width: 3%;
`
export const HR = styled.hr``
export const Subtitle = styled.span``
export const Value = styled.span``
export const Keys = styled.span`
  background-color: rgba(255, 255, 255, 0.2);
  padding: .2rem .5rem;
  margin: .2rem;
  border-radius: .6rem;
  font-size: .7rem;

`
export const Address = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: .8rem;
  margin-top: .5rem;
  /*
  margin-top: .2rem; */
`
export const AddressIcon = styled.i``
export const AddressSubtitle = styled.span`
  color: var(--gray);
`
export const CardAction = styled.div`

`
export const ActionButton = styled.button`
  all: unset;
  margin: 0 .5rem;
  cursor: pointer;
  font-size: .8rem;
  :hover {
    color: var(--blue);
  }
`