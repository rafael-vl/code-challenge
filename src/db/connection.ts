import * as dotenv from "dotenv";
import { Dialect } from "sequelize";
import { Sequelize } from "sequelize-typescript";

import { Robot } from "./models/robot.model";

dotenv.config();

const DATABASE_PORT: number = parseInt(process.env.DATABASE_PORT as string);
const DATABASE_DIALECT: Dialect = process.env.DATABASE_DIALECT as Dialect;

const connection = new Sequelize({
  dialect: DATABASE_DIALECT,
  host: process.env.DATABASE_HOST,
  port: DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  logging: false,
  models: [Robot],
});

export default connection;
