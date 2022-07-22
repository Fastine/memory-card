import React from 'react'
import "../index.css"

const Scoreboard = (props) => {
    
    return(
        <div className="scoreboard">
            <div>Current Score: <span>{props.currentScore}</span></div>
            <br />
            <div>High Score: <span>{props.hiScore}</span></div>
        </div>
    )

}

export default Scoreboard