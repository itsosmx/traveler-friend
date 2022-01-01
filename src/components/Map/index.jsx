import React from "react";
import GoogleMapReact from "google-map-react";
import {
  CardImage,
  CardMedia,
  Container,
  MapMarker,
  MarkTitle,
} from "./styled";
import useMediaQuery from "../useMediaQuery";
function Map({ setBounds, setCoordinates, coordinates, places }) {
  const key = "AIzaSyA4IMas6S0arCMdR9bIJcc7P1AqFuCSuys";

  const isDesktop = useMediaQuery(600);

  return (
    <Container>
      <GoogleMapReact
        bootstrapURLKeys={{ key: key }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={(50, 50, 50, 50)}
        options={""}
        onChange={(e) => {
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
        }}
        onChildClick={""}
      >
        {places?.map((place, i) => (
          <MapMarker
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {isDesktop ? (
              <i className="fas fa-map-marker-alt"></i>
            ) : (
              <CardMedia>
                <MarkTitle>{place.name}</MarkTitle>
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
            )}
          </MapMarker>
        ))}
        {/* <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" /> */}
      </GoogleMapReact>
    </Container>
  );
}

export default Map;
