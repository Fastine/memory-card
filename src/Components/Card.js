import React from 'react'
import '../index.css'

function Card(props) {
  return (
    <><button key={props.key} onClick={props.onClick}>
        <img src={require("../Img/" + props.name + ".png")} 
        height="100%" width="100%" alt={props.name} onClick={props.onClick} />
    </button></>
  )
}

export default Card