import express from "express"
import connect from "./db/connect.js";
import cors from "cors"
import comapnyRouter from "./routes/company.route.js";
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/v1/company", comapnyRouter);

app.listen(process.env.PORT, async () => {
    await connect();
    console.log(`your app is running on ${process.env.PORT}`);

})


