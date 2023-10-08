const express = require("express");
const userRouter = require("./routers/user.router");

const app = express();

app.use(express.json());
app.use("/api", userRouter);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Welcome on port 5000");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});

module.exports = app;
