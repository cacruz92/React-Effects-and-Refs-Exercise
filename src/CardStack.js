import React, {useState, useEffect} from "react";
import axios from "axios";
import Card from "./Card";
import DrawButton from "./DrawButton";
import ShuffleButton from "./ShuffleButton";

const CardStack = () => {
    const[deckId, setDeckId] = useState(null);
    const[currentCard, setCurrentCard] = useState({});
    const[cardStack, setCardStack] = useState([])

    useEffect(function getDeckId(){
        async function fetchId(){
            const res = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
            setDeckId(res.data.deck_id)
        }
        fetchId();
    }, [])

    const drawCard = async (deck_id) => {
        if(cardStack.length > 51){
            alert("No more cards left!");
            return;
        }
        const res = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`);
        const newCard = res.data.cards[0]
        setCurrentCard(newCard);
        setCardStack(cardStack => [newCard, ...cardStack]);
    } 

    const shuffleDeck = async(deck_id) => {
        await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/shuffle/`);
        setCurrentCard({});
        setCardStack([]);
    }

    return (
        <>
        <h1>Click to Draw!</h1>
        {cardStack.length < 52 ? (
                <>
                <DrawButton deckId={deckId} drawCard={drawCard} />
                <br></br>
                </>
            ) : (
                <h1>No more cards left!</h1>
            )}
        <ShuffleButton deckId={deckId} shuffleDeck={shuffleDeck}/>
        <div>
            {cardStack.map((card) => (
                <><img key={card.code} src={card.image} alt={`card-${card.code}`} /><br></br></>
            ))}
        </div>
        </>

    )
}

export default CardStack 