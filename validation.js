//VALIDATION

//REGISTER VALIDATION

const registerValidation = (data) => {
  const Joi = require("@hapi/joi");
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

const loginValidation = (data) => {
  const Joi = require("@hapi/joi");
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

// RESERVATION VALIDATION

const reservationValidation = (data) => {
  const Joi = require("@hapi/joi");
  const schema = Joi.object({
    dateReservation: Joi.string().min(6).required(),
    hourReservation: Joi.string().min(3).required(),
    dureeReservation: Joi.string().min(2).required(),
    userId: Joi.string().min(3).required(),
  });
  return schema.validate(data);
};

module.exports.reservationValidation = reservationValidation;
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
