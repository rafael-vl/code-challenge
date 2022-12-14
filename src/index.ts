import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { robotsRouter } from "./robots/robots.router";
import connection from "./db/connection";

dotenv.config();

if (!process.env.PORT) {
  console.error("PORT env variable was not defined");
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/v1/robots", robotsRouter);

const start = async (): Promise<void> => {
  try {
    await connection.authenticate();
    app.listen(PORT, () => {
      console.log("Server started");
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

void start();
