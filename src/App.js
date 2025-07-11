import React, { useState } from 'react';
import LandingPage from './LandingPage';
import SlidePresentation from './SlidePresentation';

function App() {
  const [selectedDeck, setSelectedDeck] = useState(null);
  
  if (selectedDeck) {
    return (
      <div>
        <button 
          onClick={() => setSelectedDeck(null)}
          style={{
            position: 'fixed',
            top: '20px',
            left: '20px',
            zIndex: 1000,
            padding: '0.5rem 1rem',
            background: '#667eea',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          ← Back
        </button>
        <SlidePresentation deckId={selectedDeck} />
      </div>
    );
  }
  
  return <LandingPage onSelectDeck={setSelectedDeck} />;
}

export default App;
