import express from "express"
import dotenv from "dotenv";
import cors from "cors"
import connectDB from "./connections/dbConnection";
import router from "./routes/route";

dotenv.config();

const app = express();

//Middleware in Express - it run during the request-response cycle ->Json to javascript object
app.use(express.json());

app.use(cors());

connectDB();

//Server Check
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "Server is running" });
});

app.use("/", router)

export default app