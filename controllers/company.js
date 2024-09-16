import Company from "../models/company.model.js";

const addCompnay = async (req, res) => {
    const { name, code } = req.body;
   
    const createdComapny = await Company.create({ name, code })
    if (createdComapny) {
        return res.status(201).json({
            msg: "company added successfully",
            createdComapny
        })
    }
}
const getCompany = async (req, res) => {
    const foundComapy = await Company.find();
    return res.status(200).json({
        foundComapy
    })
}
export { addCompnay, getCompany };