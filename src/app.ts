import Express, { json } from "express";
import Dotenv from "dotenv";
import cors from "cors";

Dotenv.config();
const app = Express();

app.use(cors());
app.use(json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server initialized on port: ", PORT);
});
