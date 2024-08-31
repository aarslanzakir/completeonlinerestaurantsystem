// models/reservation.js
const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  date: Date,
  time: String,
  guests: Number,
});

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;
