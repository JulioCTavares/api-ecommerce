import { celebrate, Joi, Segments } from "celebrate";

export const loginClientValidate = celebrate({
  [Segments.BODY]: {
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  },
});

export const createCLientValidate = celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    email: Joi.string().email().trim().lowercase().required(),
    password: Joi.string().required(),
    phone: Joi.string().required().min(8).max(11),
    address: Joi.string().required(),
  },
});

export const showClientValidate = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  },
});

export const deleteCLientValidate = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  },
});
