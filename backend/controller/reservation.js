const { ErrorHandler } = require("../error/error");
const resivationModel = require("../model/reservation.model");
const validator = require("validator");

const sendResivation = async (req, res, next) => {
  const { firstname, lastname, email, phone, time, date } = req.body;

  // Empty check
  if (!firstname || !lastname || !email || !phone || !time || !date) {
    return next(new ErrorHandler("All fields are required", 400));
  }

  // Email validation
  if (!validator.isEmail(email)) {
    return next(new ErrorHandler("Invalid email format", 400));
  }

  // Phone number validation (must be 10 digits only)
  if (!/^[0-9]{10}$/.test(phone)) {
    return next(new ErrorHandler("Phone number must be 10 digits", 400));
  }

  try {
    const saved = await resivationModel.create({
      firstname,
      lastname,
      email,
      phone,
      time,
      date,
    });
    res.status(200).json({ message: "Reservation successful", saved });
  } catch (error) {
    next(error);
  }
};

module.exports = sendResivation;
