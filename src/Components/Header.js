import React, { useState } from 'react';
import Scoreboard from './Scoreboard';

const Header = () => {

    const currentScore = useState(0);
    const hiScore = useState(0);

    return (
        <>
            <h1>FFXIV Memory Game</h1>
            <Scoreboard currentScore={currentScore} hiScore={hiScore} />
        </>
    )
}

export default Header;