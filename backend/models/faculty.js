import mongoose from "mongoose";

const facultySchema = new mongoose.Schema({
    name: String, employeeId: String, department: String
});

const Faculty = mongoose.model("Faculty", facultySchema)

export default Faculty;