import React from "react";
import SlideViewer from "./SlideViewer";
import { completableFutureSlides } from "./completableFutureSlides";

const CompletableFutureSlides = () => {
    return <SlideViewer slides={completableFutureSlides} />;
};

export default CompletableFutureSlides;
