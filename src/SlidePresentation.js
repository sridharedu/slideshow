import React, { useState, useEffect } from "react";
import SlideViewer from "./SlideViewer";
import { loadSlideDecks, loadSlides } from "./slidesData";

const SlidePresentation = ({ deckId }) => {
    const [slides, setSlides] = useState(null);
    const [deck, setDeck] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        loadSlideDecks()
            .then(decks => {
                const selectedDeck = decks[deckId];
                setDeck(selectedDeck);
                if (selectedDeck) {
                    return loadSlides(selectedDeck.dataFile);
                }
                return null;
            })
            .then(setSlides)
            .finally(() => setLoading(false));
    }, [deckId]);
    
    if (loading) {
        return <div style={{ 
            minHeight: '100vh', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            fontSize: '1.2rem'
        }}>Loading slides...</div>;
    }
    
    if (!deck || !slides) {
        return <div>Slide deck not found</div>;
    }
    
    return <SlideViewer slides={slides} />;
};

export default SlidePresentation;