// routes/reservationRoutes.js
const express = require("express");
const router = express.Router();
const reservationController = require("../controllers/reservationController");

router.get("/get-reservation", reservationController.getAllReservations);
router.post("/add-reservation", reservationController.createReservation);

module.exports = router;
