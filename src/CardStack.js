import React, {useState, useEffect} from "react";
import axios from "axios";
import Card from "./Card";
import DrawButton from "./DrawButton";

const CardStack = () => {
    const[deckId, setDeckId] = useState(null);
    const[currentCard, setCurrentCard] = useState(null);

    useEffect(function getDeckId(){
        async function fetchId(){
            const res = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
            setDeckId(res.data.deck_id)
        }
        fetchId();
    }, [])

    const drawCard = async (deck_id) => {
        const res = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`);
        setCurrentCard(res.cards.code)
        console.log(res.cards.code)
    } 

    return (
        <>
        <h1>Click to Draw!</h1>
        <Card />
        <DrawButton />
        </>
    )
}

export default CardStack 