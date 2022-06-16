import { celebrate, Joi, Segments } from "celebrate";

export const createProductValidate = celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    price: Joi.number().required(),
    image: File,
  },
});

export const showProductValidate = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  },
});

export const deleteProductValidate = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  },
});
