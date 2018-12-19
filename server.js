import app from "./express";
import db from "./utils/mongoose"


const conn = app.listen(3000, () => {
    console.log("server started on port 3000");
    //Establish MongoDB connection
    db();
    return conn;
});

export { app, conn };