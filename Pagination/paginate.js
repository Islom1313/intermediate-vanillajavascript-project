const paginate = (followers) => {
  //   console.log(followers);
  const itemsPerpage = 10;
  const numberOfPages = Math.ceil(followers.length / itemsPerpage);
  const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerpage;
    return followers.slice(start, start + itemsPerpage);
  });
  return newFollowers;
};

export default paginate;
