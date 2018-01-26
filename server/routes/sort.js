const express = require("express");
const { strSorter } = require("../actions/sortCtrl");

const router = express.Router();
router.post("/", strSorter);

module.exports = router;
