import React, { FC } from "react";
import styled from "styled-components";
import { MapContainer, TileLayer } from "react-leaflet";

interface SiteMapProps {
  latitude: string;
  longitude: string;
}

const StyledDiv = styled.div`
  margin: 40px 0;
`;

export const SiteMap: FC<SiteMapProps> = ({ latitude, longitude }) => (
  <StyledDiv>
    <MapContainer
      style={{ height: "400px" }}
      // @ts-ignore
      center={[latitude, longitude]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  </StyledDiv>
);
