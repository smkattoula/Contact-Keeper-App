const express = require("express");
const router = express.Router();

// Route: POST api/users
// Description: Register a new user
// Access: Public
router.post("/", (req, res) => {
  res.send("Register a user");
});

module.exports = router;
