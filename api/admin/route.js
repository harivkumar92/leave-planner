import express from "express";
import controller from "./controller";

const router = express.Router();

router
    .route("/")
    .post((req, res, next) => {
        const formBody = req.body;
        console.log("inside route.js");
        controller(formBody, (leave) => {
            console.log("Final leave: ", leave);
            if (leave < 0){
                leave = leave * -1;
            }
            const leaveobj = {
                leave: leave
            }
            res.send(leaveobj);
        });
        /*
        if(leave < 0){
            leave = leave * -1;
            const html = `Leave application has been verified. You will have ${leave} days of unpaid leaves`;
            res.send(html);
            console.log(html);
        } else {
            const html ="display";
            console.log(html);
        }*/
        
    });

export default router;
    