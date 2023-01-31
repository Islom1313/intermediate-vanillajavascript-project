import get from "./utils/getElement.js";

const URL = "https://randomuser.me/api/";

const img = get(".user-img");
const title = get(".user-title");
const value = get(".user-value");
const btn = get(".btn");
const btns = [...document.querySelectorAll(".icon")];
console.log(btns);

const getUser = async() => {
    const response = await fetch(URL);
    const data = await response.json();
    // destructur function
    const person = data.results[0];
    console.log(person);
    const { phone, email } = person;
    const { large: img } = person.picture;
    const { password } = person.login;
    const { firstN, lastN } = person;
    const {
        dob: { age },
    } = person;
    const {
        street: { name, number },
    } = person.location;

    return {
        phone,
        email,
        img,
        password,
        firstN,
        lastN,
        dob: `${age}`,
        street: `${(name, number)}`,
    };
};
const showUser = async() => {
    // get user from api
    const person = await getUser();
    console.log(person);
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);