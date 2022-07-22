import React, { useState } from 'react';
import Scoreboard from './Scoreboard';

function Header(){

    const [currentScore, setCurrentScore] = useState(0);
    const [hiScore, setHiScore] = useState(0);

    return (
        <div>
            <h1>FFXIV Memory Game</h1>
            <Scoreboard currentScore={currentScore} hiScore={hiScore} />
        </div>
    )
}

export default Header;