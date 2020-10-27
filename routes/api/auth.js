const express = require("express");
const router = express.Router();

// Route: GET api/auth
// Description: Get logged in user
// Access: Private
router.get("/", (req, res) => {
  res.send("Get logged in user");
});

// Route: POST api/auth
// Description: Authenticate user and get token
// Access: Public
router.post("/", (req, res) => {
  res.send("Login the user");
});

module.exports = router;
