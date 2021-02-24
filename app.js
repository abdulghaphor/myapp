const express = require("express");
let cookies = require("./cookies");
const cors = require("cors");
const app = express();

app.use(cors());
app.get("/", (req, res) => {
  res.json({ message: "hello world" });
});
app.delete("/cookies/:cookieId", (req, res) => {
  const { cookieId } = req.params || 0;
  cookies.find((cv) => cv.id === +cookieId)
    ? ((cookies = cookies.filter((cv) => cv.id !== +cookieId)),
      res.status(204).end())
    : res.status(404).json({ message: "Cookie not found" });
});
app.get("/cookies", (req, res) => {
  res.json(cookies);
});

app.listen(8000, () => console.log("listening on 8000"));
