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

export default getUser;