import React from "react";

const Card = ({currentCard}) => {
    return(
        <div>
            <img src={currentCard.image}></img>
        </div>
        )
}

export default Card;