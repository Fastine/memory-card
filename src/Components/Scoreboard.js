import React from "react"
import "../index.css"

function Scoreboard({ currentScore, hiScore }) {
  return (
    <div className="scoreboard">
      <div>
        Current Score: <span>{currentScore}</span>
      </div>
      <br />
      <div>
        High Score: <span>{hiScore}</span>
      </div>
    </div>
  )
}

export default Scoreboard
