import React from 'react'

const Scoreboard = (props) => {
    
    return(
        <div>
            <span>Current Score: <span>{props.currentScore}</span></span>
            <br />
            <span>High Score: <span>{props.hiScore}</span></span>
        </div>
    )

}

export default Scoreboard