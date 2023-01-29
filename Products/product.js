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
    const {
        company,
        colors,
        description,
        name: title,
        price,
        image,
    } = product.fields;
    const { url: img } = product.fields.image[0];
    document.title = title.toUpperCase();

    // colors

    productsDOM.innerHTML = `<div class="product-wrapper">
    <img src="${img}" class="img" alt="${title}" />
    <div class="product-info">
        <h3>${title}</h3>
        <h5>${company}</h5>
        <span>$${price / 100}</span>
        <div class="colors">
            <span class="product-color"></span>
            <span class="product-color" style="background: red"></span>
        </div>
        <p>
            ${description}
        </p>
        <button class="btn">add to cart</button>
    </div>
</div>`;
};

const start = async() => {
    const data = await fetchProduct();
    displayProduct(data);
};

start();