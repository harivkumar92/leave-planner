import mongoose from "mongoose";   
import Employee from "./api/employee/model";

const Schema = mongoose.Schema;

createEmployees();

async function createEmployees() {
mongoose.connect('mongodb://localhost:27017/employeedb', { useNewUrlParser: true}, 
(err) => { 
         if(err) {
        console.log("Error: ", err);
    } else {
        console.log("MongoDB connection established");
    }
});
    const EmployeeSchema = Schema({
        name: String,
        id: Number,
        leave: Number
    }); 
    const employees = [{
        name: "hari",
        id: "101",
        leave: "5"
    },
    {
        name: "kumar",
        id: "102",
        leave: "2"
    },
    {
        name: "vijayan",
        id: "103",
        leave: "10"
    }

];
   Employee.create(employees);
}