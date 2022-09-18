import * as Joi from "joi";

const schemas = {
  newRobot: Joi.object().keys({
    name: Joi.string().required(),
    numberOfArms: Joi.number().required(),
    model: Joi.string().required(),
    manufacturedBy: Joi.string(),
  }),
};

export default schemas;
