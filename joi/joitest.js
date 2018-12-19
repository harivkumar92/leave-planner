import Joi from "joi";
import objSchema from "./joiexp";

const testObj = {
    name: "hari",
    empId: "A101",
    phone: "9600"
};

/*
const tempRes = Joi.validate(testObj, testSchema, (err, value) => {
    if (err == null) {
        console.log("passed");
    }
    else {
        console.log("failed");
    }
})
*/

console.log({testObj});

objSchema.test2.validate( testObj, (err, value) => {
    if(err == null) {
        console.log("passed");
    }
    else{
        console.log("failed");
    }
});

