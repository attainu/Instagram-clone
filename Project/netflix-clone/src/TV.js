import React from "react";
import RowTv from "./RowTv";
import request from "./request";
import TvBanner from "./TvBanner";

function TV() {
  return (
    <div>
      <TvBanner />
      <RowTv title="Popular" fetchUrl={request.fetchPopular} />
      <RowTv title="On Air" fetchUrl={request.fetchOnAir} />
      <RowTv title="Adventure" fetchUrl={request.fetchAdventure} />
      <RowTv title="Mystrerious" fetchUrl={request.fetchMysterious} />
    </div>
  );
}

export default TV;
