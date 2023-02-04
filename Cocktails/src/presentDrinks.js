import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";

const showDrink = async(url) => {
    // fetch drink
    const data = await fetchDrinks(url);

    // display drink
    const section = displayDrinks(data);
    // console.log(section);
};

export default showDrink;