import React from 'react';
import '../index.css';

function Gameplay() {

  var gameboard = [
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
    }
  ]

  return (
    <div className="gameboard">
      {gameboard.map((currentValue) => {
        return <input type="image" src={require("../Img/" + currentValue.name + ".png")} alt={currentValue} key={currentValue.id} />
      })}
    </div>
  );
};

export default Gameplay;