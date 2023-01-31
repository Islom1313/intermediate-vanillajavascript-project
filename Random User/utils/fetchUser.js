const URL = "https://randomuser.me/api/";

const getUser = async() => {
    const response = await fetch(URL);
    const data = await response.json();
    // destructur function
    const person = data.results[0];
    console.log(person);
    const { phone, email } = person;
    const { large: img } = person.picture;
    const { password } = person.login;
    const { first, last } = person.name;
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
        dob: `${age}`,
        street: `${name} ${number}`,
        name: `${first} ${last}`,
    };
};
export default getUser;