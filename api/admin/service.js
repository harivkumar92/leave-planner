import Employee from "../employee/model";
import updateDoc from "../employee/service";

async function checkId(body) {
    let name = body.name;
    let id = body.empId;
    let check = 0;

    const doc = await Employee.findOne({ name : name, id: id });
       /* if( doc == '' ){
            console.log("Result is empty");
            
            return 0;     
        } else {
            console.log("Document found: ", doc);
            return 1;
            //console.log("Leave: ", doc.leave);
            /*
            if( leave > doc.leave ){
                console.log("Employee has no available leaves left. Application denied");
                return "denied";
            }
            else if( leave <= doc.leave ){
                const leaveUpdate = doc.leave - leave;
                console.log("Updated leave is: ", leaveUpdate);
                updateDoc(id, leaveUpdate);
                return "approved";
            }*/
    if(doc == ''){
        console.log("Result is empty");
        check = 0;
    } else {
        console.log("Document Found: ", doc);
        check = 1;
    }
    return check;
}

export default checkId;