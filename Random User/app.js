import get from "./utils/getElement.js";
import getUser from "./utils/fetchUser.js";

const img = get(".user-img");
const value = get(".user-value");
const title = get(".user-title");
const btn = get(".btn");
const btns = [...document.querySelectorAll(".icon")];

const displayUser = (person) => {
    img.src = person.img;
    value.textContent = person.name;
    title.textContent = `My name is`;
    btns[0].classList.add("active");
    btns.forEach((btn) => {
        const label = btn.dataset.label;
    });
};
const showUser = async() => {
    // get user from api
    const person = await getUser();
    displayUser(person);
    console.log(person);
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);