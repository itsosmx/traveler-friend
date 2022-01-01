import React, { useState } from "react";
import LocationDetails from "../LocationDetails";
import {
  Container,
  Filters,
  Option,
  SelectGroup,
  Title,
  Select,
  SelectLable,
  PlacesContainer,
} from "./styled";

function Sidebar({ places }) {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState(null);

  return (
    <Container>
      <Title>Loction Details</Title>
      <Filters>
        <SelectGroup>
          <SelectLable>Type</SelectLable>
          <Select value={type} onChange={(e) => setType(e.target.value)}>
            <Option value="restaurants">Restaurants</Option>
            <Option value="hotels">Hotels</Option>
            <Option value="attractions">Attractions</Option>
          </Select>
        </SelectGroup>
        <SelectGroup>
          <SelectLable>Rating</SelectLable>
          <Select value={rating} onChange={(e) => setRating(e.target.value)}>
            <Option value="">All</Option>
            <Option value="3">Above 3.0</Option>
            <Option value="4">Above 4.0</Option>
            <Option value="5">Above 4.5</Option>
          </Select>
        </SelectGroup>
      </Filters>
      <PlacesContainer>
        {places.map((item, i) => (
          <LocationDetails key={i} place={item} />
        ))}
      </PlacesContainer>
    </Container>
  );
}

export default Sidebar;
