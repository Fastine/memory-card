import React from "react"
import "../index.css"

function Card({ onCardClick, name, buttonID }) {
  return (
    <>
      <button id={buttonID} onClick={() => onCardClick(buttonID)}>
        <img
          src={require("../Img/" + name + ".png")}
          height="100%"
          width="100%"
          alt={name}
        />
      </button>
    </>
  )
}

export default Card
