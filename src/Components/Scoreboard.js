import React from 'react'
import "../index.css"

const Scoreboard = (props) => {
    
    return(
        <div className="scoreboard">
            <span>Current Score: <span>{props.currentScore}</span></span>
            <br />
            <span>High Score: <span>{props.hiScore}</span></span>
        </div>
    )

}

export default Scoreboard