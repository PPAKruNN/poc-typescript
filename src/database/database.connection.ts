import { ConnectionConfig, Pool } from "pg";
import Dotenv from "dotenv";
Dotenv.config();

const config: ConnectionConfig = {
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === "PRODUCTION" ? true : false,
};

const db = new Pool(config);

export { db };
