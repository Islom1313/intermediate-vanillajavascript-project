const url = "https://course-api.com/javascript-store-single-product";
const productsDOM = document.querySelector(".product");

const fetchProduct = async() => {
    try {
        productsDOM.innerHTML = `<h4 class="product-loading">Loading...<h4/>`;
        const param = new URLSearchParams(window.location.search);
        const id = param.get("id");
        const response = await fetch(`${url}?id=${id}`);
        const data = response.json();
        return data;
    } catch (error) {
        productsDOM.innerHTML = `<p class="error">An error found, please try again<p/>`;
    }
};

const displayProduct = (product) => {
    console.log(product);
};

const start = async() => {
    const data = await fetchProduct();
    console.log(data);
};

start();