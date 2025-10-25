import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/user.routes";

dotenv.config();

const app: Express = express();

// Important: ensure you add JSON middleware to process incoming JSON POST payloads.
app.use(express.json({ limit: "15mb" }));
app.use(express.urlencoded({ extended: true, limit: "15mb" }));
app.use(cookieParser());



app.use(cors());

// Health check / root route so Fly's proxy and browsers get a 200 OK
app.get('/', (_req, res) => {
  res.status(200).send('OK');
});

app.use("/api", userRoutes);

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server running on port http://localhost:${process.env.PORT || 4000}`);
})


