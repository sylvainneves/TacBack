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
    activite: Joi.string().min(6).required(),
    reservationDate: Joi.string().min(6).required().isoDate(),
    reservationHour: Joi.string().min(6).required().isoDate(),
    /*     date: Joi.string().min(6).required().isoDate(), */
    userId: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

module.exports.reservationValidation = reservationValidation;
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
