const express = require("express");
const app = express();
const PORT = 9090;

app.get("/", (req, res) => {
  res.send("Welcome to Sofon, hail trisolaris! ");
});

app.post("/", (req, res) => {
  res.send("Sofon POST");
});

app.listen(PORT, function () {
  console.log(`Server Listening on ${PORT}`);
});
