import React from 'react'
import '../index.css'

function Card(props) {
  return (
    <><button id={props.buttonID} onClick={() => props.onCardClick(props.buttonID)}>
        <img src={require("../Img/" + props.name + ".png")} 
        height="100%" width="100%" alt={props.name}/>
    </button></>
  )
}

export default Card