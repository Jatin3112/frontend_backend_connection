import "dotenv/config";
import express from "express";
import cors from "cors";
const app = express();

// app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/server", (req, res) => {
  res.send("Hello From SERVER");
});

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});
