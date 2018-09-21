import React from "react";

const ListPoke = ({ name, abilities, attack, defense, hp, speed }) => {
  return (
    <div
      className="card mb-2 border border-dark rounded"
      style={{ minWidth: "18rem" }}
    >
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        {abilities.map(a => (
          <p className="card-text" key={a} style={{ display: "inline" }}>
            <span className="badge badge-danger ml-1">{a}</span>
          </p>
        ))}
        <hr />
        <span className="text-info small">
          <b>A: </b>
          {attack}{" "}
          <span className="text-warning  ml-1">
            <b>D: </b>
            {defense}{" "}
          </span>
          <span className="text-secondary ml-1">
            <b>S: </b>
            {speed}{" "}
          </span>
          <span className="float-right text-danger">
            <b>HP: </b>
            {hp}
          </span>
        </span>
      </div>
    </div>
  );
};

export default ListPoke;
