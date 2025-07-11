import React from "react";
import SlideViewer from "./SlideViewer";
import { objectsInJavaSlides } from "./objectsInJavaSlidesData";

const ObjectsInJavaSlides = () => {
    return <SlideViewer slides={objectsInJavaSlides} />;
};

export default ObjectsInJavaSlides;