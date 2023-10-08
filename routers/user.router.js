// routers/user.router.js
const express = require("express");
const userController = require("../controllers/user.controller");

const router = express.Router();

router.post("/users", userController.createUsers);
router.get("/users", userController.getUsers);
router.get("/users/:id", userController.getUser);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);

module.exports = router;
