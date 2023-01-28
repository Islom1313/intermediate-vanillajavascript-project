const url = "https://icanhazdadjoke.com/";

const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", () => {
    // console.log("hi");
    fetchDataJoke();
});

const fetchDataJoke = async() => {
    const response = await fetch(url, {
        headers: {
            Accept: "application/json",
            "User-Agent": "learning app",
        },
    });
    const data = await response.json();
    result.textContent = data.joke;
};

fetchDataJoke();