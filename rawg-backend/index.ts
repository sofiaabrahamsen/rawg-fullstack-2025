import express from "express";
import init from "./startup/init";

const app = express();

init(app);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
