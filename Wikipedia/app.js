const url =
  "https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=";

const formDom = document.querySelector(".form");
const inputDom = document.querySelector(".form-input");
const resultDom = document.querySelector(".results");

formDom.addEventListener("submit", (e) => {
  e.preventDefault;

  const value = inputDom.value;

  if (!value) {
    resultDom.innerHTML = '<div class="error">please enter valid search </div>';
    return;
  }
  fetchPages(value);
});

const fetchPages = async (searchValue) => {
  console.log(searchValue);
};
