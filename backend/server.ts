import express from "express";

const app = express();

app.get("/", function (req, res) {
  res.json({
    message: "recieved"
  })
});

app.listen(3000, function () {
  console.log("listening on port 3000");
});