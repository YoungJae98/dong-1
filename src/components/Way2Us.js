import React from "react";
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps";
import { useMediaQuery } from "react-responsive";

function Way2Us() {
  const isMobile = useMediaQuery({ query: "(max-width: 1240px)" });
  return (
    <RenderAfterNavermapsLoaded ncpClientId={"4ofr0zhlg4"}>
      <NaverMap
        style={{
          width: "100%",
          height: isMobile ? "300px" : "500px",
        }}
        defaultCenter={{ lat: 37.549634, lng: 127.075216 }}
        defaultZoom={16}
      >
        <Marker
          key={1}
          position={{ lat: 37.549634, lng: 127.075216 }}
          animation={1}
        />
      </NaverMap>
    </RenderAfterNavermapsLoaded>
  );
}

export default Way2Us;
