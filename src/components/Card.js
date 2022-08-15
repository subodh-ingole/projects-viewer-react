import React from "react";

const Card = ({ name, description, github, deployment }) => {
  if (description.length > 100) {
    description = description.substring(0, 100) + "...";
  }
  return (
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="card">
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
          </div>
          <div className="">
            <a href={deployment} className="btn btn-dark card-button">
              Goto Deployment
            </a>
            <a href={github} className="btn btn-light card-button">
              GitHub Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
