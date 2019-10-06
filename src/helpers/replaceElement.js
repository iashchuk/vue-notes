export const replaceElement = (element, array) => {
    const index = array.findIndex(item => item.id === element.id);

    return [...array.slice(0, index), element, ...array.slice(index + 1)];
};
