const express = require("express");
const router = express.Router();

const sendResivation = require("../controller/reservation");

router.post("/send", sendResivation);

module.exports = router;
