import React, {useState, useEffect} from "react";
import Card from "./Card";
import DrawButton from "./DrawButton";

const CardStack = () => {

    return (
        <>
        <h1>Click to Draw!</h1>
        <Card />
        <DrawButton />
        </>
    )
}

export default CardStack 