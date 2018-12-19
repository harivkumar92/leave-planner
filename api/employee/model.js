import mongoose from "mongoose";   

const Schema = mongoose.Schema;

const EmployeeSchema = Schema({
    name: String,
    id: Number,
    leave: Number
});
    
export default mongoose.model("Employee", EmployeeSchema);