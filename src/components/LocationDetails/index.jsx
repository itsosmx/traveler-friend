import React from "react";
import {
  CardContanier,
  CardImage,
  CardTitle,
  CardContent,
  CardMedia,
  Details,
  Subtitle,
  Value,
  Image,
  ListDetails,
  Keys,
  Address,
  AddressIcon,
  AddressSubtitle,
  CardAction,
  ActionButton,
} from "./styled";

function LocationDetails({ place }) {
  return (
    <CardContanier>
      <CardMedia>
        <CardImage
          alt=""
          title={place.name}
          src={
            place.photo
              ? place.photo.images.large.url
              : "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
          }
        ></CardImage>
      </CardMedia>
      <CardContent>
        <CardTitle>{place.name}</CardTitle>
        <Details>
          <Subtitle>Price Level</Subtitle>
          <Value>{place.price_level}</Value>
        </Details>
        <Details>
          <Subtitle>Ranking</Subtitle>
          <Value>{place.ranking}</Value>
        </Details>
        <ListDetails>
          {place?.awards?.map((award) => (
            <Details style={{ marginTop: ".3rem", fontSize: ".6rem" }}>
              <Image src={award.images.small} alt={award.display_name}></Image>
              <Value>{award.display_name}</Value>
            </Details>
          ))}
        </ListDetails>
        <ListDetails style={{ display: "flex", flexWrap: "wrap" }}>
          {place?.cuisine?.map(({ name }) => (
            <Keys>{name}</Keys>
          ))}
        </ListDetails>
        <ListDetails>
          {place?.address && (
            <Address>
              <AddressIcon className="fas fa-map-marker-alt"></AddressIcon>
              <AddressSubtitle>{place?.address}</AddressSubtitle>
            </Address>
          )}
          {place?.phone && (
            <Address>
              <AddressIcon className="fas fa-phone-alt"></AddressIcon>
              <AddressSubtitle>{place?.phone}</AddressSubtitle>
            </Address>
          )}
        </ListDetails>
        <CardAction>
          <ActionButton onClick={() => window.open(place?.web_url, "_black")}>
            Trip Advisor
          </ActionButton>
          <ActionButton onClick={() => window.open(place?.website, "_black")}>
            Website
          </ActionButton>
        </CardAction>
      </CardContent>
    </CardContanier>
  );
}

export default LocationDetails;
