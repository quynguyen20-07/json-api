// const jsonServer = require("json-server");
// const server = jsonServer.create();
// const router = jsonServer.router("db.json");
// const middlewares = jsonServer.defaults();

// server.use(middlewares);

// server.use("/api", router);

// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => {
//   console.log(`JSON Server is running on port ${PORT}`);
// });

const express = require("express");
const app = express();
const PORT = 4000;

app.get("/home", (req, res) => {
  res.status(200).json("Welcome, your app is working well");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Export the Express API
module.exports = app;
