import express from 'express'
import { addCompnay, getCompany } from '../controllers/company.js';

const comapnyRouter = express.Router();

comapnyRouter.route("/add").post(addCompnay);
comapnyRouter.route("/get").get(getCompany);


export default comapnyRouter;