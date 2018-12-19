import Joi from "joi";


async function validate(body) {
    console.log("inside validator.js");
    const validateSchema = Joi.object().keys({
        name: Joi.string(),
        empId: Joi.number(),
        leaveType: Joi.string(),
        paidLeave: Joi.number(),
        fromDate: Joi.date(),
        toDate: Joi.date()
    });
    const result = Joi.validate(body, validateSchema, (err, value) => {
            if(err == null) {
                console.log("validation passed");
                return 1;
            }
            else{
                console.log("validation failed");
                return 0;
            }
        });
        console.log("result: ", result);
    return result;
}

export default validate;
