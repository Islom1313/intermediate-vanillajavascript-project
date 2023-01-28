const url = "https://icanhazdadjoke.com/";

const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", () => {
    // console.log("hi");
    fetchDataJoke();
});

const fetchDataJoke = async() => {
    result.textContent = "Loading...";
    try {
        const response = await fetch(url, {
            headers: {
                Accept: "application/json",
                "User-Agent": "learning app",
            },
        });

        if (!response.ok) {
            throw new Error("Error");
        }
        const data = await response.json();
        result.textContent = data.joke;
    } catch (error) {
        result.textContent = "Error....";
    }
};

fetchDataJoke();