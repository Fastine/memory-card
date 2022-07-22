import React, { useState } from 'react'; 
import Card from './Card';
import '../index.css';

function Gameplay() {

  const [gameboard, setGameboard] = useState([
    {
      name: "Astrologian",
      id: 1
    },
    {
      name: "Bard",
      id: 2
    },
    {
      name: "BlackMage",
      id: 3
    },
    {
      name: "BlueMage",
      id: 4
    },
    {
      name: "Dancer",
      id: 5
    },
    {
      name: "DarkKnight",
      id: 6
    },
    {
      name: "Dragoon",
      id: 7
    },
    {
      name: "Gunbreaker",
      id: 8
    },
    {
      name: "Machinist",
      id: 9
    },
    {
      name: "Monk",
      id: 10
    },
    {
      name: "Ninja",
      id: 11
    },
    {
      name: "Paladin",
      id: 12
    },
    {
      name: "RedMage",
      id: 13
    },
    {
      name: "Samurai",
      id: 14
    },
    {
      name: "Scholar",
      id: 15
    },
    {
      name: "Summoner",
      id: 16
    },
    {
      name: "Warrior",
      id: 17
    },
    {
      name: "WhiteMage",
      id: 18
    }
  ])

  const handleClick = function() {
    shuffleArray(gameboard);
    setGameboard(gameboard);
  }

  const shuffleArray = function(array) {
    for (var i=array.length - 1; i>=1; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[j];
      array[j] = array[i];
      array[i] = temp;
    }
  }

  return (
    <div className="gameboard">
      {gameboard.map((currentValue) => {
        return <Card key={currentValue.id} name={currentValue.name} onClick={handleClick} />
        //<input type="image" src={require("../Img/" + currentValue.name + ".png")} alt={currentValue.name} key={currentValue.id} onClick={shuffleArray(gameboard)} />
      })}
    </div>
  );
};

export default Gameplay;