import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../Context";

export default function Cards({ trail }) {
  const {
    trail: [setData],
  } = useContext(Context)

  function setTrailObject() {
      setData(trail)
  }

  return (
    <div>
      <div class="card m-3" style={{ width: "20rem" }}>
        <img className="card-img-top" src={trail.picture} alt="trail" />
        <div className="card-body">
          <h4 className="card-title">{trail.name}</h4>
          <p className="card-text text-muted">{trail.description}</p>
          <Link to="/detail" className="btn btn-info" onClick={setTrailObject}>
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
}
