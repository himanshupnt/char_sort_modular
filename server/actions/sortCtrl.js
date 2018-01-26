const { sorter } = require("../logic/sorter");

const strSorter = (req, res, next) => {
  const { unsorted } = req.body;
  const sorted = sorter(unsorted);
  res.send({ sorted });
  next();
};
module.exports = {
  strSorter
};
