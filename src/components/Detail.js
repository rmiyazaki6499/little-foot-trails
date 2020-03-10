import React from "react";
import { Search } from "./Search";
import { ReviewUI } from "./ReviewUI";

export const Detail = () => {
  return (
    <div>
      <h2>Trail Name</h2>
      <div className="row justify-content-center">
        <div className="col-7">DESCRIPTION</div>
        <div className="col-auto">IMAGE</div>
        <div className="w-100"></div>
        <div className="col-7">AMENITIES</div>
        <div className="col-auto">MAP</div>
      </div>
      <div className="container">
        <hr />
        <h2>REVIEWS</h2>
        <ReviewUI />
        <hr />
      </div>
      <div className="container mb-5">
        <Search />
      </div>
    </div>
  );
};