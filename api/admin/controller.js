import validator from "./validator";
import leave from "./model";
import checkId from "./service";
import updateDoc from "../employee/service";
import getDoc from "../employee/common-service";

async function authorize(body, callback) {
    //Validate body
    console.log("inside controller");
    const validate = await validator(body);
    var leaveUpdate;
    if( validate == 1 ) {
        //res returns if ID is 1 or 0
        let check = await checkId(body);
        if( check == 1 ){
            const doc = await getDoc(body);
            console.log("leave value in database is: ", doc.leave);
            console.log("leave value from request is: ", body.paidLeave);
            leaveUpdate = doc.leave - body.paidLeave;
            console.log("leaveUpdate value: ", leaveUpdate);
            if(leaveUpdate < 0){ 
                const leaveZero = 0;
                 updateDoc(body.empId, leaveZero);
            } else {
                 updateDoc(body.empId, leaveUpdate);
            }
        }
    }
    else if( validate == 0 ) {
        console.log("i got 0");
    }
    callback(leaveUpdate);
}

export default authorize;