import express from "express";
import { config } from "dotenv";
import ErrorMiddleware from "./middlewares/Error.js";
import cookieParser from "cookie-parser";
config({
  path: "./.env",
});

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());

import course from "./routes/courseRoutes.js";
import user from "./routes/userRoutes.js";
import payment from "./routes/paymentRoute.js";

app.use("/api/v1", course);
app.use("/api/v1", user);
app.use("/api/v1", payment);

export default app;

app.use(ErrorMiddleware);
