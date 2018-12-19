import express from 'express';
import admin from "./api/admin/route";

const router = express.Router();


router.use("/admin", admin);


export default router;