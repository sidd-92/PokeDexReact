import React from "react";
const bulbasaur = require("../../assets/images/bulbasaur.png");
const progressStyle = { height: "16px" };

const ListPoke = ({ all }) => {
  return (
    <div
      className="card mb-2 border border-dark rounded"
      style={{ minWidth: "18rem" }}
    >
      <div className="card-header clearfix">
        <span className="text-justify h4">{all.name}</span>
        <span>
          <img
            className="img-thumbnail float-right"
            src={bulbasaur}
            alt="Picsum"
          />
        </span>
      </div>

      <div className="card-body">
        <div className="card-title">
          <span className="small">Sp. Attack : {all.sp_attack}</span>
          <div className="progress" style={progressStyle}>
            <div
              className="progress-bar progress-bar-striped bg-info"
              role="progressbar"
              style={{ width: `${all.sp_attack}%` }}
            />
          </div>
          <span className="small">Sp. Defense : {all.sp_defense}</span>
          <div className="progress" style={progressStyle}>
            <div
              className="progress-bar progress-bar-striped bg-success"
              role="progressbar"
              style={{ width: `${all.sp_defense}%` }}
            />
          </div>
        </div>

        {all.abilities.map(a => (
          <p className="card-text" key={a} style={{ display: "inline" }}>
            <span className="badge badge-danger text-center">{a}</span>{" "}
          </p>
        ))}
      </div>
      <div className="card-footer text-muted">
        <span className="text-info small">
          <b>A: </b>
          {all.attack}{" "}
          <span className="text-warning  ml-1">
            <b>D: </b>
            {all.defense}{" "}
          </span>
          <span className="text-secondary ml-1">
            <b>S: </b>
            {all.speed}{" "}
          </span>
          <span className="float-right text-danger">
            <b>HP: </b>
            {all.hp}
          </span>
        </span>
      </div>
    </div>
  );
};

export default ListPoke;
