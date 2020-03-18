export default name => {
  return name
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-'); // Replace spaces with -
};
