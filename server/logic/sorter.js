const sorter = str =>
  str
    .split("")
    .sort()
    .reverse()
    .join("");
module.exports = {
  sorter
};
