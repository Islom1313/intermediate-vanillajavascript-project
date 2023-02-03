import get from "./getElement.js";

const displayDrinks = ({ drinks }) => {
    const section = get(".section-center");
    const title = get(".title");
    if (!drinks) {
        title.textContent = "sorry, no drinks matched to your search";
        section.innerHTML = null;
        return;
    }

    const newDrink = drinks
        .map((drink) => {
            return `<a href="./drink.html">
        <article class="cocktail" data-id="i">
            <img src="./cocktail.jpg" alt="cocktail" />
            <h3>martini</h3>
        </article>
    </a>`;
        })
        .join("");
    // hide loading
    title.textContent = "";
    section.innerHTML = newDrink;
};

export default displayDrinks;