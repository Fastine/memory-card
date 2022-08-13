import React, { useState, useEffect } from "react"
import Scoreboard from "./Scoreboard"
import Card from "./Card"
import "../index.css"

function Gameplay() {
  //
  // States
  //

  const [gameboard, setGameboard] = useState([
    {
      name: "Astrologian",
      id: 1,
    },
    {
      name: "Bard",
      id: 2,
    },
    {
      name: "BlackMage",
      id: 3,
    },
    {
      name: "BlueMage",
      id: 4,
    },
    {
      name: "Dancer",
      id: 5,
    },
    {
      name: "DarkKnight",
      id: 6,
    },
    {
      name: "Dragoon",
      id: 7,
    },
    {
      name: "Gunbreaker",
      id: 8,
    },
    {
      name: "Machinist",
      id: 9,
    },
    {
      name: "Monk",
      id: 10,
    },
    {
      name: "Ninja",
      id: 11,
    },
    {
      name: "Paladin",
      id: 12,
    },
    {
      name: "RedMage",
      id: 13,
    },
    {
      name: "Samurai",
      id: 14,
    },
    {
      name: "Scholar",
      id: 15,
    },
    {
      name: "Summoner",
      id: 16,
    },
    {
      name: "Warrior",
      id: 17,
    },
    {
      name: "WhiteMage",
      id: 18,
    },
  ])
  const [scoreKeeper, setScoreKeeper] = useState([])
  // eslint-disable-next-line
  const [currentScore, setCurrentScore] = useState(0)
  // eslint-disable-next-line
  const [hiScore, setHiScore] = useState(0)

  //
  // Game Flow
  //

  // Update hiScore when necessary
  useEffect(() => {
    if (currentScore > hiScore) {
      setHiScore(currentScore)
    }
  }, [currentScore])

  // Card Click
  const handleClick = function (buttonID) {
    //Increase points by one if ID hasn't been clicked this round

    var tempArray = [...gameboard]

    if (checkScore(buttonID) === true) {
      shuffleArray(tempArray)
      setGameboard(tempArray)
      // Increase Score
      setCurrentScore((prevScore) => {
        return prevScore + 1
      })
    } else if (checkScore(buttonID) === false) {
      resetGame()
    } else console.log("ERROR")
  }

  // Reset score/game state
  const resetGame = () => {
    var tempArray = [...gameboard]
    setCurrentScore(0)
    setScoreKeeper([])
    shuffleArray(tempArray)
    setGameboard(tempArray)
  }

  // Check if card has been clicked this round
  const checkScore = function (buttonID) {
    if (scoreKeeper.includes(buttonID) === false) {
      // Add ID to array of scored cards
      setScoreKeeper((prevState) => {
        return [...prevState, buttonID]
      })
      return true
    } else return false
  }

  // Shuffle gameboard
  const shuffleArray = function (array) {
    for (var i = array.length - 1; i >= 1; i--) {
      var j = Math.floor(Math.random() * (i + 1))
      var temp = array[j]
      array[j] = array[i]
      array[i] = temp
    }
  }

  const renderBoard = function () {
    return gameboard.map((currentValue) => {
      return (
        <Card
          key={currentValue.id}
          buttonID={currentValue.id}
          name={currentValue.name}
          onCardClick={() => {
            handleClick(currentValue.id)
          }}
        />
      )
      //<input type="image" src={require("../Img/" + currentValue.name + ".png")} alt={currentValue.name} key={currentValue.id} onClick={shuffleArray(gameboard)} />
    })
  }

  return (
    <>
      <Scoreboard currentScore={currentScore} hiScore={hiScore} />
      <div className="gameboard">{renderBoard()}</div>
    </>
  )
}

export default Gameplay
