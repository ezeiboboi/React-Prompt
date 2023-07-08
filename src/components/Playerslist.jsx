// src/PlayersList.js
import React from "react";
import Player from "./Player";
import players from "../players";

const PlayersList = () => {
  return (
    <div style={{display:'grid', gridTemplateColumns:"1fr 1fr 1fr"}}>
      {players.map((players, index) => (
        <Player key={index} {...players} />
      ))}
    </div>
  );
};

export default PlayersList;
