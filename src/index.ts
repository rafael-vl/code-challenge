import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import connection from "./db/connection";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

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

