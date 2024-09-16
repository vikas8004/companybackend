import { Schema, model } from "mongoose";

const companySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true,
        unique: true
    }
});

const Company = model("Company", companySchema);
export default Company;