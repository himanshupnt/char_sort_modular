const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sortRoute = require("./sort");
const root = require("./root");

const router = express.Router();

router.use(cors());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
// serve static files from client
router.use("/", root);

// mount sort routes
router.use("/sort", sortRoute);

module.exports = router;
