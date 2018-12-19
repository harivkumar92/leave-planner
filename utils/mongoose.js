import mongoose from 'mongoose';

function mongoConnect() {
     mongoose.connect('mongodb://localhost:27017/employeedb', { useNewUrlParser: true}, 
     (err) => { 
         if(err) {
        console.log("Error: ", err);
    } else {
        console.log("MongoDB connection established");
    }
});
}


export default mongoConnect;