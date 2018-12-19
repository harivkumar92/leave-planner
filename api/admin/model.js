import mongoose from "mongoose";   

const Schema = mongoose.Schema;
const LeaveSchema = Schema({
    name: String,
    id: Number,
    avail_leave: Number,
    from_date: Date,
    to_date: Date,
    reason: String
});
const Leave = mongoose.model('Leave', LeaveSchema);

export default Leave;