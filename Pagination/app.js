import fetchFollowers from "./fetchFollowers.js";
import displayFollowers from "./displayFollowers.js";
import paginate from "./paginate.js";
import displayButtons from "./displayFollowers.js";

const title = document.querySelector(".section-title h1");
const init = async () => {
  const followers = await fetchFollowers();
  displayFollowers(paginate(followers)[0]);
  title.textContent = "pagination";
  const pages = paginate(followers);
};

window.addEventListener("load", init);
