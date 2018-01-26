const express = require("express");
const multer = require("multer");
const { strSorter } = require("../actions/sortCtrl");

const upload = multer();
const router = express.Router();
router.post("/", strSorter);

module.exports = router;
