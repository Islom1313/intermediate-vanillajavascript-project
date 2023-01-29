const url = "https://course-api.com/javascript-store-products";

const productsDom = document.querySelector("products-center");

const fetchProducts = async() => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};
fetchProducts();