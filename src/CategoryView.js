import React, { useState } from 'react';
import { categorizedSlideDecks } from './data/categorizedSlideDecks';
import { slideDecks } from './data/slideDecks';

const CategoryView = ({ onSelectSlide }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(selectedCategory === categoryName ? null : categoryName);
  };

  const handleSlideClick = (slideKey) => {
    onSelectSlide(slideKey);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to right, #667eea, #764ba2)',
      padding: '2rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h1 style={{
          color: '#fff',
          textAlign: 'center',
          marginBottom: '2rem',
          fontSize: '2.5rem',
          fontWeight: '700'
        }}>
          Java Developer Knowledge Base
        </h1>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          {Object.entries(categorizedSlideDecks).map(([categoryName, category]) => (
            <div key={categoryName} style={{
              background: '#fff',
              borderRadius: '12px',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
              overflow: 'hidden',
              transition: 'transform 0.2s ease'
            }}>
              <div 
                onClick={() => handleCategoryClick(categoryName)}
                style={{
                  padding: '1.5rem',
                  cursor: 'pointer',
                  borderBottom: selectedCategory === categoryName ? '1px solid #e5e7eb' : 'none'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '0.5rem'
                }}>
                  <span style={{ fontSize: '2rem' }}>{category.icon}</span>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: '#1f2937',
                    margin: 0
                  }}>
                    {categoryName}
                  </h3>
                </div>
                <p style={{
                  color: '#6b7280',
                  fontSize: '0.875rem',
                  margin: 0,
                  lineHeight: '1.4'
                }}>
                  {category.description}
                </p>
                <div style={{
                  marginTop: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <span style={{
                    background: '#667eea',
                    color: '#fff',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}>
                    {category.slides.length} topics
                  </span>
                  <span style={{
                    color: '#6b7280',
                    fontSize: '0.75rem'
                  }}>
                    {selectedCategory === categoryName ? '▼' : '▶'}
                  </span>
                </div>
              </div>
              
              {selectedCategory === categoryName && category.slides.length > 0 && (
                <div style={{
                  padding: '1rem 1.5rem 1.5rem',
                  background: '#f9fafb'
                }}>
                  {category.slides.map((slide) => (
                    <div
                      key={slide.key}
                      onClick={() => handleSlideClick(slide.key)}
                      style={{
                        padding: '0.75rem',
                        marginBottom: '0.5rem',
                        background: '#fff',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        border: '1px solid #e5e7eb',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.borderColor = '#667eea';
                        e.target.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.borderColor = '#e5e7eb';
                        e.target.style.transform = 'translateX(0)';
                      }}
                    >
                      <h4 style={{
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        color: '#1f2937',
                        margin: '0 0 0.25rem 0'
                      }}>
                        {slide.title}
                      </h4>
                      <p style={{
                        fontSize: '0.75rem',
                        color: '#6b7280',
                        margin: 0,
                        lineHeight: '1.3'
                      }}>
                        {slide.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryView;