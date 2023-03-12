import fetchFollowers from "./fetchFollowers.js";
import displayFollowers from "./displayFollowers.js";
import paginate from "./paginate.js";
import displayButtons from "./displayFollowers.js";

const init = async () => {
  const followers = await fetchFollowers();
  console.log(followers);
};

window.addEventListener("load", init);
