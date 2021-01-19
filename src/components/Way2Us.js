import React from "react";
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps";

function Way2Us() {
  return (
    <RenderAfterNavermapsLoaded ncpClientId={"4ofr0zhlg4"}>
      <NaverMap
        style={{
          width: "100%", // 네이버지도 가로 길이
          height: "500px", // 네이버지도 세로 길이
        }}
        defaultCenter={{ lat: 37.549634, lng: 127.075216 }} // 지도 초기 위치
        defaultZoom={16}
      >
        <Marker
          key={1}
          position={{ lat: 37.549634, lng: 127.075216 }}
          animation={1}
          onClick={() => {
            alert("여기는 N서울타워입니다.");
          }}
        />
      </NaverMap>
    </RenderAfterNavermapsLoaded>
  );
}

export default Way2Us;
