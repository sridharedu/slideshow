import React, { useState, useEffect } from "react";

const SlideViewer = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const slide = slides[current];

    useEffect(() => {
        const handleKey = (e) => {
            if (["ArrowRight", " ", "d"].includes(e.key)) {
                e.preventDefault();
                setCurrent((c) => Math.min(c + 1, slides.length - 1));
            } else if (["ArrowLeft", "a"].includes(e.key)) {
                e.preventDefault();
                setCurrent((c) => Math.max(c - 1, 0));
            } else if (e.key >= '1' && e.key <= '9') {
                const slideNum = parseInt(e.key) - 1;
                if (slideNum < slides.length) {
                    setCurrent(slideNum);
                }
            }
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [slides.length]);

    const isCode = (line) => line.trim().startsWith("```");
    const isTable = (line) => line.trim().startsWith("```table");
    
    const renderKeepInMindContent = (content) => {
        if (!content) return "Notes and tips will appear here";
        
        const lines = content.split('\n').filter(line => line.trim());
        return lines.map((line, index) => {
            const trimmedLine = line.trim();
            if (trimmedLine.startsWith('•')) {
                return (
                    <div key={index} style={{ 
                        marginBottom: '0.5rem',
                        paddingLeft: '0.5rem',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.5rem'
                    }}>
                        <span style={{ color: '#667eea', fontWeight: 'bold' }}>•</span>
                        <span>{parseTextFormatting(trimmedLine.substring(1).trim())}</span>
                    </div>
                );
            }
            return (
                <div key={index} style={{ marginBottom: '0.5rem' }}>
                    {parseTextFormatting(trimmedLine)}
                </div>
            );
        });
    };
    
    const highlightSyntax = (line) => {
        if (line.trim().startsWith('#')) return line;
        
        const tokens = [];
        let remaining = line;
        let key = 0;
        
        while (remaining) {
            // Check for strings first
            const stringMatch = remaining.match(/^(.*?)("[^"]*"|'[^']*')/);
            if (stringMatch && stringMatch[1] !== remaining) {
                if (stringMatch[1]) tokens.push(stringMatch[1]);
                tokens.push(<span key={key++} style={{color: '#16a34a'}}>{stringMatch[2]}</span>);
                remaining = remaining.slice(stringMatch[0].length);
                continue;
            }
            
            // Check for comments
            const commentMatch = remaining.match(/^(.*?)(\/\/.*)$/);
            if (commentMatch && commentMatch[1] !== remaining) {
                if (commentMatch[1]) tokens.push(commentMatch[1]);
                tokens.push(<span key={key++} style={{color: '#6b7280'}}>{commentMatch[2]}</span>);
                break;
            }
            
            // Check for annotations
            const annotationMatch = remaining.match(/^(.*?)(@[A-Za-z][A-Za-z0-9]*)/);
            if (annotationMatch && annotationMatch[1] !== remaining) {
                if (annotationMatch[1]) tokens.push(annotationMatch[1]);
                tokens.push(<span key={key++} style={{color: '#ea580c'}}>{annotationMatch[2]}</span>);
                remaining = remaining.slice(annotationMatch[0].length);
                continue;
            }
            
            // Check for method calls
            const methodMatch = remaining.match(/^(.*?)(\.[a-zA-Z][a-zA-Z0-9]*\()/);
            if (methodMatch && methodMatch[1] !== remaining) {
                if (methodMatch[1]) tokens.push(methodMatch[1]);
                tokens.push(<span key={key++} style={{color: '#dc2626'}}>{methodMatch[2]}</span>);
                remaining = remaining.slice(methodMatch[0].length);
                continue;
            }
            
            // Check for keywords
            const keywordMatch = remaining.match(/^(.*?)\b(public|private|protected|static|final|class|interface|extends|implements|import|package|return|if|else|for|while|try|catch|finally|new|this|super|void|int|String|boolean|double|float|long|short|byte|char)\b/);
            if (keywordMatch && keywordMatch[1] !== remaining) {
                if (keywordMatch[1]) tokens.push(keywordMatch[1]);
                tokens.push(<span key={key++} style={{color: '#7c3aed'}}>{keywordMatch[2]}</span>);
                remaining = remaining.slice(keywordMatch[0].length);
                continue;
            }
            
            // Check for class names
            const classMatch = remaining.match(/^(.*?)\b([A-Z][a-zA-Z0-9]*)\b/);
            if (classMatch && classMatch[1] !== remaining) {
                if (classMatch[1]) tokens.push(classMatch[1]);
                tokens.push(<span key={key++} style={{color: '#059669'}}>{classMatch[2]}</span>);
                remaining = remaining.slice(classMatch[0].length);
                continue;
            }
            
            // No matches, add remaining text
            tokens.push(remaining);
            break;
        }
        
        return tokens;
    };
    
    const parseTextFormatting = (text) => {
        if (text.trim().startsWith('#')) {
            return (
                <span style={{ color: '#9ca3af', opacity: 0.7 }}>
                    {text}
                </span>
            );
        }
        
        let result = [];
        let remaining = text;
        let key = 0;
        
        while (remaining) {
            const boldMatch = remaining.match(/^(.*?)\*\*(.*?)\*\*/);
            const codeMatch = remaining.match(/^(.*?)`([^`]+)`/);
            
            if (boldMatch && (!codeMatch || boldMatch.index <= codeMatch.index)) {
                if (boldMatch[1]) result.push(boldMatch[1]);
                result.push(<strong key={key++}>{boldMatch[2]}</strong>);
                remaining = remaining.slice(boldMatch[0].length);
            } else if (codeMatch) {
                if (codeMatch[1]) result.push(codeMatch[1]);
                result.push(
                    <code key={key++} style={{
                        background: '#f3f4f6',
                        padding: '0.125rem 0.25rem',
                        borderRadius: '0.25rem',
                        fontSize: '0.875em',
                        fontFamily: 'Fira Code, monospace'
                    }}>
                        {codeMatch[2]}
                    </code>
                );
                remaining = remaining.slice(codeMatch[0].length);
            } else {
                result.push(remaining);
                break;
            }
        }
        
        return result;
    };

    const renderSlideContent = (points) => {
        let output = [];
        let buffer = [];
        let inCode = false;
        let inTable = false;

        for (let i = 0; i < points.length; i++) {
            const line = points[i];
            if (isTable(line)) {
                inTable = true;
                buffer = [];
            } else if (inTable && line.trim() === "```") {
                const rows = buffer.filter(row => row.trim());
                const [header, ...dataRows] = rows;
                
                output.push(
                    <table
                        key={`table-${i}`}
                        style={{
                            width: "100%",
                            borderCollapse: "collapse",
                            marginBottom: "1.25rem",
                            border: "1px solid #e2e8f0",
                            borderRadius: "8px",
                            overflow: "hidden"
                        }}
                    >
                        <thead>
                            <tr style={{ background: "#f8fafc" }}>
                                {header.split('|').map((cell, idx) => (
                                    <th key={idx} style={{
                                        padding: "0.75rem",
                                        textAlign: "left",
                                        fontWeight: "600",
                                        borderBottom: "2px solid #e2e8f0"
                                    }}>
                                        {cell.trim()}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {dataRows.map((row, rowIdx) => (
                                <tr key={rowIdx}>
                                    {row.split('|').map((cell, cellIdx) => (
                                        <td key={cellIdx} style={{
                                            padding: "0.75rem",
                                            borderBottom: "1px solid #f1f5f9"
                                        }}>
                                            {cell.trim()}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                );
                inTable = false;
            } else if (isCode(line)) {
                if (!inCode) {
                    inCode = true;
                    buffer = [];
                } else {
                    output.push(
                        <pre
                            key={`code-${i}`}
                            style={{
                                background: "#fafbfc",
                                padding: "1.25rem",
                                borderRadius: "8px",
                                fontSize: "0.9rem",
                                overflowX: "auto",
                                fontFamily: "Fira Code, monospace",
                                border: "1px solid #e2e8f0",
                                marginBottom: "1.25rem"
                            }}
                        >
                            <code>
                                {buffer.map((line, idx) => (
                                    <div key={idx} style={{
                                        color: line.trim().startsWith('#') ? '#6b7280' : 'inherit'
                                    }}>
                                        {highlightSyntax(line)}
                                    </div>
                                ))}
                            </code>
                        </pre>
                    );
                    inCode = false;
                }
            } else if (inCode || inTable) {
                buffer.push(line);
            } else {
                output.push(
                    <div key={`text-${i}`} style={{
                        fontSize: "1rem",
                        marginBottom: "0.75rem",
                        lineHeight: "1.65",
                        color: "#374151",
                        paddingLeft: "1.25rem"
                    }}>
                        • {parseTextFormatting(line)}
                    </div>
                );
            }
        }

        return (
            <div style={{ marginTop: "1rem" }}>
                {output}
            </div>
        );
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "linear-gradient(to right, #667eea, #764ba2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem"
            }}
        >
            <div
                style={{
                    maxWidth: "1200px",
                    width: "100%",
                    background: "#fff",
                    borderRadius: "16px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    padding: "2.5rem 3rem",
                    position: "relative"
                }}
            >
                <div style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1.5rem",
                    fontSize: "0.875rem",
                    color: "#6b7280",
                    background: "#f9fafb",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "12px",
                    border: "1px solid #e5e7eb"
                }}>
                    {current + 1} / {slides.length}
                </div>
                <h2
                    style={{
                        fontSize: "1.75rem",
                        fontWeight: "700",
                        marginBottom: "1.5rem",
                        color: "#1f2937"
                    }}
                >
                    {slide.title}
                </h2>

                <div style={{ display: "flex", gap: "2rem" }}>
                    <div style={{ flex: "2" }}>
                        {renderSlideContent(slide.points)}
                    </div>
                    <div style={{ 
                        flex: "1", 
                        padding: "1.5rem", 
                        alignSelf: "flex-start",
                        height: "fit-content"
                    }}>
                        <h4 style={{
                            fontSize: "0.9rem",
                            fontWeight: "600",
                            color: "#495057",
                            marginBottom: "1rem",
                            borderBottom: "2px solid #dee2e6",
                            paddingBottom: "0.5rem",
                            lineHeight: "1.4"
                        }}>
                            💡 {slide.keepInMind ? parseTextFormatting(slide.keepInMind) : "Tips will appear here"}
                        </h4>

                    </div>
                </div>

                {slide.note && (
                    <div
                        style={{
                            marginTop: "1.75rem",
                            padding: "1rem 1.25rem",
                            background: "#fef3c7",
                            color: "#92400e",
                            fontSize: "0.95rem",
                            borderLeft: "4px solid #f59e0b",
                            borderRadius: "6px"
                        }}
                    >
                        📝 <strong>Note:</strong> {slide.note}
                    </div>
                )}

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: "2rem"
                    }}
                >
                    <button
                        onClick={() => setCurrent((c) => Math.max(c - 1, 0))}
                        disabled={current === 0}
                        style={{
                            background: current === 0 ? "#e5e7eb" : "#667eea",
                            color: current === 0 ? "#9ca3af" : "#fff",
                            border: "none",
                            padding: "0.6rem 1.2rem",
                            borderRadius: "999px",
                            cursor: current === 0 ? "not-allowed" : "pointer"
                        }}
                    >
                        ← Prev
                    </button>

                    <div style={{ display: "flex", gap: "0.25rem" }}>
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                style={{
                                    width: "2rem",
                                    height: "2rem",
                                    borderRadius: "50%",
                                    border: "1px solid #d1d5db",
                                    background: current === index ? "#667eea" : "#fff",
                                    color: current === index ? "#fff" : "#6b7280",
                                    fontSize: "0.75rem",
                                    cursor: "pointer",
                                    display: index < 9 ? "flex" : "none",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => setCurrent((c) => Math.min(c + 1, slides.length - 1))}
                        disabled={current === slides.length - 1}
                        style={{
                            background: current === slides.length - 1 ? "#e5e7eb" : "#667eea",
                            color: current === slides.length - 1 ? "#9ca3af" : "#fff",
                            border: "none",
                            padding: "0.6rem 1.2rem",
                            borderRadius: "999px",
                            cursor: current === slides.length - 1 ? "not-allowed" : "pointer"
                        }}
                    >
                        Next →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SlideViewer;