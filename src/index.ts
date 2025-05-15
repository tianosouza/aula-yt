import express from "express";
import { config } from "dotenv";

config();

const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Bem-vindo ao servidor Express!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
