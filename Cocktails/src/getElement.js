const getElement = (selection) => {
    const el = document.querySelector(selection);
    if (el) return el;
    throw new Error("No element selected");
};

export default getElement;