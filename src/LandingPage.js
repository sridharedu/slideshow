import React from 'react';
import { slideDecks } from './slideConfig';

const LandingPage = ({ onSelectDeck }) => {
    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
        }}>
            <div style={{
                maxWidth: '800px',
                width: '100%',
                background: '#fff',
                borderRadius: '16px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                padding: '3rem'
            }}>
                <h1 style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    textAlign: 'center',
                    marginBottom: '1rem',
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    Java Slide Presentations
                </h1>
                <p style={{
                    textAlign: 'center',
                    color: '#6b7280',
                    marginBottom: '3rem',
                    fontSize: '1.1rem'
                }}>
                    Select a presentation to begin
                </p>
                
                <div style={{
                    display: 'grid',
                    gap: '1.5rem',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
                }}>
                    {slideDecks.map(deck => (
                        <div
                            key={deck.id}
                            onClick={() => onSelectDeck(deck.component)}
                            style={{
                                padding: '2rem',
                                border: '1px solid #e5e7eb',
                                borderRadius: '12px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                background: '#fff'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'translateY(-4px)';
                                e.target.style.boxShadow = '0 10px 25px rgba(102, 126, 234, 0.15)';
                                e.target.style.borderColor = '#667eea';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = 'none';
                                e.target.style.borderColor = '#e5e7eb';
                            }}
                        >
                            <h3 style={{
                                fontSize: '1.25rem',
                                fontWeight: '600',
                                color: '#1f2937',
                                marginBottom: '0.5rem'
                            }}>
                                {deck.title}
                            </h3>
                            <p style={{
                                color: '#6b7280',
                                fontSize: '0.95rem'
                            }}>
                                {deck.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LandingPage;