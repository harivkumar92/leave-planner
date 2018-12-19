import Joi from "joi";

export default {
  test : Joi.object({
    testObj: Joi.object({
        name: Joi.string().required(),
        empId: Joi.string().required(),
        phone: Joi.number().required() 
    })
}),

test2: Joi.object({
  name: Joi.string().required(),
  empId: Joi.string().required(),
  phone: Joi.number().required() 
})
};