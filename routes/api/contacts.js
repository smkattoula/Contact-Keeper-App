const express = require("express");
const router = express.Router();

// Route: GET api/contacts
// Description: Get all of a specific users contacts
// Access: Private
router.get("/", (req, res) => {
  res.send("Get all contacts for a specific user");
});

// Route: POST api/contacts
// Description: Add a new contact
// Access: Private
router.post("/", (req, res) => {
  res.send("Add a new contact");
});

// Route: PUT api/contacts/:id
// Description: Update a contact
// Access: Private
router.put("/:id", (req, res) => {
  res.send("Update a contact");
});

// Route: DELETE api/contacts/:id
// Description: Delete a contact
// Access: Private
router.delete("/:id", (req, res) => {
  res.send("Delete a contact ");
});

module.exports = router;
