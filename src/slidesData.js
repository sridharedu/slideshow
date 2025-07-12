

export const loadSlideDecks = async () => {
    const module = await import('./utils/slideDecks.js');
    return module.slideDecks;
};

export const loadSlides = async (dataFile) => {
    const module = await import(`./data/${dataFile}.js`);
    return module[dataFile];
};