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
            }
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [slides.length]);

    const isCode = (line) => line.trim().startsWith("```");
    const isTable = (line) => line.trim().startsWith("```table");
    
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
                                background: "#f4f4f5",
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
                                        {line}
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
                    maxWidth: "960px",
                    width: "100%",
                    background: "#fff",
                    borderRadius: "16px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    padding: "2.5rem 3rem"
                }}
            >
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

                {renderSlideContent(slide.points)}

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

                    <span style={{ fontSize: "0.875rem", color: "#6b7280" }}>
                        {current + 1} / {slides.length}
                    </span>

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