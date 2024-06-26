import React from "react";

const DrawButton = ({deckId, drawCard}) => {
    const handleClick = (e) => {
        e.preventDefault();
        drawCard(deckId);
    }
    return (
    <button className="draw-button" onClick={handleClick}>GIMME A CARD!</button>
    )
}

export default DrawButton;
