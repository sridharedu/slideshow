import React, { useState } from 'react';
import LandingPage from './LandingPage';
import CompletableFutureSlides from './ForEachSlides';
import ObjectsInJavaSlides from './objectsInJavaSlides';

const components = {
  CompletableFutureSlides,
  ObjectsInJavaSlides
};

function App() {
  const [selectedDeck, setSelectedDeck] = useState(null);
  
  if (selectedDeck) {
    const Component = components[selectedDeck];
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
        <Component />
      </div>
    );
  }
  
  return <LandingPage onSelectDeck={setSelectedDeck} />;
}

export default App;
