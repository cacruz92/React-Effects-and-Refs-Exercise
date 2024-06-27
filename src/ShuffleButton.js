import React from "react";

const ShuffleButton = ({deckId, shuffleDeck}) => {
    const handleClick = (e) => {
        e.preventDefault();
        shuffleDeck(deckId);
    }
    return (
    <button className="shuffle-button" onClick={handleClick}>SHUFFLE</button>
    )
}

export default ShuffleButton;