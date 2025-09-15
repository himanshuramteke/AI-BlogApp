import express from "express";
import { PORT } from "./config/serverConfig.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Express server is Running");
});

app.listen(PORT, () => {
  console.log(`server is running on PORT: ${PORT}`);
});
