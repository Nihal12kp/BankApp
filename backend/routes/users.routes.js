const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.status(200).json({
    messege: "User requested",
  });
});

module.exports = router;
