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

    const renderSlideContent = (points) => {
        let output = [];
        let buffer = [];
        let inCode = false;

        for (let i = 0; i < points.length; i++) {
            const line = points[i];
            if (isCode(line)) {
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
                            <code>{buffer.join("\n")}</code>
                        </pre>
                    );
                    inCode = false;
                }
            } else if (inCode) {
                buffer.push(line);
            } else {
                output.push(
                    <li
                        key={`text-${i}`}
                        style={{
                            fontSize: "1rem",
                            marginBottom: "0.75rem",
                            lineHeight: "1.65",
                            color: "#374151"
                        }}
                    >
                        {line}
                    </li>
                );
            }
        }

        return (
            <ul style={{ paddingLeft: "1.25rem", marginTop: "1rem", listStyleType: "disc" }}>
                {output}
            </ul>
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