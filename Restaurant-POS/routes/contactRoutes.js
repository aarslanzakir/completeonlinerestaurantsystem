// routes/reservationRoutes.js
const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

router.get("/get-contact", contactController.getAllContacts);
router.post("/add-contact", contactController.createContact);

module.exports = router;
