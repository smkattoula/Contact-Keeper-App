const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../../models/User");
const Contact = require("../../models/Contact");

// Route: GET api/contacts
// Description: Get all of a specific users contacts
// Access: Private
router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Route: POST api/contacts
// Description: Add a new contact
// Access: Private
router.post("/", auth, (req, res) => {
  res.send("Add a new contact");
});

// Route: PUT api/contacts/:id
// Description: Update a contact
// Access: Private
router.put("/:id", auth, (req, res) => {
  res.send("Update a contact");
});

// Route: DELETE api/contacts/:id
// Description: Delete a contact
// Access: Private
router.delete("/:id", auth, (req, res) => {
  res.send("Delete a contact ");
});

module.exports = router;
