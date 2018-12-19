import Employee from "./model";

function updateDoc(id, leave){
    console.log("inside updateDoc");
    Employee.findOneAndUpdate( { id: id }, { leave: leave}, { new: true }, (err, res) => {
        if(err){
            console.log("Error while updating");
        } else{
            console.log("Updated Document: ", res);
        }
    } );
}

export default updateDoc;