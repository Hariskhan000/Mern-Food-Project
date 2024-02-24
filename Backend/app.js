import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./Database/dbconnection.js";
import cors from "cors";
import { errorMiddleware } from "./Error/error.js";
import reservationRouter from "./Routes/reservations.js";
const app = express();

dotenv.config({ path: "./config/config.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dbConnection();
app.use(errorMiddleware);
app.use("/api/v1/reservation", reservationRouter);

export default app;
